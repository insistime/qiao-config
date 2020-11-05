'use strict';

// qiao
var qiao = require('qiao.util.file');

// db
var DB = require('./db.js');

/**
 * db
 * 	p
 */
exports.db = function(p){
	// path
	var defaultPath = qiao.path.resolve(__dirname, './config.json');
	var finalPath	= !p ? defaultPath : qiao.path.resolve(process.cwd(), p); 

	// db
	return new DB(finalPath);
};