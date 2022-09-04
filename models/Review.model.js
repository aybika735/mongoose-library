const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
  author: {
    ref: 'Client',
    type: mongoose.Schema.Types.ObjectId
},
  book:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Book",
  },
 
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;