const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  createdAt: {
    type: Date,
    required: true
  },
  userID: {
    type: String,
    required: true
  },
  title: { 
    type: String
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
    type: String
  },
  temperature: {
    type: String
  },
  time: {
    type: String
  },
  description: { 
    type: String, 
    required: true 
  },
  favorite: {
    type: Boolean
  }
});

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;