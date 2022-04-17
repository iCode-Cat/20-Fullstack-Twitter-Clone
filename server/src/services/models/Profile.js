const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  username: { type: String, default: null },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  profilePic: {
    type: String,
    default:
      'http://www.jdmcontracting.net/wp-content/uploads/2016/05/bad-profile-pic-2.jpeg',
  },
  coverPic: {
    type: String,
    default: 'https://www.haberx.com/user/cover/default-cover-user.png',
  },
  description: {
    type: String,
    default: null,
  },
  following: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Number,
    default: 0,
  },
});

module.exports = Profile = mongoose.model('profile', profileSchema);
