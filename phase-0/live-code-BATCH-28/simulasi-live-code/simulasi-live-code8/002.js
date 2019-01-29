/*
==========
Encrypt Me
==========

[INSTRUCTIONS]
Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

Berikut adalah kamus huruf dari HBI
huruf biasa : abcdefghijklmnopqrstuvwxyz
huruf H8BI  : !@#$%^&*()-+1234567890[]{}

Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

Note:
- Selain karakter huruf biasa maka tidak akan di-translate

[EXAMPLE]
input: dimitri
output: $(1(86(

input: @wtian
output: @[8(!2

[RULES]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
- DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf / .includes!
*/

/*
STORE 'kamus' with '!@#$%^&*()-+1234567890[]{}';
STORE 'abc' with 'abcdefghijklmnopqrstuvwxyz';
STORE 'text' with empty string;
STORE 'i' with 0;
STORE 'j' with 0;

WHILE 'i' less than 'input.length'
    WHILE 'j' less than 'abc.length'
        IF 'input' in 'i' === 'abc' in 'j'
          'text' equals text plus 'kamus' in 'j';
        END IF

        IF 'input' in 'i' === 'kamus' in 'j'
          'text' equals text plus 'kamus' in 'j';
        END IF

        IF 'input' equals ' '
          'text' equals text plus ' ';
          break it;
        END IF
      j plus equals 1
      END WHILE
  i plus equals 1
END WHILE

  return 'text';
 */

function encryptMe(input) {
  let kamus = '!@#$%^&*()-+1234567890[]{}'
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let text = '';
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if(input[i] == abc[j]){
        text += kamus[j];
      }
       if( input[i] === kamus[j]){
        text += kamus[j];
      }
      if(input[i] == " "){
        text = text + " ";
        break;
      }
    }
  }
  return text
}

console.log(encryptMe('dimitri')) // $(1(86(
console.log(encryptMe('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encryptMe('dimitr€€')) // $(1(86€€
console.log(encryptMe('d!mas')) // $!1!7
console.log(encryptMe('@wtian')) // @[8(!2
