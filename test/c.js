'use strict';

var q = require('../lib/qiao-config');

// set
q.c('test', 'hello');
console.log(q.all());

// get
var s = q.c('test');
console.log(s);

// del
q.c('test', null);
console.log(q.all());