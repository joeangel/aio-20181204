// Create app
var api = require('../api')('/user');
var config = require('../config');
var Mongo = require('../utils/Mongo');


// Include models
var User = require('../models/User');

// Admin UI example
api.get('/logout', (req, res) => {
  res.clearCookie('aio');
  res.ok();
});

api.post('/login', (req, res) => {
  var {...formVar} = req.body;

  var user = User(formVar.uname);
  if (!user) return res.err(1, '帳號或密碼錯誤，請重新輸入');
  if (formVar.pwd !== user.pwd) return res.err(2, '帳號或密碼錯誤，請重新輸入');
  //res.cookie('aio', {uname: user.uname}, {httpOnly: true, signed: true, maxAge: 60*60*100});
  res.cookie('aio', {uname: user.uname}, {httpOnly: true, maxAge: 60*60*100});
  res.ok();
  //res.ok({
  //  we_need_data: {
  //    uname: formVar.uname,
  //    pwd: formVar.pwd,
  //    remember: formVar.remember,
  //  },
  //  formVar,
  //  headers: req.headers,
  //  post_data: req.body,
  //});
});

api.help('/help');
api.help('/test');

module.exports = api;
