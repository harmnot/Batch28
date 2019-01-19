function urutkanAbjad(str) {
  str = Array.from(str);
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length - i -1; j++) {
      if (str[j] > str[j + 1]) {
        let temp = str[j];
        str[j] = str[j+1];
        str[j+1] = temp;
      }
    }
  }
  return str.join(""); 
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
