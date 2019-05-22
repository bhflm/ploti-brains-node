const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users'),
  makers = require('./controllers/makers');

exports.init = app => {
  app.get('/getall', [], users.findAll);

  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);

  app.post('/api/sellers', [], makers.create);
  app.post('/api/sellers/login', [], makers.logIn);
};
