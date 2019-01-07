/*
    ===========
    Bar X dan O
    ===========
    program ini berfungsi mengenerate Persegi Panjang dengan Character O dan X
    [INSTRUCTION]
    diberikan 2 buah parameter untuk mengenerate Bar
    - p => panjang
    - t => tinggi
    character yang pertama kali di cetak adalah x ,
    lalu o dan setelah itu o kemudian kembali lagi ke x
    [EXAMPLE]
    generateBarXO(4,3)
    output:
    xoox
    ooxo
    oxoo
    generateBarXO(6,4)
    output:
    xooxoo
    xooxoo
    xooxoo
    xooxoo
*/


function generateBarXO(p, t) {
  var text = "";
  i = 0, x = "",
    jumlah = p * t,
    xo = "xoox";
  while (text.length < jumlah) {
    x += xo[i];
    if (x.length === p) {
      text += x + "\n"
      x = "";
    };
    if (i == xo.length - 1) {
      i = 0
    };
    i++;
  }
  return text;
};

console.log(generateBarXO(4, 3));
/*
xoox
ooxo
oxoo
xoox
*/

console.log(generateBarXO(6, 4))
/*
xooxoo
xooxoo
xooxoo
xooxoo
*/
