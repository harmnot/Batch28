/*
=======================
FLASH SALE RUBAH ORANGE
=======================

Buatlah sebuah algoritma atau pseudocode untuk kasus berikut:

Toko 'RUBAH ORANGE' sedang mengadakan flash sale dengan ketentuan sebagai berikut:
- Jumlah item yang dibeli lebih dari 9 maka akan mendapatkan 5 item lagi
- Jumlah item yang dibeli lebih dari 7 maka akan mendapatkan 3 item lagi
- Jumlah item yang dibeli lebih dari 5 maka akan mendapatkan 1 item lagi
Tampilkan jumlah item yang didapatkan oleh pembeli.

NOTED:
Jika jumlah baju kurang dari 0 atau menerima input selain angka maka tampilkan 'Input Invalid'
*/

// write pseudocode/ algoritma here

STORE 'item' with any values;
STORE 'pembeli' with empty;

IF 'item' less than 0 OR typeof 'item' is not equals 'numbers'
  SET 'pembeli' equals 'Input Invalid';
ELSE IF 'item' greater than 9
  SET 'pembeli' equals 'item' yang kamu dapatkan adalah 'item' added 5;
ELSE IF 'item' greater than 7
  SET 'pembeli' equals 'item' yang kamu dapatkan adalah 'item' added 3;
ELSE IF 'item' greater than 5
  SET 'pembeli' equals 'item' yang kamu dapatkan adalah 'item' added 1;
END IF

DISPLAY 'pembeli'
