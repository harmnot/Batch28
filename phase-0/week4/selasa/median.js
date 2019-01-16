function cariMedian(arr) {
  var result = Math.round( arr.length / 2 );
  var final = 0;
  var i = 0;
  while( i < arr.length ) {
    if( i == result ) {
      final = ( arr[ i ] + arr[ result-1 ] ) / 2
    }
    i++
  }
  return arr.length % 2 === 1 ?  arr[ result-1 ] : final
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
