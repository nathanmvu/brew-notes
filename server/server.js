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

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/brewnotes");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});