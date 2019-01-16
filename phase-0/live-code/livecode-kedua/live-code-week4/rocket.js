/*
PT XYZ memiliki beberapa cabang usaha masing masing cabang meberikan laporan bulanan income dan outcome mereka,
data ini telah terkumpul dalam bentuk berikut

EXAMPLE:

INPUT:
month  = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec'];
branches = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ], //Branch 1
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ], //Branch 2
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ] //Branch 3
]

dari data tersebut tampikan hasil income dan outcome perbulan masing masing cabang dengan formatsebagai berikut
| {bulan} | Branch-1 IN: {income} OUTCOME: {outcome} | Branch-2 IN: {income} OUT{outcome} | Branch-3 IN: {income} OUT{outcome} |

OUTPUT:

| jan | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 1200 | OUT: 700 | Branch-3 IN: 2000 | OUT: 500 |
| feb | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2500 | OUT: 1200 | Branch-3 IN: 1500 | OUT: 600 |
| march | Branch-1 IN: 2000 | OUT: 700 | Branch-2 IN: 2000 | OUT: 700 | Branch-3 IN: 1200 | OUT: 500 |
| april | Branch-1 IN: 1500 | OUT: 700 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 1200 | OUT: 700 |
| mei | Branch-1 IN: 2500 | OUT: 1200 | Branch-2 IN: 1500 | OUT: 700 | Branch-3 IN: 1500 | OUT: 1200 |
| jun | Branch-1 IN: 3500 | OUT: 1300 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 2000 | OUT: 1200 |
| jul | Branch-1 IN: 3500 | OUT: 1300 | Branch-2 IN: 1200 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1200 |
| august | Branch-1 IN: 2500 | OUT: 1200 | Branch-2 IN: 1200 | OUT: 500 | Branch-3 IN: 2500 | OUT: 1500 |
| sept | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 2000 | OUT: 500 | Branch-3 IN: 2000 | OUT: 1200 |
| oct | Branch-1 IN: 2000 | OUT: 1200 | Branch-2 IN: 2500 | OUT: 1200 | Branch-3 IN: 2500 | OUT: 1500 |
| nov | Branch-1 IN: 1200 | OUT: 500 | Branch-2 IN: 2000 | OUT: 1200 | Branch-3 IN: 2000 | OUT: 1200 |
| dec | Branch-1 IN: 4000 | OUT: 2200 | Branch-2 IN: 3500 | OUT: 1700 | Branch-3 IN: 4000 | OUT: 2200 |

*/

function printBranch(branches) {
  var i = branches.map(a => a[0])
 var  j = branches.map(a => a[1])
 var month = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec']
 console.log(i)
 // if(branches.length > 1 ){
 //   return `
 //   | jan | Branch-1 IN: ${i[0][0]} | OUT: ${j[0][0]} | Branch-2 IN: ${i[1][0]} | OUT: ${j[1][0]} | Branch-3 IN: ${i[2][0]} | OUT: ${j[2][0]} |
 //   | feb | Branch-1 IN: ${i[0][1]} | OUT: ${j[0][1]} | Branch-2 IN: ${i[1][1]} | OUT: ${j[1][1]} | Branch-3 IN: ${i[2][1]} | OUT: ${j[2][1]} |
 //   | march | Branch-1: ${i[0][2]} | OUT: ${j[0][2]} | Branch-2: ${i[1][2]} | OUT: ${j[1][2]} | Branch-3 IN: ${i[2][2]} | OUT: ${j[2][2]} |
 //   | april | Branch-1 IN: ${i[0][3]} | OUT: ${j[0][3]} | Branch-2 IN: ${i[1][3]} | OUT: ${j[1][3]} | Branch-3 IN: ${i[2][3]} | OUT: ${j[2][3]} |
 //   | mei | Branch-1 IN: ${i[0][4]} | OUT: ${j[0][4]} | Branch-2 IN: ${i[1][4]} | OUT: ${j[1][4]} | Branch-3 IN: ${i[2][4]} | OUT: ${j[2][4]} |
 //   | jun | Branch-1 IN: ${i[0][5]} | OUT: ${j[0][5]} | Branch-2 IN: ${i[1][5]} | OUT: ${j[1][5]} | Branch-3 IN: ${i[2][5]} | OUT: ${j[2][5]} |
 //   | jul | Branch-1 IN: ${i[0][6]} | OUT: ${j[0][6]} | Branch-2 IN: ${i[1][6]} | OUT: ${j[1][6]} | Branch-3 IN: ${i[2][6]} | OUT: ${j[2][6]} |
 //   | august | Branch-1 IN: ${i[0][7]} | OUT: ${j[0][7]} | Branch-2 IN: ${i[1][7]} | OUT: ${j[1][7]} | Branch-3 IN: ${i[2][7]} | OUT: ${j[2][7]} |
 //   | sept | Branch-1 IN: ${i[0][8]} | OUT: ${j[0][8]} | Branch-2 IN: ${i[1][8]} | OUT: ${j[1][8]} | Branch-3 IN: ${i[2][8]} | OUT: ${j[2][8]} |
 //   | oct | Branch-1 IN: ${i[0][9]} | OUT: ${j[0][9]} | Branch-2 IN: ${i[1][9]} | OUT: ${j[1][9]} | Branch-3 IN: ${i[2][9]} | OUT: ${j[2][9]} |
 //   | nov | Branch-1 IN: ${i[0][10]} | OUT: ${j[0][10]} | Branch-2 IN: ${i[1][10]} | OUT: ${j[1][10]} | Branch-3 IN: ${i[2][10]} | OUT: ${j[2][10]} |
 //   | dec | Branch-1 IN: ${i[0][11]} | OUT: ${j[0][11]} | Branch-2 IN: ${i[1][11]} | OUT: ${j[1][11]} | Branch-3 IN: ${i[2][11]} | OUT: ${j[2][11]} |
 //   `
 // }
 // else {
 //   return `
 //   | jan | Branch-1 IN: ${i[0][0]} | OUT: ${j[0][0]} |
 //   | feb | Branch-1 IN: ${i[0][1]} | OUT: ${j[0][1]} |
 //   | march | Branch-1 IN: ${i[0][2]} | OUT: ${j[0][2]} |
 //   | april | Branch-1 IN: ${i[0][3]} | OUT: ${j[0][3]} |
 //   | mei | Branch-1 IN: ${i[0][4]} | OUT: ${j[0][4]} |
 //   | jun | Branch-1 IN: ${i[0][5]} | OUT: ${j[0][5]} |
 //   | jul | Branch-1 IN: ${i[0][6]} | OUT: ${j[0][6]} |
 //   | august | Branch-1 IN: ${i[0][7]} | OUT: ${j[0][7]} |
 //   | sept | Branch-1 IN: ${i[0][8]} | OUT: ${j[0][8]} |
 //   | oct | Branch-1 IN: ${i[0][9]} | OUT: ${j[0][9]} |
 //   | nov | Branch-1 IN: ${i[0][10]} | OUT: ${j[0][10]} |
 //   | dec | Branch-1 IN: ${i[0][11]} | OUT: ${j[0][11]} |`
 // }

}

