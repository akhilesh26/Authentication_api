var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  const data = {
    Company: 'HOPE RESEARCH GROUP',
    Assignment: 'Basic Authentication API',
    Author: 'Akhilesh Kumar',
    Application: 'Baack-end Developer in Nide.js'
  }
  res.send(data);
});

module.exports = router;
