const app = require('express')();
const routes = require('./routes');
require('dotenv').config()

// setup routes
app.use('/', routes);

module.exports = app;