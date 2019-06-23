const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users'),
  breadcrumbs = require('./controllers/breadcrumbs'),
  loafs = require('./controllers/loafs');

exports.init = app => {
  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);
  app.post('/admin/breadcrumb', [], breadcrumbs.create);
  app.post('/admin/area', [], loafs.knead);
};
