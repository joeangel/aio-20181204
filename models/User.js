var DB = require('../utils/DB');

var model = (uname) => DB.one(`SELECT uname, pwd FROM user WHERE uname = ?`, [uname]);

module.exports = model;
