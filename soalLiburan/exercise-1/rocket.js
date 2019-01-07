/*
    soal :
    buatlah bendera inggris pada abad pertengahan dan era perang salib
    dengan lambang St. George's Cross,
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya
    hanya berupa spasi kosong dan char *
    petunjuk :
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
  var flag = "";
  for (var i = 0; i < param; i++) {
    for (var j = 0; j < param + 2; j++) {
      // flag += j
      if (j == 0 || j == param + 1) {
        flag += "'";
      } else if (i === (Math.floor(param / 2))) {
        flag += "*";
      } else if (j == (Math.round(param / 2))) {
        flag += "*";
      } else {
        flag += " ";
      };

    };
    flag += "\n";
  };
  return param % 2 === 1 ? flag : "invalid input";
};

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input
