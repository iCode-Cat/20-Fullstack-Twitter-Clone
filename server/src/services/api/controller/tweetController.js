const Tweet = require('../../models/Tweet');
const Profile = require('../../models/Profile');

// @router /api/tweet/create
// @desc POST Tweet
module.exports.tweetCreate = async (req, res) => {
  try {
    const profileId = await Profile.findOne({ userId: req.user.id });
    const tweet = await Tweet.create({
      userId: profileId._id,
      ...req.body,
    });
    res.status(200).json(tweet);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/tweet/:id
// @desc GET a Tweet
module.exports.tweetGet = async (req, res) => {
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
module.exports.tweetDelete = async (req, res) => {
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
module.exports.tweetAll = async (req, res) => {
  try {
    const tweets = await Tweet.find({}).populate('userId');
    res.status(200).json(tweets);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};
