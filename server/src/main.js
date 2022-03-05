require('dotenv').config();
const { makeServer } = require('./services/server');
const { makeStorageService } = require('./services/storageService');
const config = process.env;

module.exports = {
  run,
};

const services = {
  server: null,
  stroage: null,
};

async function run() {
  services.server = makeServer();
  services.stroage = await makeStorageService({ config });
}
