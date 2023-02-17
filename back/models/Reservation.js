const mongoose = require('mongoose');
const User = require('./User');

const ResSchema = new mongoose.Schema({
  name: String,
  phone: String,
  roomtype: String,
  location: String,
  email: String,
  kid: String,
  adult: String,
  checkindate: Date,
  checkoutdate: Date,
  status: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  }
})

const Reservation = mongoose.model('Reservation', ResSchema);

module.exports = Reservation;