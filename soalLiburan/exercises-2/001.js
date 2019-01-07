/*
    analisa sendiri dengan apa yang diminta soal melalui test case.
    wajib menggunakan pseudocode
    PSEUDOCODE HERE :
*/
function soal1(param) {
  var arr = [],
    markIt = true,
    add = true,
    hastag = true;
  while (arr.length < param) {
    var pushThis = "";
    if (markIt) {
      pushThis = "!";
      markIt = false;
    } else if (add) {
      pushThis = "@";
      add = false;
      hastag = true;
    } else if (hastag) {
      pushThis = "#";
      hastag = false;
      markIt = true;
      add = true;
    };
    arr.push(pushThis)
  };
  return param > 0 ? arr : "invalid input"
};

console.log(soal1(3))
// output : ['!','@','#'] 123     123

console.log(soal1(6));
// output : ['!','@','#','!','@','#'] 123 123

console.log(soal1(4))
// output : ['!','@','#','!'] 123 1

console.log(soal1(0)) // invalid input
