
function persegi(param1, param2) {
  var text = "";
  for (var i = 0; i < param2; i++) {
    for (var j = 0; j < param1; j++) {
      if ((i == 0 || j == 0) || (i === param2 - 1) || (j == param1 - 1)) {
        text += "#";
      } else {
        text += " ";
      }
    }
    text += "\n";
  };
  return param1 === 0 || param2 === 0 ? "invalid value" : text;
};

console.log(persegi(5, 7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6, 3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0, 7)) // invalid value
console.log(persegi(4, 0)) // invalid value
