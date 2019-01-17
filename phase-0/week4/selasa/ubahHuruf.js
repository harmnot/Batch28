function ubahHuruf(kata) {
  // console.log(kata.charCodeAt(0))
  var result = "";
  if(kata.length === 0) {
    return result;
  } else if( kata.charCodeAt(0) ===  kata.charCodeAt(0)){
    var nextAlphabet = kata.charCodeAt(0)+1;
    result +=  String.fromCharCode(nextAlphabet);
  }
  return result + ubahHuruf(kata.slice(1));
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
