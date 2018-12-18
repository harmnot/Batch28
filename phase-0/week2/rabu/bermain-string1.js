console.log('\n' + ' ******************--------------*******************' + '\n');
// Let's Form a Sentence:

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!'

console.log(`${ word } ${ second } ${ third } ${ fourth } ${ fifth } ${ sixth } ${ seventh }` );

console.log('\n' + ' ******************--------------*******************' + '\n');

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substr( 0, 3);
var secondWord3 = word3.substr( 4, 10 );
var thirdWord3 = word3.substr( 15, 2 );
var fourthWord3 = word3.substr( 18, 2 );
var fifthWord3 = word3.substr( 21, 4 );

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

console.log('\n' + ' ******************--------------*******************' + '\n');

// Skeleton code:

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[ 4 ] + word[ 5 ] + word[ 6 ] + word[ 7 ] + word[ 8 ] + word[ 9 ] + word[ 10 ] + word[ 11 ] + word[ 12 ] + word[ 13 ];
var thirdWord = word.substr( 15, 2 );
var fourthWord = word.substr( 18, 2 );
var fifthWord = word.substr( 21, 4 );

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

console.log('\n' + ' ******************--------------*******************' + '\n');

// Breaking Sentence using subsctring:

var word3 = 'wow JavaScript is so cool';
var exampleFirstWord3 = word3.substr( 0, 3);
var secondWord3 = word3.substr( 4, 10 );
var thirdWord3 = word3.substr( 15, 2 );
var fourthWord3 = word3.substr( 18, 2 );
var fifthWord3 = word3.substr( 21, 4 );

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);

console.log('\n' + ' ******************--------------*******************' + '\n');

// breaking sentence with sentence.length:

var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substr( 0, 3);
var secondWord4 = word4.substr( 4, 10 );
var thirdWord4 = word4.substr( 15, 2 );
var fourthWord4 = word4.substr( 18, 2 );
var fifthWord4 = word4.substr( 21, 4 );

var exampleFirstWordLength = exampleFirstWord4.length;
var secondWordLength = secondWord4.length;
var thirdWordLength = thirdWord4.length;
var fourthWordLength = fourthWord4.length;
var fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + exampleFirstWordLength );
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength );
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength  );
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength );
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength );


console.log('\n' + ' ******************--------------*******************' + '\n');


