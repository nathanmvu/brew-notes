var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    function (email, password, done) {
      User.findOne({
        where: {
          email: email,
        },
      }).then(function (userDB) {
        if (!userDB) {
          return done(null, false, {
            message: 'Invalid email.',
          });
        } else if (!userDB.validPassword(password)) {
          return done(null, false, {
            message: 'Invalid password.',
          });
        }
        return done(null, userDB);
      });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});
passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = { passport };