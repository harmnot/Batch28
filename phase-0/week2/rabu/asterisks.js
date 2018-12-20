// Menyusun Barisan Bintang:

var rows1 = 5;
var i = 0;
while( i < rows1 ) {
  console.log( '*' );
  i++
};

console.log( '\n' + '*************************-------------***************************' + '\n' )


// Menyusun barisan Bintang dengan Nested looping:

for( var [ i, rows2 ] = [ 0, 5 ] ; i < rows2 ; i++ ) {
 var print = '';
  for( var j = 0 ; j < rows2; j++ ) {
    print += "*";
  };
  console.log( print )
};

console.log( '\n' + '*************************-------------***************************' + '\n' )

// menyusun barisan tangga bintang dengan nested looping:

for( var [ i, rows3 ] = [ 0, 5 ] ; i < rows3 ; i++ ) {
  var display = '';
  for( var j = 0 ; j <= i ; j++ ) {
    display += '*';
  };
  console.log( display );
};

console.log( '\n' + '*************************-------------***************************' + '\n' )


