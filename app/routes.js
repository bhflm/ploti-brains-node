const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users'),
  sellers = require('./controllers/sellers');

exports.init = app => {
  app.get('/api/status', [], users.check);

  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);

  app.post('/api/sellers', [], sellers.create);
  app.post('/api/sellers/login', [], sellers.logIn);
  };
