const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const noteSchema = new Schema({
  author: { 
    type: String, 
    required: true 
  },
  beans: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  grind: { 
    type: String, 
    required: false
  },
  temperature: {
    type: String, 
    required: false 
  },
  time: {
    type: String, 
    required: false
  },
  description: { 
    type: String, 
    required: true 
  }
});
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;