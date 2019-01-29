function hapusSimbol(str) {
  var rex = /[a-z\[0-9]/;
  var tampung = "";
 if (str === ""){
   return "";
 } else if(rex.test(str[0])){
   return tampung += str[0] + hapusSimbol(str.substr(1));
 } else {
   return tampung += hapusSimbol(str.substr(1));
 };
};

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100
