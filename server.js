const express = require('express');
const app = express();
//const bcrypt = require('bcrypt');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const sendmail = require('sendmail');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const users = JSON.parse(fs.readFileSync('./data/users.json'));
const accounts = JSON.parse(fs.readFileSync('./data/accounts.json'));

// GET requests

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/login', (req, res) => {
  const login = require('./views/login');
  res.status(200).send(login.render(req.query));
});

app.get('/register', (req, res) => {
  const register = require('./views/register');
  res.status(200).send(register.render(req.query));
});

app.get('/activate', (req, res) => {
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
        image: '',
      };
      users.push(user);
      fs.writeFileSync('./data/users.json', JSON.stringify(users));

      message = `User ${user.name} has been activated.`;
    }
  } else {
    message =
      'User could not be activated, as the user is unkown to the system.';
  }
  res.status(200).send(activate.render(message));
});

app.get('/dashboard', (req, res) => {
  const dashboard = require('./views/dashboard');
  res.status(200).send(dashboard.render(users));
});

app.get('/settings', (req, res) => {
  const settings = require('./views/settings');
  const user = users[0];
  res.status(200).send(settings.render(user));
});

// POST Requests

app.post('/register', async (req, res) => {
  const email = req.body.email;
  const account = accounts.find((account) => account.email === email);

  if (account) {
    res.redirect('/register?error=true');
  } else {
    try {
      const hashedPassword = req.body.password; //await bcrypt.hash(req.body.password, 10);
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

      sendmail({
        from: 'registration-Office@TheNetwork.com',
        to: email,
        subject: `Registration for user ${name}`,
        text: `Dear ${name},
                
                You habe successfully registered to TheNetwork.
                Inorder to log in to your account, you first need to activate it.
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

app.post('/login', async (req, res) => {
  const account = accounts.find((account) => account.name === req.body.name);
  if (!account) {
    res.redirect('/login?error=true');
  }
  try {
    if (req.body.password === account.password) {
      //await bcrypt.compare(req.body.password, account.password)) {
      res.redirect('/dashboard');
    } else {
      res.redirect('/login?error=true');
    }
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
