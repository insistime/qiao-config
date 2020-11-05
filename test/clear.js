'use strict';

var q = require('../lib/qiao-config');

var db  = q.db();
db.clear();

// {}
console.log(db.all());