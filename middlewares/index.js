var path = require('path');

// provjerimo da li je dozvoljeno useru da pristupa na stranicu
// ako jeste idi next, tj. pusti ga

var isAuth = function (req, res, next) {
  if (req.cookies.loggedUser) {
    console.log('dozvoli', req.cookies.loggedUser);
    return next();
  }

  res.redirect('/public');
};

module.exports = {
  isAuth: isAuth,
};
