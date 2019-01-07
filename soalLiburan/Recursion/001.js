/* 
    ================
    addAll recursive
    ================
    [INSTRUCTION]
    jumlahkan semua angka yang ada di array dengan menggunakan metode rekursive
    [EXAMPLE]
    addAllRecursive([1,2,3,4,5,6]) 
    output : 21
*/

function addAllRecursive(arr) {
   if(arr.length === 0) return 0; 
   return arr.shift() + addAllRecursive(arr);
};

console.log(addAllRecursive([1,2,3,4,5,6])); // 21
