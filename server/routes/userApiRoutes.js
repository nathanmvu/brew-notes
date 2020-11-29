const User = require('../models/User');
var passport = require('../utils/passport.js');

module.exports = function (app) {
  console.log('in userapiroutes');

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
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
  );

  app.post('/api/user', function (req, res) {
    console.log('signup', req.body);
    User.create({
      email: req.body.email,
      password: req.body.password,
    }).then(dbUser => {
      res.json(dbUser);
    }).catch(err => {
      res.send(err)
    });
  });

  app.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

  app.get('/logout', function (req, res) {
    if (req.user) {
      req.logout();
      res.redirect('/');
    }
  });
};