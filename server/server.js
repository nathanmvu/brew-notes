const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const routes = require('./routes')
const passport = require('passport');
// const user = require('./routes/userApiRoutes');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use('/user', user);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Define API routes here
require('./utils/passport');
require('./routes/userApiRoutes')(app, passport);
// app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });
// app.get("/", (req, res) => {
//   // res.sendFile(path.join(__dirname, "../public/index.html"));
//   console.log('===== user!!======')
//   console.log(req.user)
//   if (req.user) {
//       res.json({ user: req.user })
//   } else {
//       res.json({ user: null })
//   }
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brewnotes");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});