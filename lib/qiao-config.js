'use strict';

// qiao
var qiao = require('qiao.util.file');

// config path
var configPath = qiao.path.resolve(__dirname, './config.json');

/**
 * clear
 */
exports.clear = function(){
	writeFile('');
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
 * config
 * 	config('key', value);
 * 	config('key');
 * 	config('key', null);
 */
exports.config = function(key, value){
	// remove
	if(value === null){
		del(key);
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return get(key);
	}
	
	// set
	set(key, value);
};

// get
function get(key){
	if(typeof key == 'undefined'){
		console.log('qiao-config:get, need key');
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
}

// set
function set(key, value){
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
}

// del
function del(key){
	if(typeof key == 'undefined'){
		console.log('qiao-config:del, need key');
		return;
	}

	var v = get(key);
	if(!v) return;

	var all = exports.all();
	delete all[key];

	try{
		writeFile(JSON.stringify(all));
	}catch(e){
		console.log(`qiao-config:del, write file error ${e.message}`);
	}
}

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