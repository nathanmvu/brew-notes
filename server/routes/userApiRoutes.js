db = require('../models');
var passport = require('passport');
require('../utils/passport.js');

module.exports = function (app) {
  console.log('in userapiroutes');

  app.post('/api/login',
    passport.authenticate('local', {
      successRedirect: '/home',
      failureRedirect: '/login',
    })
  );

  app.post('/api/signup', function (req, res) {
    console.log('signup', req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    }).then(function () {
      res.redirect(307, '/api/login');
    });
  });

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/userData', function (req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
};