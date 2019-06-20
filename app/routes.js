const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users');

exports.init = app => {
  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);
};
