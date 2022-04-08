const Profile = require('../../models/Profile');

module.exports.createOrGetProfile = async (req, res) => {
  try {
    const findUser = await Profile.findOne({ user: req.user.id });

    // Create user, find and return user
    if (!findUser) {
      await Profile.create({ userId: req.user.id });
      res.status(200).json(await Profile.findOne({ user: req.user.id }));
    }

    // Return user
    if (findUser) {
      return res.status(200).json(findUser);
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};
