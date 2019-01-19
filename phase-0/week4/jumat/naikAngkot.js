function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var arr = [];
  for( [ nama, dari, tujuan] of arrPenumpang){
    var obj = {
      penumpang: nama,
      naikDari: dari,
      tujuan: tujuan
    }
    var check = false, count = -1;
    for( rutes of rute) {
      if(obj.naikDari === rutes){
        check = true;
      }
    if(check){
      count++
    }
    if(obj.tujuan === rutes){
      obj.bayar = count*2000
      break
    }
  }
    arr.push(obj)
  }
  return arr
};

//TEST CASE
console.log(naikAngkot([
  ['Dimitri', 'B', 'F'],
  ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
