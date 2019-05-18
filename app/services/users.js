const { user: User } = require('../models');

exports.createUser = user => User.create(user);

exports.findUser = email => User.findOne({ where: { email } });
