'use strict';

var jade = require('jade'),
	loginPanel = './src/templates/login.jade';

function checkedLogin(req, res){
	return false;
};

exports.checkedLogin = checkedLogin;

exports.showLoginPanel = function (req, res) {
	console.info('----show login panel-----');
	var loginStatus = checkedLogin(req, res);

	if(loginStatus !== true){
		jade.renderFile(loginPanel, {
			pretty: true
		}, function(err, html){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(html);
			res.end();
		});
	}
};

exports.doLogin = function (req, res) {

};
