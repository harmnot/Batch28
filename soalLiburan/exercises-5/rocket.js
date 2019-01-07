function rocket(param) {
  var arr = [],
    arrNum = [],
    i = 0,
    j = 0;
  while (arr.length < param) {
    arrNum.push([i, j]);
    if (arrNum.length === param) {
      arr.push(arrNum);
      arrNum = [];
      i++;
    };
    if (j === param - 1) {
      j = 0;
    } else {
      j++;
    };
  }
  return param > 0 ? arr : "Invalid input";
};

console.log(rocket(3));

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/
