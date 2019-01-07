function trapesiumRelease0(t) {
    var result = "";
    for(var i = t ; i < t*2; i++) {
      for(var j = 0 ; j < i; j++) {
        result += "o";
      }
      result += "\n";
    }
  return result;
};

console.log(trapesiumRelease0(5));
/*
ooooo
oooooo
ooooooo
oooooooo
ooooooooo
*/


function trapesiumReleaseFinal(t) {
    var final = "";
     for(var i = t ; i < t*2; i++) {
      for(var j = 0 ; j < i; j++) {
        final += i === t || i+1 == t*2 || j == 0 || j == i-1 ? "o" : " ";
      };
      final += "\n";
    };
  return final;
};

console.log(trapesiumReleaseFinal(5));
/*
ooooo
o    o
o     o
o      o
ooooooooo
*/
