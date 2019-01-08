function angkaPalindrome(num) {
  var check  = true;
  while(check) {
    if(String(num).length === 1) {
      return num+1;
    } else if(String(num)[0] === String(num)[String(num).length-1]) {
      return num;
    };
    num++;
  }
};

 // TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
