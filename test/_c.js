'use strict';

var q = require('../lib/qiao-config');

// default path
var _c1 = q.c();
console.log(_c1);

// custom path
var _c2 = q.c('../');
console.log(_c2);