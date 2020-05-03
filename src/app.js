const app = require('express')();
const routes = require('./routes');
const bodyParser = require("body-parser");

// setup environment vars
require('dotenv').config()

// parse as json
app.use(bodyParser.json());

// setup routes
app.use('/', routes);

module.exports = app;