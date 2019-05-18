const SALT_ROUNDS = 10,
  bcrypt = require('bcryptjs'),
  { get } = require('lodash'),
  sessionManager = require('../middlewares/session'),
  errors = require('../errors'),
  { createCompany, findCompany } = require('../services/sellers');

exports.create = (req, res) =>
  bcrypt
    .hash(req.body.password, SALT_ROUNDS)
    .then(hash => {
      const newCompany = {
        name: get(req, ['body', 'name']),
        email: get(req, ['body', 'email']),
        password: hash
      };
      return createCompany(newCompany).then(() => res.json({}));
    })
    .catch(err => {
      const error = errors.errorInfo(err);
      return res.status(400).send(error);
    });

exports.logIn = (req, res) => {
  const companyEmail = get(req, ['body', 'email']);
  const companyPassword = get(req, ['body', 'password']);
  return findCompany(companyEmail)
    .then(credentials => {
      if (credentials) {
        return bcrypt.compare(companyPassword, credentials.password).then(isValid => {
          if (!isValid) return res.status(400).send('Invalid password'); // TODO: Factorear handler de errores
          const auth = sessionManager.encode({ email: credentials.email });
          res.set('authorization', auth);
          res.json(auth);
        });
      }
    })
    .catch(err => res.status(400).send(errors.errorInfo(err)));
};
