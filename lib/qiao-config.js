'use strict';

// qiao
var qiao = require('qiao.util.file');

// config path
var configPath = qiao.path.resolve(__dirname, './config.json');
console.log(configPath);

/**
 * set
 * 	key
 * 	value
 */
exports.set = function(key, value){
	if(!key){
		console.log('qiao-config:set, need key');
		return;
	}

	var json;
	try{
		var jsonStr = readFile(configPath);

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	json.key = value;
	try{
		writeFile(configPath, JSON.stringify(json));
	}catch(e){
		console.log(`qiao-config:set, write file error ${e.message}`);
	}
};

/**
 * get
 * 	key
 */
exports.get = function(key){
	if(!key){
		console.log('qiao-config:get, need key');
		return;
	}

	var json;
	try{
		var jsonStr = readFile(configPath);

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	return json.key;
};

// write file
function writeFile(path, data){
	qiao.fs.writeFileSync(path, data);
}

// read file
function readFile(path){
	try{
		// not exists write file
		if(!qiao.isExists(path)) writeFile(path, '');
		
		return qiao.fs.readFileSync(path, {encoding:'utf8'});
	}catch(e){
		return null;
	}
}