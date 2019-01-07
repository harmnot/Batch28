function soal3(param) {
  var obj = {};
  for (i of param) {
    if (!obj[i[0]])
      obj[i[0]] = [];
    obj[i[0]].push(i);
  };
  return obj
};

console.log(soal3(['Ayam', 'Kucing', 'Bebek', 'Sapi', 'Babi', 'Curut', 'Cacing', 'Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing', 'Kuda', 'Anoa', 'Zebra', 'Lipan', 'Kudanil', 'Landak']));

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
