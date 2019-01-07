/*
    wajib pseudocode.
    Jawaban pseudocode disini

*/

function soal2(param) {
  var abjad = "abcdefghijklmnopqrstuvwxyza",
    i = 0;
  var abcArr = [],
    arr = [];
  while (arr.length < param) {
    abcArr.push(abjad[i]);
    if (i === 26) {
      i = 0;
    };

    if (abcArr.length === param) {
      arr.push(abcArr)
      abcArr = []
    };
    i++
  };
  return param > 0 ? arr : "invalid input"
};

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input
