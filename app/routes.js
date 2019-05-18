const authMiddleware = require('./middlewares/auth'),
  users = require('./controllers/users'),
  companies = require('./controllers/companies');
  
exports.init = app => {
  app.get('/api/status', [], users.check);

  app.post('/api/users', [], users.create);
  app.post('/api/users/login', [], users.logIn);

  app.post('/api/companies', [], companies.create);
  app.post('/api/companies/login', [], companies.logIn);

  };
