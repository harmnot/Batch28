// Newton Second LAW:

1. buat variable "newton" kosong;
2. buat variable "massa" dengan nilai angka;
3. buat variable "kecepatan" dengan nilai angka;
4. lalu di dalam variable "newton" isi penjumlahan "massa" dikali dengan 'kecepatan';
5. kemudian print nilai "newton" yang mana dari hasil penjumlahan 'massa' dikali dengan 'kecepatan';

STORE "newton" without any values;
STORE "massa" with any numbers;
STORE "kecepatan" with any numbers;

CALCULATE "newton" equals "massa" times "kecepatan";
DISPLAY "newton";

*********************---------------************************************************************


// Tahun Kabisat:

1. create variable named "tahun" with any numbers;
2. if "tahun" modulo 4 equals 0;
3. and 'tahun' modulo 100 not equals 0;
4. and 'tahun' modulo 400 equals 0;
5. then display 'tahun kabisat';
6. else, then;
7. display 'Tahun Bukan Kabisat';


STORE "tahun" with any numbers;

IF "tahun" modulo 4 strict equals 0 AND "tahun" modulo 100 not stict equals 0 AND "tahun" modulo 400 strict equals 0
 DISPLAY "tahun" added " adalah Tahun Kabisat";
ELSE
 DISPLAY "tahun" added " bukan Tahun Kabisat";

*********************---------------************************************************************


// Laundry Day:

1. Foxie memasukkan baju mulai dari satu baju;
2. kemudian memasukkan baju lainnya;
3. kemudian memasukkan satu persatu sampai 20;
4. jika baju tersebut sampai 20;
5. aka kemudian Foxie menyalakan mesin cuci;


STORE 'jumlah' with 1;
STORE 'totalPakaian' with 20;

WHILE "jumlah" less than equals 20;
  IF "jumlah" equals 20;
   DISPLAY "mesin dinyalakan";

*********************---------------************************************************************



// Periksa Kuku:

1. menghitung siswa dari 1 sampai 40;
2. satu persatu diperiksa kukunya;
3. jika memiliki kuku panjang;
4. maka siswa ini memiliki kuku panjang dan mendapatkan hukuman/sanksi;
5. kemudian jika tidak;
6. maka siswa ini akan dapat pujian dari guru;


STORE 'dariSiswa' with 1;
STORE 'totalSiswa' with 40;
STORE 'kukuPanjang' with true;

WHILE 'darisiwa' less than equals 40;
  IF 'kukuPanjang';
    DISPLAY "siswa ini memiliki kuku panjang";
  ELSE 
    DISPLAY "siswa ini tidak memiliki kuku panjang"
