/*
    ============
    Generate Bar
    ============
    Buatlah Program untuk mengenerate Bar ( persegi Panjang ) berdasarkan
    - p => panjang
    - t => tinggi
*/

function generateBar(p, t) {
  var hasil = "";
  for (var i = 0; i < t; i++) {
    for (var j = 0; j < p; j++) {
      hasil += i === 0 || i === t - 1 || j == 0 || j == p - 1 ? "o" : " ";
    }
    hasil += "\n";
  }
  return p > t ? hasil : "panjang harus lebih besar daripada tinggi";
};

console.log(generateBar(4, 3)) //
/*
    oooo
    o  o
    oooo
*/

console.log(generateBar(10, 4)) //
/*
    oooooooooo
    o        o
    o        o
    oooooooooo
*/

console.log(generateBar(4, 5)) // panjang harus lebih besar daripada tinggi
