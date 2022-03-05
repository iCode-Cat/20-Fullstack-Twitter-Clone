const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  img: String,
});

module.exports = User = mongoose.model('user', userSchema);
