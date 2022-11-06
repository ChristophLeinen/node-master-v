const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

function initialize(passport, getAccountByName, getAccountById) {
  const authenticateUser = async (name, password, done) => {
    const account = getAccountByName(name);
    if (!account) {
      return done(null, false, { message: 'No user found!' });
    }

    try {
      if (password === account.password) {
        //await bcrypt.compare(password, account.password)) {
        return done(null, account);
      } else {
        return done(null, false, { message: 'Password was incorrect!' });
      }
    } catch (e) {
      return done(e);
    }
  };
  passport.use(new LocalStrategy({ usernameField: 'name' }, authenticateUser));
  passport.serializeUser((user, done) => {
    console.log('serializeUser');
    console.log('name ' + user.name);
    console.log('id ' + user.id);
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    console.log('deserializeUser');
    console.log('id ' + id);
    done(null, getAccountById(id));
  });
}

module.exports = initialize;
