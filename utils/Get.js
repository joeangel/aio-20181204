var request = require('request-promise');
var await = require('asyncawait/await');

var Get = (uri, qs, headers) => await(request({uri, qs, headers}));
Get.json = (uri, qs, headers) => await(request({uri, qs, headers, json: true}));

module.exports = Get;
