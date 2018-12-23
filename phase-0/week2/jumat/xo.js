function xo(str) {
  var x = 0;
  var o = 0;
  for( i of str ) {
    x += i === 'x';
    o += i === 'o';
  };
  return o === x
};

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
