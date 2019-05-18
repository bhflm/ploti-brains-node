const { get } = require('lodash');

// meant for Sequelize Database errors;
exports.errorInfo = err => get(err, ['errors', '0', 'message']);

// Invalid token

exports.badRequest = res => res.status(400).send({ message: 'bad request' });
