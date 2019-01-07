function soal1(param)
{
    var balik = "";
    var text = param.length;
    while(text--) {
      balik += param[text];
    };
    for(i of balik) {
      console.log(i);
    };
};

console.log(soal1("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/
