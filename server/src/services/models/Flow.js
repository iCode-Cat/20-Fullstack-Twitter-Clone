const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  tweet: {
    ref: 'tweet',
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {
    ref: 'user',
    type: mongoose.Schema.Types.ObjectId,
  },
  type: {
    type: String,
    enum: ['like', 'retweet', 'reply', 'comment', 'share'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Flow = mongoose.model('flow', flowSchema);
