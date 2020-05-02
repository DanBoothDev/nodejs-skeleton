const app = require('express')();
const routes = require('./routes');

// setup routes
app.use('/', routes);

module.exports = app;