const suuid = require('..')

module.exports  = length

function length (t) {
  t.test( 'generating uuids...', generate)
}

function generate (t) {
  t.plan(1)
  
  var i = 10000
  while (i--)
    if (8 !== suuid().length)
      t.fail(`suuid str length was not 8`)
  
  t.is(8, suuid().length, `10K suuids generated w/ length: 8`)
}