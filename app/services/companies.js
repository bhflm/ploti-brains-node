const { company: Company } = require('../models');

exports.createCompany = company => Company.create(company);

exports.findCompany = email => Company.findOne({ where: { email } });
