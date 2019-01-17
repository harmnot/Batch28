function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ];

  let listObjArr = [];
  for (i of listBarang) {
    let [merk, price, stock] = [i[0], i[1], i[2]];

    let objList = {};
    objList = {
      brand: merk,
      price: price,
      stock: stock
    }
    listObjArr.push(objList);
  }
  // console.log(listObjArr)
  let arr = [];
  for ({brand,  price, stock} of listObjArr) {
    let obj = {};
    obj = {
      produk: brand,
      shoppers: [],
      leftOver: 0,
      totalProfit: 0
    }
    arr.push(obj);

    for ({name,product,amount} of shoppers) {
      if (product === obj.produk && stock >= amount) {
        obj.leftOver = (stock -= amount);
        obj["shoppers"].push(name);
        obj.totalProfit += (amount * price);
      } else {
        obj.leftOver = stock;
      }
    }
  }
  return !shoppers.length ? [] : arr;
}

// TEST CASES
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 2
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 3
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Stacattu',
  amount: 8
}, {
  name: 'Vanessa',
  product: 'Sepatu Stacattu',
  amount: 10
}, {
  name: 'Rani',
  product: 'Sweater Uniklooh',
  amount: 1
}, {
  name: 'Devi',
  product: 'Baju Zoro',
  amount: 1
}, {
  name: 'Lisa',
  product: 'Baju Zoro',
  amount: 1
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{
  name: 'Windi',
  product: 'Sepatu Naiki',
  amount: 5
}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
