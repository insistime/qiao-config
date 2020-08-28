'use strict';

/**
 * get
 * 	url, url
 * 	config, https://www.npmjs.com/package/axios#request-config
 * 	return res, https://www.npmjs.com/package/axios#response-schema
 */
exports.get = function(url, config){
	return req(url, 'get', config);
};