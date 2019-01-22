/*
==========
GET PRIMES
==========

Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number.
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]
karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- WAJIB membuat algoritma/pseudocode untuk program getPrime

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/

// STORE 'result' with empty array;
// STORE 'prime' with empty array;
// STORE 'i' with 2;
// STORE 'j' with 1 multiply with 'i' and multiply 2
// WHILE 'i' less than equals 'num'
//       IF 'result' in 'i'  equals undefined
//          'i' push in array 'prime'
//   'i' added equals 1
//     WHILE 'j' less than equals 'num'
//         result in array j equals true
//       'j' added with 'i'
//     END WHILE 'j'
// END WHILE 'i'
//
// return prime;

function getPrime(num) {
  let [result, prime] = [
    [],
    []
  ];
  for (var i = 2; i <= num; i++) {
    if (!result[i]) {
      prime.push(i);
    }
    for (var j = 1 * i << 1; j <= num; j += i) {
      result[j] = true;
    }
  }
  return prime;
}



console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []
