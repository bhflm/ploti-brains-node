const express = require('express');
const bodyParser = require('body-parser');
const Util = require('util');
const { config, ENVIRONMENT } = require('./config');
const logger = require('./app/logger');
const routes = require('./app/routes');

const init = () => {
  // Set up the express app
  const app = express();
  const port = config.api.port || 8080;
  // Parse incoming requests data (https://github.com/expressjs/body-parser)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //default route for loggin incoming reqs
  app.get('/', (req, res) => {
    logger.info(
      `Incoming request: ${Util.inspect(
        {
          headers: req.headers,
          method: req.method,
          ip: req.ip,
          ips: req.ips,
          body: req.body,
          params: req.params,
          path: req.path,
          xhr: req.xhr,
          query: req.query
        },
        { depth: null }
      )}`
    );
    // console.info(Object.keys(req));
    res.json({});
  });

  //Swagger
  // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // TODO

  // Require routes into app
  routes.init(app);
  if (ENVIRONMENT !== 'testing') {
    console.info('ENV:', ENVIRONMENT);
    app.listen(port);
  }

  module.exports = app;
  console.info(`🚀 BRAINS UP N' RUNNIN @ port:${port} 🚀`); // eslint-disable-line
};

init();
