function targetTerdekat(arr) {
  var indexO;
  var indexXkanan;
  var indexXkiri;

  // cari index O:
  for(var i = 0 ; i < arr.length ; i++){
    var data = arr[i];
    if(data === "o"){
      indexO = i;
    }
  }

  // lalu, looping index O dari ke kanan
  for(var i = indexO ; i < arr.length ; i++){
    var data = arr[i];
    if(data === "x"){
      indexXkanan = i;
      break;
    } else { // kalau tidak ketemu index O dengan index X
      //looping index O ke kiri 
      var a = indexO;
      while(a--){
        if(arr[a] === "x"){
          indexXkiri = a;
          break;
        } else {
          indexXkiri = NaN;
          indexXkanan = NaN; // harus jadi boolean karena index X tidak ditemukan sebelah kanan
        }
      }
    }
  }

  
  var tempXkanan = Math.abs(indexXkanan - indexO);
  var tempXkiri = Math.abs(indexXkiri - indexO);

  var final =  Math.min.apply(null, [tempXkanan,tempXkiri] ); // to check the shortest way from o to x ( right and left)

  var  result =  isNaN(final) ? tempXkiri : final;
  if(result) return result;
  else return !tempXkanan ? 0 : tempXkanan;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
