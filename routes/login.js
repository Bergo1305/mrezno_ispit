var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

var User = mongoose.model('User');

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__basedir + '/views/login.html'));
});

router.get('/public', function(req, res, next) {
  res.sendFile(path.join(__basedir + '/views/public.html'));
});

router.post('/login', function(req, res, next) {
  User.findOne({
    username: req.username
  }).then(function(user){
    if(!user || !user.validPassword(req.body.password)){
      return res.status(401).send(false);
    }

    res.cookie('loggedUser', req.body.username, { maxAge: 900000, httpOnly: true });
    Console.log(req.body.username);
    res.send(req.body.username);

  }).catch(function () {
    return res.status(500).send('Internal error');
  });

});

router.post('/logout', function(req, res, next) {
  res.clearCookie('loggedUser');
  res.send(true);
});

module.exports = router;
