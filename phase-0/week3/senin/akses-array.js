function balikString( str ) {
  var balik = "", arr = str.length;
  while( arr-- ) {
    balik += str[ arr ];
  }
  return balik;
};

console.log( balikString("Hello Wordl") );
