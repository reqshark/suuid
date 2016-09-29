module.exports = function suuid() {
  var g = gen()
  while ( g.length < 8 ) g = gen()
  return g
}

function gen() {
  var sm = [], i = 256
  while (i--) sm[ i ] = i < 16 ? '0' : '' + ( i ).toString( 16 )
  var uu = Math.random() * 0xffffffff | 0
  return sm[ uu & 0xff ]
       + sm[ uu >> 8 & 0xff ]
       + sm[ uu >> 16 & 0xff ]
       + sm[ uu >> 24 & 0xff ]
}