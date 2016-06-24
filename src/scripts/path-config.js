'use strict';

var login = require('./login');
var config = {
	'/': login.showLoginPanel,
	'/login': login.showLoginPanel,
	'/doLogin' : login.doLogin,
	'/frame' : 'frame',
	'/upload' : 'upload'
};

exports.config = config;