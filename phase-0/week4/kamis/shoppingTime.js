function shoppingTime(memberId, money) {

  let list = {
    "Sepatu Stacattu": 1500000,
    "Baju Zoro": 500000,
    "Baju H&N": 250000,
    "Sweater Uniklooh": 175000,
    "Casing Handphone": 50000
  };

  let obj = {
    memberId: memberId,
    money: money,
    listPurchased: [],
    changeMoney: 0
  };
  if (!memberId || !money) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  }

  for (stuff in list) {
    if (money >= list[stuff]) {
      obj["listPurchased"].push(stuff);
      obj["changeMoney"] = money -= list[stuff];
    }
  }

  return obj;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
