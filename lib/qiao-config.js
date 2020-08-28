'use strict';

// qiao
var qiao = require('qiao.util.file');

// config path
var configPath = qiao.path.resolve(__dirname, './config.json');

/**
 * get
 * 	key
 */
exports.get = function(key){
	if(typeof key == 'undefined'){
		console.log('qiao-config:set, need key');
		return;
	}

	var json;
	try{
		var jsonStr = readFile();

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	return json[key];
};

/**
 * set
 * 	key
 * 	value
 */
exports.set = function(key, value){
	if(typeof key == 'undefined'){
		console.log('qiao-config:set, need key');
		return;
	}

	var json;
	try{
		var jsonStr = readFile();

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	json[key] = value;
	try{
		writeFile(JSON.stringify(json));
	}catch(e){
		console.log(`qiao-config:set, write file error ${e.message}`);
	}
};

/**
 * all
 */
exports.all = function(){
	var json;
	try{
		var jsonStr = readFile();

		json = JSON.parse(jsonStr);
	}catch(e){
		json = {};
	}

	return json;
};

/**
 * clear
 */
exports.clear = function(){
	writeFile('');
};

// write file
function writeFile(data){
	qiao.fs.writeFileSync(configPath, data);
}

// read file
function readFile(){
	try{
		// not exists write file
		if(!qiao.isExists(configPath)) writeFile(configPath, '');
		
		return qiao.fs.readFileSync(configPath, {encoding:'utf8'});
	}catch(e){
		return null;
	}
}