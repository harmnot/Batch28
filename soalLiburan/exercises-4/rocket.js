function rocket(param) {
  var arr = [],
    arrStr = [],
    i = 0;
  while (arr.length < param) {
    arrStr.push("")
    if (arrStr.length === param) {
      arr.push(arrStr);
      arrStr = [];
    };
  };
  var star = param / 2;
  if (param % 2 === 1) {
    arr[Math.floor(star)][Math.floor(star)] = "*";
  } else {
    arr[star - 1][star] = "*";
    arr[star - 1][star - 1] = "*";
    arr[star][star] = "*";
    arr[star][star - 1] = "*";
  };
  return arr;
};

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],

    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],

    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/
