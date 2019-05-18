const config = require('./index').config.common.database;

module.exports = {
  production: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: true
  },
  development: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: false
  },
  testing: {
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: false
  }
};
