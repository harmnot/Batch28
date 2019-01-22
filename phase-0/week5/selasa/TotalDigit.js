function totalDigitRekursif(angka) {
  let [strAngka, sum] = [String(angka), 0]
  if(strAngka.length === 0) return 0;
  else sum += +(strAngka[0])
  return sum + totalDigitRekursif(strAngka.slice(1))
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
