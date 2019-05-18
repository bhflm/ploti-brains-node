const factory = require('factory-girl').factory,
  { user: User } = require('./../../app/models');

factory.define('user', User, {
  id: 1,
  email: 'hi@joedoe.com',
  password: '$2a$10$U8zsI3bk3tSLeWugYSQXQ.EglGoWiENv2USrlVI2LE/2n48RAFhGy',
  dni: 40000000,
  license: 'B1',
  car: 'Honda Accord'
});

exports.factoryUser = () => factory.create('user');
