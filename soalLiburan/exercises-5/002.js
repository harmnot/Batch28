function soal2(param) {
  var array = [],
    arr = [],
    length = param / 2;
  while (array.length < Math.round(length)) {
    arr.push("");
    if (arr.length == param) {
      array.push(arr);
      arr = [];
    };
  };
  // console.log(Math.floor(length));
  for (var i = 0; i < array.length; i++) {
    var data = array[i];
    for (var j = 0; j < data.length; j++) {
      var star = Math.floor(length) - i;
      var star2 = Math.floor(length) + i;
      if (j >= star && j <= star2) {
        data[j] = "*";
      };
      // console.log(star2);
    };
  };
  return param % 2 === 1 ? array : "invalid input";
};

console.log(soal2(5));
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3));
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)); // invalid input
console.log(soal2(2)); // invalid input
console.log(soal2(6)); // invalid input
