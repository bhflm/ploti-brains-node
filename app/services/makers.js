const { makers: Maker } = require('../models');

exports.createMaker = mkr => Maker.create(mkr);

exports.findMaker = email => Maker.findOne({ where: { email } });
