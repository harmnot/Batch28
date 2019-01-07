function soal3(param)
{
    var minus = [], plus = [];
    for([a1,a2] of param) {
      if(a2 >= 20) {
        plus.push(a1)
      } else {
        minus.push(a1)
      }
    }
    return {
      under20: minus,
      over20: plus
    }
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/
