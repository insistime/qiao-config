'use strict';

var q = require('../lib/qiao-config');

var test = async function(){
    try{
        var url = 'http://icanhazip.com/';
        var res = await q.put(url);
        console.log(res);
    }catch(e){
        console.log(e);
    }
};

test();