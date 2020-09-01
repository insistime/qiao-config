# qiao-config
json config to local file

## api
### all
```javascript
'use strict';

var q = require('qiao-config');

var s = q.all();
console.log(s);
```

### clear
```javascript
'use strict';

var q = require('qiao-config');

q.clear();
```

### c
```javascript
'use strict';

var q = require('qiao-config');

// set
q.c('test', 'hello');
console.log(q.all());

// get
var s = q.c('test');
console.log(s);

// del
q.c('test', null);
console.log(q.all());
```

### get
```javascript
'use strict';

var q = require('qiao-config');

var s = q.get('key');
console.log(s);
```

### set
```javascript
'use strict';

var q = require('qiao-config');

q.set('key', 'value');
```

### del
```javascript
'use strict';

var q = require('qiao-config');

q.set('key1', 'value1');
var s = q.get('key1');
console.log(s);

q.del('key1');
var all = q.all();
console.log(all);
```

## version
### 0.0.2.20200901
1. del ok
2. c ok

### 0.0.1.20200828
1. init project
2. get ok
3. set ok
4. all ok
5. clear ok