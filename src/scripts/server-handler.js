'use strict';

var route = require("./route"),
	url = require("url");

var doHandler = function(req, res){
	var pathname = url.parse(req.url).pathname;
	//console.log("Request for " + pathname + " received.");
	route.doRoute(pathname, req, res);
	//response.setHeader("Access-Control-Allow-Origin", "*");
	//response.setHeader("Access-Control-Allow-Credentials", "true");
}

exports.doHandler = doHandler;
