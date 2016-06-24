'use strict';

var jade = require('jade'),
	errorTemp = './src/templates/error.jade';

function getErrorHtml(errorNo, errorMsg, res){
	jade.renderFile(errorTemp, {
		errorNo: errorNo,
		errorMsg: errorMsg
	}, function(err, html){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(html);
		res.end();
	});
}

exports.error404 = function(res){
	getErrorHtml('404', 'page not found', res);
};

exports.error500 = function(res){
	getErrorHtml('500', 'internal error', res);
};

exports.errorOthers = function(res, e){
	getErrorHtml('unknown error', e || 'unknown error', res);
};