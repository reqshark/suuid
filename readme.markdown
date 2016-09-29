# suuid

small identifier derived from UUID 8 character hex component. generate a
shorter piece of random uuid for testing or anything else. 

# install
```bash
$ npm i suuid
```

# use
```js
const suuid = require('suuid')

console.log( suuid() ) // somethiing like 'e1bdadd6'
```

# test
```bash
npm t
```

### MIT