function scotlandFlag(param) {
  var x = "";
  for (var i = 0; i < param; i++) {
    for (var j = 0; j <= param + 1; j++) {
      if (j == 0 || j == param + 1) {
        x += "'";
      } else if (i == j - 1) {
        x += "*";
      } else if (i == param - j) {
        x += "*";
      } else {
        x += " ";
      };
    };
    x += "\n";
  };
  return x;
};

console.log(scotlandFlag(5));
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9));
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/
