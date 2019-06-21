const { get, pickBy } = require('lodash'),
  moment = require('moment'),
  logger = require('../logger'),
  errors = require('../errors'),
  { parseLoafCoords } = require('../utils/kneader'),
  { bakeLoaf } = require('../services/loafService');

exports.knead = (req, res) => {
  const loafArea = parseLoafCoords(req.body.coords);
  const loaf = {
    name: get(req, ['body', 'name']),
    loafArea
  };
  return bakeLoaf(loaf)
    .then(() => res.json({}))
    .catch(err => {
      logger.error(err.message);
      res.status(err.statusCode);
      return res.send(err.message);
    });
};
