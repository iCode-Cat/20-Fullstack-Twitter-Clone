const express = require('express');
const auth = require('./api/routes/auth');
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

module.exports = {
  makeServer,
};

app.use(express.json());
app.use(express.static('public'));

// Mongo Session
const store = new MongoDBStore({
  uri: process.env.DB_CONNECTION,
  databaseName: 'sessions',
});

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      //   sameSite: 'none',
      //   httpOnly: false,
      // //   secure: true,
    },
    store,
  })
);

require('./api/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
// API
app.use('/api/auth', auth);

async function makeServer() {
  const PORT = process.env.PORT || 3333;
  app.listen(PORT, () => console.log('server started'));
}