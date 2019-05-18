const SALT_ROUNDS = 10,
  bcrypt = require('bcryptjs'),
  { get } = require('lodash'),
  errors = require('../errors'),
  session = require('../middlewares/session'),
  { createUser, findUser } = require('../services/users');

exports.check = (req, res) => res.status(200).send({ message: 'OK' });

exports.create = (req, res) => {
  const user = {
    name: get(req, ['body', 'name']),
    lastname: get(req, ['body', 'lastname']),
    email: get(req, ['body', 'email'])
  };
  return bcrypt
    .hash(req.body.password, SALT_ROUNDS)
    .then(hash => {
      const newUser = { ...user, password: hash };
      return createUser(newUser).then(() => res.status(200).end());
    })
    .catch(err => res.status(400).send(errors.errorInfo(err)));
};

exports.logIn = (req, res) => {
  const userEmail = get(req, ['body', 'email']);
  const userPassword = get(req, ['body', 'password']);
  return findUser(userEmail)
    .then(credentials => {
      if (credentials) {
        return bcrypt.compare(userPassword, credentials.password).then(isValid => {
          if (!isValid) return res.status(400).send('Invalid password'); // TODO: HANDLER BETTER ERRORS
          const auth = session.encode({ email: credentials.email });
          res.set('authorization', auth);
          res.json(auth);
        });
      }
    })
    .catch(err => res.status(400).send(errors.errorInfo(err)));
};
