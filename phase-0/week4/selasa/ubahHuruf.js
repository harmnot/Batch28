function ubahHuruf(kata) {
  let output = "";
  let abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < kata.length; i++) {
    let abjad = kata[i];
    for (let j = 0; j < abc.length; j++) {
      if (abjad == abc[j]) {
        output += abc[j + 1];
      }
    }
  }
  return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
