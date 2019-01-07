function soal2(param) {

  var jumlah = param[0] * param[param.length - 1],
    length = param.length / 2;
  if (String(length).length === 1) {
    param[length - 1] = jumlah;
    param[length] = jumlah;
  } else {
    param[Math.floor(length)] = jumlah;
  };
  return param.length > 2 ? param : "invalid input";
};

console.log(soal2([34, '', '', '', 40]))
// [34,''1360,'',40]

console.log(soal2([1, 2, 3, 4, 5]))
// [1,2,5,4,5]

console.log(soal2([20, '', '', '', '', '', '', 30]))
// [20,'','',600,600,'','',30])

console.log(soal2([6, '', '', '', '', '', 9]))
// [6,'','',54,'','',9]

console.log(soal2([1, 2])) // invalid input
console.log(soal2([1])) // invalid input
console.log(soal2([])) // invalid input
