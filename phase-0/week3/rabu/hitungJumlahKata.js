function hitungJumlahKata(kalimat) {
  var tampung = "", result = [];
  for(var i of kalimat) {
    if(i !== " "){
      tampung += i;
    } else {
      result[result.length] = tampung;
      tampung = "";
    }
  }
  result[result.length] = tampung;
  return result.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
