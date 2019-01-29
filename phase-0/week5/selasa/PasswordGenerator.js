/*
Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

  Semua manipulasi string(changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan
return password - nya dari
*/


function changeVocals(str) {
  let [text, vocals] = ['', 'abcdefghijklmnopqrstuvwxyza'];
  for (let i = 0; i < str.length; i++) {
      let check = true
    for (let j = 0; j < vocals.length-1; j++) {
      if(str[i] == vocals[j])  {
        check = false;
        text += vocals[j+1]
      }
    }
    if(check) {
      text += str[i];
    }
  }
  return text
}
// console.log(changeVocals('Sergei Dragunov'))
function reverseWord(str) {
  if(str.length === 0){
    return ''
  } else {
    return reverseWord(str.slice(1)) + str[0]
  }
}
console.log(reverseWord('Sergei Dragunov'))
//
// function setLowerUpperCase(str) {
//   //code di sini
// }
//
// function removeSpaces(str) {
//   //code di sini
// }
//
// function passwordGenerator(name) {
//   //code di sini
// }
//
// console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
