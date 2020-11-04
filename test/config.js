'use strict';

var q = require('../lib/qiao-config');

// set
q.config('test', 'hello');
console.log(q.all());

// get
var s = q.config('test');
console.log(s);

// del
q.config('test', null);
console.log(q.all());