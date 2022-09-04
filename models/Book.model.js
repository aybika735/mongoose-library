const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre:  {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Genre",
  },
  reviews:[{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Reviews",
  }],
  rents:[{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Client",
    default: null,

  }]

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;