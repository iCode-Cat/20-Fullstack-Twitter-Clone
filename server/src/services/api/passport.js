const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
dotenv.config();

module.exports = function (passport) {
  // Google
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
      },

      async (accessToken, refreshToken, profile, done) => {
        const userObject = new User({
          username: profile.id,
          profilePic: profile.photos[0].value,
        });
        try {
          const user = await User.findOne({ username: profile.id });
          console.log(profile.id);
          if (user) {
            return done(null, user);
          }
          await userObject.save();
          return done(null, userObject);
        } catch (error) {
          console.log(error);
        }
      }
    )
  );
  // Settings
  // Set Session
  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  // Attach session profile to the req.user
  passport.deserializeUser(async (user, done) => {
    // const user = await User.findOneAndUpdate(
    //   { _id: id },
    //   { lastLogin: moment().format('MM/DD/HH:mm') }
    // ).select('-password');
    // // Always get current last login
    // if (user) {
    //   user.lastLogin = moment().format('MM/DD/HH:mm');
    // }
    try {
      const userObject = await User.findById(user._id);
      done(null, userObject);
    } catch (error) {
      done(error);
      console.log(error);
    }
  });
};
