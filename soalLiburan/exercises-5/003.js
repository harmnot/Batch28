function soal3(param) {
  var arr = [],
    arrEven = [],
    temp = [],
    i = 1,
    j = 0;
  while (arr.length < param) {
    temp.push(i)
    if (temp.length === param) {
      arr.push(temp)
      temp = [];
    };
    i++;
  };
  while (j < arr.length) {
    if (j % 2 === 1) {
      // arr[j].reverse()
      i = arr[j].length
      while (i--) {
        arrEven.push(arr[j][i]);
      };
     arr[j] = arrEven;
     arrEven = []
   };
    j++
  };
  return arr;
  // console.log(arrEven)
};

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]
*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/
