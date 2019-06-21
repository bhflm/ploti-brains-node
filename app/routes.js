const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users'),
  breadcrumbs = require('./controllers/breadcrumbs');

exports.init = app => {
  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);
  app.post('/bread', [], breadcrumbs.create);
};
