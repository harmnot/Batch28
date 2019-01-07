function soal1(objList, id, action) {
  var obj = {},
    obj2 = {},
    i = 0;
  for (keys in objList) {
    if (keys == id && action === "view")
      obj = objList[keys];
    else if (keys != id && action === "delete")
      obj2[i++] = objList[keys];
  }
  return action === "view" ? obj : obj2;
};

console.log(soal1({
  0: {
    name: "dimas",
    codename: "surgeon of death"
  },
  1: {
    name: "awtian",
    codename: "the black assasin"
  },
  2: {
    name: "icha",
    codename: "the real dementor"
  }
}, 1, "view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
  0: {
    name: "dimas",
    codename: "surgeon of death"
  },
  1: {
    name: "awtian",
    codename: "the black assasin"
  },
  2: {
    name: "icha",
    codename: "the real dementor"
  }
}, 1, "delete"));
/*
    {
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }
*/
