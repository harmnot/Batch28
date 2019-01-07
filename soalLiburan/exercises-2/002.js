function soal2(param) {
  var arr = param.splice(Math.round(param.length / 2)),
    i = arr.length,
    newArr = [],
    j = 0,
    result = [];

  while (i--) {
    newArr.push(arr[i]);
  }
  newArr.push("Instructur");
  while (j < param.length) {
    result.push([param[j], newArr[j]]);
    j++
  }

  return result;
};

console.log(soal2(['Aries', 'Dimas', 'Gatot', "Nurmantyo", "Zainul", "Majdi"]))
/*
    output:
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A', 'B', 'C', 'D', 'E'])) //
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan', 'Albert', 'Erithiana', 'Zaki', 'Sisijoan', 'Henry', "Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]
