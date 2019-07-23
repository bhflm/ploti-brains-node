const breadcrumbs = require('./controllers/breadcrumbs'),
  loafs = require('./controllers/loafs');

exports.init = app => {
  app.get('/status', [], breadcrumbs.status);
  app.post('/geo', [], breadcrumbs.log);
  app.post('/admin/breadcrumb', [], breadcrumbs.create);
  app.post('/admin/area', [], loafs.knead);
};
