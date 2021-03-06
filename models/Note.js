const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, creates a new NoteSchema object
const NoteSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String,
});

// Creates the model from the above schema, using mongoose's model method
const Note = mongoose.model('Note', NoteSchema);

// Export the Note model
module.exports = Note;
