const Profile = require('../../models/Profile');

module.exports.createOrGetProfile = async (req, res) => {
  try {
    const findUser = await Profile.findOne({ userId: req.user.id });
    console.log(req.user.id);
    // Create user, find and return user
    if (!findUser) {
      await Profile.create({
        userId: req.user.id,
        profilePic: req.user.profilePic,
      });
      res.status(200).json(
        await Profile.findOne({
          userId: req.user.id,
        })
      );
    }

    // Return user
    if (findUser) {
      return res.status(200).json(findUser);
    }
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

// @router /api/auth/profile/:id ( helloKitty )
// @desc GET User Profile
module.exports.getUserProfile = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  try {
    const profile = await Profile.findOne({ username: id });
    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }
    return res.status(200).json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

module.exports.updateProfile = async (req, res) => {
  const { username, firstName, lastName, description } = req.body;

  try {
    const profile = await Profile.findOne({ userId: req.user.id });
    if (!profile) {
      return res.status(404).json({ msg: 'Profile not found' });
    }

    profile.username = username;
    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.description = description;

    await profile.save();
    return res.status(200).json(profile);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};
