var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello from things homepage');
})

router.get('/bye', function (req, res) {
    res.send('Goodbye from things homepage');
})

module.exports = router