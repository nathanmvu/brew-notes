var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

console.log('in passport');
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
      }).then(function (err, user) {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false, {
            message: 'Invalid email.',
          });
        } else if (!user.validPassword(password)) {
          return done(null, false, {
            message: 'Invalid password.',
          });
        }
        return done(null, user);
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

module.exports = passport;