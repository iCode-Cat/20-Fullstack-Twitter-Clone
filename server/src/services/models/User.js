const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: String,
    profilePic: String,
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('user', userSchema);
