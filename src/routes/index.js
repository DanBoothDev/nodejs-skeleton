const routes = require('express').Router();

// add routes
// examples of routing methods
routes.use('/about', require('./about'));
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;