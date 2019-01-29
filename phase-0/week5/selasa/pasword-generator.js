
function changeVocals (str) {
  var tampung = '';
  var vocal = 'aieuo';
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < str.length; i++){
    var check = false;
    for(var j = 0; j < vocal.length; j++){
      if(vocal[j] === str[i] || vocal[j].toUpperCase() === str[i]){
        check = true;
        for(var k = 0; k < abjad.length;k++){
          if(str[i] === abjad[k]){
            tampung += abjad[k+1];
          } else if(str[i] === abjad[k].toUpperCase()){
            tampung += abjad[k+1].toUpperCase();
          }
        }
      }
    }
    if(!check){
     tampung += str[i];
    }
  }
  return tampung;
}

function reverseWord (str) {
  var tampung = '';
  for(var i = str.length -1 ; i >= 0 ; i--){
    string = str[i]
    tampung += string
  }
  return tampung
}

function setLowerUpperCase (str) {
 var tampung = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      tampung += str[i].toUpperCase();
    } else {
      tampung += str[i].toLowerCase();
    }
  }
return tampung;
}

function removeSpaces (str) {
  return str.replace(/ +/g, "");
 
}

function passwordGenerator (name) {
  if(name.length >= 5 ){
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
  } else {
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
