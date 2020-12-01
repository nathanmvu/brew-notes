const User = require('../models/User');
var passport = require('../utils/passport.js');

module.exports = function (app) {
  app.post('/', function(req, res) {
    const { username, password } = req.body
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
  })

  app.post('/api/user/login',
    function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
   },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
        res.redirect('/home');
    }
  );

  app.post('/api/user', function (req, res) {
    console.log('signup', req.body);
    const { email, password } = req.body
    console.log('email', email);
    User.findOne({ email: email }, (err, user) => {
      if (err) {
          console.log('User post error: ', err)
      } else if (user) {
          res.json({
              error: `Sorry, already a user with that email`
          })
      }
      else {
        User.create({
          email: email,
          password: password,
        }).then(dbUser => {
          console.log('usercreate dbuser', dbUser);
          res.json(dbUser);
        }).catch(err => {
          console.log('usercreate error', err);
          res.send(err);
        });
      }
    })
  });

  app.get('/api/user', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

  app.post('/api/user/logout', function (req, res) {
    console.log('in logout');
    if (req.user) {
      req.logout()
      res.send({ msg: 'logging out' })
    } else {
      res.send({ msg: 'no user to log out' })
    }
  });
};