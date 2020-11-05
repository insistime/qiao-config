'use strict';

var q = require('../lib/qiao-config');

var db  = q.db();
var s   = db.all();
console.log(s);