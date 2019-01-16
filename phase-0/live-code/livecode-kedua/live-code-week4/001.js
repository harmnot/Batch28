/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5


[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*
your Pseudocode/ Algoritma here

STORE 'gold' with 0;
STORE 'silver' with 0;
STORE 'brpnze' with 0;
STORE 'i' with 0;

WHILE i less than array.length
    STORE 'data' = array in
    IF 'data' equals "G"
      gold added equals 1
    ELSE IF 'data' equals "S"
      silver added equals 1
    ELSE
      bronze added equals 1
  i added equals 1
END WHILE

DISPLAY  jumlah gold:  "gold", jumlah Silver: "silver", jumlah Bronze:  "bronze". Dan totalnya adalah:  'gold' multiply 2 added silver multiply 1 added bronze multiply 0.5
*/

function poinCalculator(array) {
  var [gold, silver, bronze] = [0,0,0];
  for(i of array) {
    if(i === "G"){
      gold++
    } else if( i === "S"){
      silver++
    } else {
      bronze++
    }
  }
  return "jumlah gold: " + gold  + "," + "jumlah Silver: " + silver + "jumlah Bronze:" + bronze + ". Dan totalnya adalah: " + ((gold * 2)+(silver *1)+(bronze * 0.5));
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
