// Create app
var api = require('../api')('/');

// Include models
//var Car = require('../models/Car');

api.get('/', {}, (req, res) => {
  console.log(req.cookies);
  res.ok({cookies: req.cookies});
  //res.render({cars: Car.getAllInfo()}, 'public/index.html');
});

module.exports = api;
