/*
    =========
    Triangel
    =========
    [INSTRUCTION]
    Buatlah sebuah program yang dapat mengenerate segitiga , dimana inputnya
    adalah tinggi (t) nya.
    bila t = 1 maka outputnya : t is invalid

    [EXAMPLE]
    triangel(5)
    output:
        *
       ***
      *****
     *******
    *********
    triangel(3)
    output:
        *
       ***
      *****
*/

function triangel(t) {
  var segi = "";
  for (var i = 0; i < t; i++) {
    for (var k = 0; k < t - i; k++) {
      segi += " ";
    }
    for (var j = 0; j < i; j++) {
      segi += "*" + "*";
    }
    segi += "*" + "\n";
  }
  return t > 1 ? segi : "t is invalid";
};

console.log(triangel(3));
/*

 *
 ***
 *****

*/

console.log(triangel(5));
/*

 *
 ***
 *****
 *******
 *********

*/

console.log(triangel(1)); // t is invalid
