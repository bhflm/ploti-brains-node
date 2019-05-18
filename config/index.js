exports.ENVIRONMENT = process.env.NODE_ENV || 'development';

if (exports.ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

exports.config = {
  common: {
    database: {
      host: process.env.DB_HOST,
      name: process.env.DB_NAME,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    }
  },
  api: {
    port: process.env.PORT
  }
};
