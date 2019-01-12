function groupAnimals(animals) {
  var obj = {};
  var iterators = animals.keys(); // index of arrays 

  for(key of iterators){
    if(!obj[animals[key][0]])
      obj[[animals[key][0]]] = [];
      obj[[animals[key][0]]].push(animals[key]);
  }
  return Object.values(obj).sort();
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
