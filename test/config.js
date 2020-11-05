'use strict';

var q = require('../lib/qiao-config');

var db = q.db();

// set
db.config('test', 'hello');
console.log(db.all()); // { test: 'hello' }

// get
var s = db.config('test');
console.log(s);

// // del
// q.config('test', null);
// console.log(q.all());