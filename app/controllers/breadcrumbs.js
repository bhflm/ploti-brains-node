const { get } = require('lodash'),
  moment = require('moment'),
  logger = require('../logger'),
  errors = require('../errors'),
  { createBreadcrumb } = require('../services/breadcrumbService');

exports.create = (req, res) => {
  const breadcrumb = {
    trackerId: get(req, ['body', 'trackerId']),
    position: {
      type: 'Point',
      coordinates: [req.body.long, req.body.lat],
      crs: { type: 'name', properties: { name: 'EPSG:4326' } }
    },
    time: moment().format()
  };
  return createBreadcrumb(breadcrumb)
    .then(breadRes => {
      return res.json(breadRes);
    })
    .catch(err => {
      logger.error(err.message);
      res.status(err.statusCode);
      return res.send(err.message);
    });
};
