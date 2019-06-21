const { loaf: Loaf } = require('../models');

exports.bakeLoaf = loaf => Loaf.create(loaf);
