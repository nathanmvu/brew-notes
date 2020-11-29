const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;