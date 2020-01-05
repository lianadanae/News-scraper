const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },

  // Populate the Article with an associated Note
  note: {
    type: Schema.Types.ObjectId,
    ref: 'Note',
  },
});

// Creates the model from the above schema, using mongoose's model method
const Article = mongoose.model('Article', ArticleSchema);

// Export the Article model
module.exports = Article;
