// Tugas 1:

function shoutOut(  ) {
  return 'Halo Function!'
};

console.log( shoutOut(  ) )

console.log( "\n" + "--------****--------" + "\n" );

function calculateMultiply( num1, num2 ) {
  return num1 * num2;
};

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply( num1, num2 );
console.log( hasilPerkalian );

console.log( "\n" + "--------****--------" + "\n" );


// TUGAS 3:


function processSentence( name, age, adress, hobby ) {
  return `Nama saya ${ name }, umur saya ${ age } tahun, alamat saya di ${ adress }, dan saya punya hobby yaitu ${ hobby }!`;
};

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);

console.log( "\n" + "--------****--------" + "\n" );


