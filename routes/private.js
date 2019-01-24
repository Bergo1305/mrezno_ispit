var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/private', function(req, res, next) {
  res.sendFile(path.join(__basedir + '/views/private.html'));
});

module.exports = router;
