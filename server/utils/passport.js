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
      // console.log('passport-local');
      User.find().then(console.log);
      User.findOne({
          email: email,
          password: password,
      }, function (err, user) {

        if (err) {
          console.log(err);
          return done(err)
        }
        if (!user) {
          return done(null, false, {
            message: 'Invalid email or password.',
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