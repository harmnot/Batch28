function soal1(param) {
  // with magic :
  //
  //   let arr = Array.from({length: param}).fill("");
  //   if(param % 2 === 1){
  //     arr[Math.floor(param/2)] = "x"
  //   } else {
  //     arr[param/2] = "x"
  //     arr[(param/2) -1] = "x"
  //   }
  // return param <= 0 ? "invalid input" : arr;

  var arr = new Array(param),
    i = arr.length,
    length = param / 2,
    lengthMinus = length - 1;

  while (i--) {
    if (param % 2 === 1) {
      if (String(length).length > 1 && i == String(length)[0]) {
        arr[i] = "*";
      } else {
        arr[i] = "";
      };
    } else {
      if (String(length).length === 1 && i === lengthMinus) {
        arr[i] = "*";
        arr[i + 1] = "*";
      } else {
        arr[i] = "";
      };
    };
  }

  return param <= 0 ? "invalid input" : arr;
};

// test case
console.log(soal1(5));
/*
    output :
    ['','','*','','']
*/

console.log(soal1(4)) // ['','*','*','']

console.log(soal1(7)) // ['','','','*','','','']

console.log(soal1(10)) // ['','','','','*','*','','','','']

console.log(soal1(0)) // invalid input
