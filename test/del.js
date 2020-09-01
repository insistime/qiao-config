'use strict';

var q = require('../lib/qiao-config');

q.set('key1', 'value1');
var s = q.get('key1');
console.log(s);

q.del('key1');
var all = q.all();
console.log(all);