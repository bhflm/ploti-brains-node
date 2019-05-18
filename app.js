const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const Util = require('util');
const swaggerUi = require('swagger-ui-express');
const { config, ENVIRONMENT } = require('./config');
const routes = require('./app/routes');
const swaggerDocument = require('./swaggerDocument.json');

const init = () => {
  // Set up the express app
  const app = express();
  const port = config.api.port || 8080;
  // Log requests to the console.
  app.use(logger('dev'));

  // Parse incoming requests data (https://github.com/expressjs/body-parser)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //default route
  app.get('/', (req, res) => {
    console.info(
      `Incoming request: ${Util.inspect(
        { headers: req.headers, method: req.method, ip: req.ip, ips: req.ips, body: req.body,
          params: req.params, path: req.path, xhr: req.xhr, query: req.query },
        { depth: null }
      )}`
    );
    // console.info(Object.keys(req));
    res.json({});
  });

  //Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Require routes into app
  routes.init(app);
  // app.listen(port);

  console.log('PORT', port);
  if (ENVIRONMENT !== 'testing') {
    console.log('ENV:', ENVIRONMENT);
    app.listen(port);
  }

  module.exports = app;
  console.info(`up and running @ port:${port}`); // eslint-disable-line
};

init();
