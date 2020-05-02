const about = require('express').Router();

about.get('/', (req, res) => {
    res.status(200).json({ message: 'About!' });
});

module.exports = about;