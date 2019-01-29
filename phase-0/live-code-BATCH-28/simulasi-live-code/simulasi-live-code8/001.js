/*
==============
Catch Me if You Can
==============
Instruksi
=========
Seorang detektif sedang mengejar pelaku-pelaku kejahatan. Pelaku-pelaku kejahatan
ini akan memasang beberapa jebakan secara acak agar detektif tidak menangkap mereka.
Detektif memiliki 3 "nyawa", setiap detektif terkena jebakan maka "nyawa" dari detektif ini akan berkurang.

Buatlah sebuah algoritma/pseudocode yang akan menerima sebuah inputan array yang isinya adalah string berupa:
 - '@' adalah jebakan yang dipasang oleh pelaku-pelaku kejahatan
 - '*' adalah jalanan biasa
 - 'Villain' adalah pelaku kejahatan

Dimana function ini akan mengembalikan berapa banyak villain yang berhasil detektif tangkap.
Contoh
-------
1. inputan: ['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']
   output: Nice work, detective! You got all villains: 2
2. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']
   output: Ooops, you die. You got 3 villains
3. inputan: ['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']
   output: Ooops, you die. You got 2 villains
*/

// Algoritma / Pseudocode here..
/*
STORE 'jebakan' with 3;
STORE 'count' with 0;
STORE 'i' with 0;
WHILE 'i' less than input.length
    IF 'input' in 'i' equals '@'
      'jebakan' minus equals 1;
    ELSE IF  'input' in 'i' equals 'Villain'
      'count' plus equals 1;
    END IF

    IF 'jebakan' equals 0;
      SET 'count' equals 'count';
      break it;
    END IF
  i plus equals 1
END WHILE

IF 'jebakan' greater equals 1
  DISPLAY 'Nice work,detective! You got all villains: ' plus 'count'
ELSE
  DISPLAY 'Ooops, you die. You got ' plus 'count' plus ' Villain'
 */
function tangkap(input){
  let [jebakan, count] = [3, 0];
  for(i of input){
    if(i === "@"){
      jebakan--;
    } else if( i === 'Villain'){
      count++;
    }
    if(jebakan === 0){
      count = count;
      break;
    }
  }
  return jebakan >= 1 ? 'Nice work,detective! You got all villains: ' + count : 'Ooops, you die. You got ' + count + ' Villain'
};

console.log(tangkap(['*', '*', '@', '*', 'Villain', '*',  '@', 'Villain']))
console.log(tangkap(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain', 'Villain', '@']));
console.log(tangkap(['*', '*', '@', '*', '@' ,'Villain', '*', 'Villain',  '@', 'Villain']));
