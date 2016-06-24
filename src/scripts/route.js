'use strict';

var pathConfig = require('./path-config').config,
	errors = require('./errors'),
	map = {};


var doRoute = function(path, req, res){
	var routeFun = pathConfig[path];

	if(!pathConfig[path] || pathConfig[path] === ''){
		if(path === '/favicon.ico'){
		}else {
			errors.error404(res);
		}
	}else{
		try{
			routeFun(req, res);
		}catch(e){
			errors.errorOthers(res, e);
		}
	}
};

exports.doRoute = doRoute;

