function changeMe(arr) {
  var output = [], date = new Date().getFullYear(), text = "";
  if(!arr.length) return text;
  for( [ firstName, lastName, gender, year] of arr){
    var obj = {
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      age: !year ? 'Invalid Birth Year' : date-year
    }
    output.push(obj);
  }
  for(var index = 0 ; index < output.length;index++) {
    text += (index+1 ) + ". " + output[index].firstName + " "+ output[index].lastName + ": " + '\n' + JSON.stringify(output[index]) + "\n";
  }
  return text;
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(changeMe([])); // ""
