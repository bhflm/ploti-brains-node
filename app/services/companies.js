const { seller: Seller } = require('../models');

exports.createSeller = seller => Seller.create(seller);

exports.findSeller = email => Seller.findOne({ where: { email } });
