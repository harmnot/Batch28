console.log('\n' + ' ******************--------------*******************' + '\n');

// Berlatih menggunakan While:

var i = 2;

console.log( "LOOPING PERTAMA" );
while( i <= 20 ) {
  console.log( i, "I Love Coding" );
  i+=2;
};

var j = 22;

console.log( '\n', 'LOOPING KEDUA' );
while( j-=2) {
  console.log( j, "I will become fullstack developer" );
};

console.log('\n' + ' ******************--------------*******************' + '\n');

// berlatih menggunakan FOR:

console.log( 'LOOPING PERTAMA' );
for( var i = 1 ; i <= 20; i++ ) {
  console.log( i, "I Love Coding" );
};


console.log( '\n', 'LOOPING KEDUA' );
for(var j = 20; j >= 1 ; j-- ) {
  console.log( j, "I will become fullstack developer" );
};

console.log('\n' + ' ******************--------------*******************' + '\n');

//  Agka Ganjil dan Genap:

for( var z = 1 ; z <= 100 ; z++ ) {
  if( z % 2 === 0 ) {
    console.log( z, 'Angka Genap ini' )
  } else {
    console.log( z, '------------------->', 'Angka Ganji' )
  };
};

console.log('\n' + ' ******************--------------*******************' + '\n');

var g= 1;
while( g <= 100 ) {
  if( g % 3 === 0 ) {
    console.log( g, 'ini Kelipatan 3' );
  } else {
    console.log( ' ' );
  };
  g+=2
};

console.log('\n' + ' ******************--------------*******************' + '\n');

var x = 1;
while( x <= 100 ) {
  if( x % 6 === 0 ) {
    console.log( x, "Kelipatan 6" );
  } else {
    console.log( ' ' );
  };
  x+=5
};

console.log('\n' + ' ******************--------------*******************' + '\n');

var k = 1;
while( k <= 100 ) {
  if( k % 10 === 0 ) {
    console.log( k, "kelipatan 10" );
  } else {
    console.log( ' ' );
  };
  k+=9
};

console.log('\n' + ' ******************--------------*******************' + '\n');
