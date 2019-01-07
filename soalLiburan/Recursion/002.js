/*
   ====================
   Palindrome Recursive
   ====================
   [INSTRUCTION]
   buatlah sebuah program untuk mendeteksi sebuah kata palindrome atau bukan
   dengan menggunakan methode recursive
   - jika sebuah kata atau kalimat palindrome maka outputnya adalah : true
   - jika sebuah kata atau kalimat bukan palindrome maka outputnya adalah : false
   [EXAMPLE]
   palindromeRecursive("kasur ini rusak")
   output: true
   palindromeRecursive("nababan")
   output: true

   palindromeRecursive("makan")
   output: false
*/

function palindromeRecursive(str) {
    if(str.length < 2) return true;
    if(str[0] != str.slice(-1)) return false;
    return palindromeRecursive(str.slice(1,-1));
}

console.log(palindromeRecursive("kasur ini rusak")); // true

console.log(palindromeRecursive("nababan")); // true

console.log(palindromeRecursive("makan"));// false
