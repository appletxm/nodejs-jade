'use strict';

var httpServer = require('./server'),
	serverHandler = require('./server-handler'),
	currentServer;

httpServer.create('localhost', 8000, serverHandler.doHandler);
