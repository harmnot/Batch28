function tukarBesarKecil(kalimat) {
  var output = "",
    i = 0;
  while (i < kalimat.length) {
    kalimat[i] === kalimat[i].toLowerCase() ? output += kalimat[i].toUpperCase() :
      output += kalimat[i].toLowerCase()
    i++
  }
  return output;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
