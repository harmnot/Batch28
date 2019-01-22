function ubahHuruf(kata) {
  let output = "";
  let abc = "abcdefghijklmnopqrstuvwxyza";
  for (let i = 0; i < kata.length; i++) {
    let abjad = kata[i];
    for (let j = 0; j < abc.length-1; j++) {
      if (abjad == abc[j]) {
        output += abc[j + 1];
      }
    }
  }
  return output;
}

// TEST CASES
console.log(ubahHuruf('woq')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
