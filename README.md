# qiao-config
json config to local file

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

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

### config
```javascript
'use strict';

var q = require('qiao-config');

// set
q.config('test', 'hello');
console.log(q.all());

// get
var s = q.config('test');
console.log(s);

// del
q.config('test', null);
console.log(q.all());
```

## version
### 0.0.2.20200901
1. del ok
2. c ok
3. md

### 0.0.1.20200828
1. init project
2. get ok
3. set ok
4. all ok
5. clear ok