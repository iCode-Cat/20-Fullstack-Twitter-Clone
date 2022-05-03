const Tweet = require('../../models/Tweet');

// @router /api/tweet/create
// @desc POST Tweet
module.exports.tweet_create = async (req, res) => {
  try {
    const tweet = await Tweet.create(req.body);
    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/tweet/:id
// @desc GET a Tweet
module.exports.tweet_get = async (req, res) => {
  try {
    const tweet = await Tweet.findOne({ _id: req.params.id });
    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/tweet/delete/:id
// @desc DELETE Tweet
module.exports.tweet_delete = async (req, res) => {
  try {
    const tweet = await Tweet.findOneAndDelete({ _id: req.params.id });
    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/tweet/all
// @desc GET Tweets
module.exports.tweet_all = async (req, res) => {
  try {
    const tweets = await Tweet.find({});
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};
