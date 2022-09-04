const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: String,
  books: [{
    ref: 'Book',
    type: mongoose.Schema.Types.ObjectId
}],
  isBlocked:{
    type: Boolean,
    default: false,
  },

});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;