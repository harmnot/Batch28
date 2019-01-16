function cariModus(arr) {
  var obj = {  };
  for( i in arr ) {
    obj[ arr[ i ] ] = ( obj[ arr[ i ] ] || 0  ) + 1;
  }
  var objArr = [ obj ]
  // console.log( objArr )
  var max = null;
  for( j in objArr ) {
      var data = objArr[ j ];
    for( k in data ) {
      if( objArr.length === 1 && data[ k ] == arr.length ) {
        max = -1
      } else if ( max === null || data[ k ] > max ) {
        max = data[ k ];
        if( max == 1 ) {
          max = -1;
        } else { 
          max = k;
        }
      }
    }
  }
  return max;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
