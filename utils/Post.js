var request = require('request-promise');
var await = require('asyncawait/await');

var Post = (uri, qs, headers) => await(request({method: 'POST', uri, form: qs, headers}));
Post.json = (uri, qs, headers) => await(request({method: 'POST', uri, qs, json: true, headers}));

module.exports = Post;
