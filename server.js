const express = require('express');
const fileUpload = require('express-fileupload');
const uuidv4 = require('uuid').v4;
const bcrypt = require('bcrypt');
const app = express();

const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./data/users.json'));
const accounts = JSON.parse(fs.readFileSync('./data/accounts.json'));
const sessionStore = JSON.parse(fs.readFileSync('./data/sessions.json'));

app.use(fileUpload());
app.use(express.urlencoded({ extended: false }));

// GET requests
app.get('/', checkAuthenticated, (req, res) => {
  const dashboard = require('./views/dashboard');
  res.status(200).send(dashboard.render(users, req.user.id));
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  const login = require('./views/login');
  res.status(200).send(login.render(req.query));
});

app.get('/register', checkNotAuthenticated, (req, res) => {
  const register = require('./views/register');
  res.status(200).send(register.render(req.query));
});

app.get('/activate', checkNotAuthenticated, (req, res) => {
  const activate = require('./views/activate');
  const account = accounts.find((account) => account.id === req.query.uuid);
  let message;
  if (account) {
    if (account.active) {
      message = 'User was already activated.';
    } else {
      account.active = true;
      fs.writeFileSync('./data/accounts.json', JSON.stringify(accounts));

      const user = {
        id: account.id,
        name: account.name,
        status: '',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/PICA.jpg',
      };
      users.push(user);
      fs.writeFileSync('./data/users.json', JSON.stringify(users));

      message = `User ${user.name} has been activated.`;
    }
  } else {
    message =
      'User could not be activated, as the user is unknown to the system.';
  }
  res.status(200).send(activate.render(message));
});

app.get('/dashboard', checkAuthenticated, (req, res) => {
  const dashboard = require('./views/dashboard');
  res.status(200).send(dashboard.render(users, req.user.id));
  res.redirect('/login');
});

app.get('/images/:path', checkAuthenticated, (req, res) => {
  res.sendFile(__dirname + req.url);
});

app.get('/settings', checkAuthenticated, (req, res) => {
  const settings = require('./views/settings');
  const account = accounts.find((account) => req.user.id === account.id);
  res.status(200).send(settings.render(req.user, account.email, req.query));
});

app.get('/logout', checkAuthenticated, (req, res) => {
  const sessionId =
    (req.headers.cookie && req.headers.cookie.split('=')[1]);
  delete sessionStore[sessionId];

  var exDate = new Date();
  exDate.setDate(exDate.getDate() - 1); // remove one day
  res.set('Set-Cookie', `session=; expires=${exDate}`);
  fs.writeFileSync('./data/sessions.json', JSON.stringify(sessionStore));
  res.redirect('/');
});

// POST Requests
app.post('/login', checkNotAuthenticated, async (req, res) => {
  const account = accounts.find((account) => req.body.email === account.email);
  if (account) {
    if (await bcrypt.compare(req.body.password, account.password)) {
      const sessionId = uuidv4();
      sessionStore[sessionId] = account.id;
      fs.writeFileSync('./data/sessions.json', JSON.stringify(sessionStore));

      var exDate = new Date();
      exDate.setDate(exDate.getDate() + 1); // add a day
      res.set('Set-Cookie', `session=${sessionId}; expires=${exDate}`);
      res.redirect('/');
    } else {
      res.redirect('/login?error=true');
    }
  } else {
    res.redirect('/login?error=true');
  }
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  const email = req.body.email;
  const account = accounts.find((account) => account.email === email);

  if (account) {
    res.redirect('/register?error=true');
  } else {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const id = uuidv4();
      const name = req.body.name;
      const account = {
        id: id,
        name: name,
        email: email,
        password: hashedPassword,
        active: false,
      };

      accounts.push(account);
      fs.writeFileSync('./data/accounts.json', JSON.stringify(accounts));

      const sendmail = require('sendmail');
      sendmail({
        from: 'registration-Office@TheNetwork.com',
        to: email,
        subject: `Registration for user ${name}`,
        text: `Dear ${name},

                You have successfully registered to TheNetwork.
                In order to log in to your account, you first need to activate it.
                For this, please use the following activation link:
                http://localhost:3000/activate?uuid=${id}

                Best Regards,
                The Registration Office
                TheNetwork`,
      });
      res.status(201).redirect(`/register?mail=${email}`);
    } catch {
      res.status(500).send();
    }
  }
});

app.post('/settings', checkAuthenticated, (req, res) => {
  req.user.status = req.body.status;

  if (req.files) {
    req.user.image = `images/${req.user.id}-${req.files.image.name}`;
    fs.writeFileSync(req.user.image, req.files.image.data);
  }
  fs.writeFileSync('./data/users.json', JSON.stringify(users));

  res.status(201).redirect('/settings?saved=true');
});

function checkAuthenticated(req, res, next) {
  const sessionId =
    (req.headers.cookie && req.headers.cookie.split('=')[1]);
  const userId = sessionStore[sessionId];
  if (userId && sessionId) {
    req.user = users.find((user) => user.id === userId);
    if (req.user) {
      return next();
    }
  }

  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next) {
  const sessionId = req.headers.cookie && req.headers.cookie.split('=')[1];
  const userId = sessionStore[sessionId];
  if (!userId || !sessionId) {
    return next();
  }

  res.redirect('/');
}

app.listen(3000);