//TEST CASE 1
var data1 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ],
  [
    [1200, 2500, 2000, 2000, 1500, 2000, 1200, 1200, 2000, 2500, 2000, 3500], //Income
    [700, 1200, 700, 1200, 700, 1200, 500, 500, 500, 1200, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1200, 1200, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1200, 1200, 1200, 1500, 1200, 1500, 1200, 2200] //Outcome
  ]
]

console.log(printBranch(data1));

/*
| jan | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 1200 | OUT:700 |Branch-3 IN: 2000 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2500 | OUT:1200 |Branch-3 IN: 1500 | OUT:600 |
| march | Branch-1 IN: 2000 | OUT:700 |Branch-2 IN: 2000 | OUT:700 |Branch-3 IN: 1200 | OUT:500 |
| april | Branch-1 IN: 1500 | OUT:700 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 1200 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1200 |Branch-2 IN: 1500 | OUT:700 |Branch-3 IN: 1500 | OUT:1200 |
| jun | Branch-1 IN: 3500 | OUT:1300 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 2000 | OUT:1200 |
| jul | Branch-1 IN: 3500 | OUT:1300 |Branch-2 IN: 1200 | OUT:500 |Branch-3 IN: 2000 | OUT:1200 |
| augst | Branch-1 IN: 2500 | OUT:1200 |Branch-2 IN: 1200 | OUT:500 |Branch-3 IN: 2500 | OUT:1500 |
| sept | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 2000 | OUT:500 |Branch-3 IN: 2000 | OUT:1200 |
| oct | Branch-1 IN: 2000 | OUT:1200 |Branch-2 IN: 2500 | OUT:1200 |Branch-3 IN: 2500 | OUT:1500 |
| nov | Branch-1 IN: 1200 | OUT:500 |Branch-2 IN: 2000 | OUT:1200 |Branch-3 IN: 2000 | OUT:1200 |
| dec | Branch-1 IN: 4000 | OUT:2200 |Branch-2 IN: 3500 | OUT:1700 |Branch-3 IN: 4000 | OUT:2200 |
*/

// TEST CASE 2
var data2 = [
  [
    [1200, 1500, 2000, 1500, 2500, 3500, 3500, 2500, 1200, 2000, 1200, 4000], //Income
    [500, 700, 700, 700, 1200, 1300, 1300, 1200, 500, 1200, 500, 2200] //Outcome
  ]
]

console.log(printBranch(data2))
/*
| jan | Branch-1 IN: 1200 | OUT:500 |
| feb | Branch-1 IN: 1500 | OUT:700 |
| march | Branch-1 IN: 2000 | OUT:700 |
| april | Branch-1 IN: 1500 | OUT:700 |
| mei | Branch-1 IN: 2500 | OUT:1200 |
| jun | Branch-1 IN: 3500 | OUT:1300 |
| jul | Branch-1 IN: 3500 | OUT:1300 |
| augst | Branch-1 IN: 2500 | OUT:1200 |
| sept | Branch-1 IN: 1200 | OUT:500 |
| oct | Branch-1 IN: 2000 | OUT:1200 |
| nov | Branch-1 IN: 1200 | OUT:500 |
| dec | Branch-1 IN: 4000 | OUT:2200 |
*/
