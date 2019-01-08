function pasanganTerbesar(num) {
  var str = ""+ num, max = null;
  for(var i = 0 ; i < str.length ; i++){
    if(max === null || (str[i]+str[i+1]) > max){
      max = (str[i]+str[i+1]);
    };
  }
  return max;
};

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
