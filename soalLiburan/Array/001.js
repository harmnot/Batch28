/*
    ==================
    WordToArrayReverse
    ==================
    [INSTRUCTION]
    buatlah sebuah program yang mengconvert string menjadi array, yang di reverse
    posisinya berdasarkan per kata
    [RULE]
    - dilarang menggunakan function bawaan javascript kecuali split
    [EXAMPLE]
    wordToArrayReverse("Hello my name is Dimas")
    output:["Dimas","is","name","my","Hello"]
    wordToArrayReverse("Lorem ipsum sit dolor amet")
    output:["amet","dolor","sit","ipsum","Lorem"]
*/

function wordToArrayReverse(str) {
  // without split and push:
  var text = "",
    arr = [],
    balik = [],
    i = 0;
  while (i < str.length) {
    if (str[i] !== " ") {
      text += str[i]
    } else {
      balik[balik.length] = text;
      text = "";
    };
    i++;
  }
  balik[balik.length] = text ? text : '';
  j = balik.length;
  while (j--) {
    arr[arr.length] = balik[j];
  }
  return arr;
};

console.log(wordToArrayReverse("Hello my name is Dimas"));
//["Dimas","is","name","my","Hello"]

console.log(wordToArrayReverse("Lorem ipsum sit dolor amet"))
//["amet","dolor","sit","ipsum","Lorem"]
