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
        // console.log('passport-local(then)');
        // console.log('err',err);
        // console.log('user',user);
        if (err) {
          console.log(err);
          return done(err)
        }
        if (!user) {
          return done(null, false, {
            message: 'Invalid email or password.',
          });
        }
        // } else if (!user.checkPassword(password)) {
        //   return done(null, false, {
        //     message: 'Invalid password.',
        //   });
        // }
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