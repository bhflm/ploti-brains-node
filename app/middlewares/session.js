const jwt = require('jwt-simple'),
  auth = require('basic-auth');

const SECRET = 'xxxx';

exports.HEADER_NAME = 'authorization';

exports.encode = toEncode => jwt.encode(toEncode, SECRET);

exports.decode = toDecode => jwt.decode(toDecode, SECRET);

exports.basic = req => auth(req);
