const suuid = require('..')

module.exports  = uniqueness

function uniqueness (t) {
  t.test( 'generating uuids...', generate)
}

function generate (t) {
  t.plan( 1 )

  var i = 10000, k = []
  while (i--)
    k.push( suuid() )
  
  t.is( k.map( j => k.filter( l => l === j )).length,
    k.length,
    `uniqueness criteria:
      ${ k.length / 1000 }K ids generated w/out collision`)
}