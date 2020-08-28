# qiao-config
json config to local file

## api
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

## version
### 0.0.1.20200828
1. init project
2. get ok
3. set ok