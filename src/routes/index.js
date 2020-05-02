const routes = require('express').Router();
const about = require('./about');

routes.use('/about', about);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;