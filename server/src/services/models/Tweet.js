const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'profile',
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
  },
  privacy: {
    type: String,
    enum: ['public', 'friends', 'private'],
    default: 'public',
  },
});

module.exports = Tweet = mongoose.model('tweet', TweetSchema);
