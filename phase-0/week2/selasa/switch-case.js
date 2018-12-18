var tanggal = 9;
var bulan = 12;
var tahun = 2010;
var namaBulan;

var check = true;
var checkLagi = true;

switch ( check ) {
   case ( tanggal < 1 || tanggal > 31  ):
    console.log( "invalid date, harus diisi 1 - 31" );
    break;
   case ( tahun < 1900 || tahun > 2200 ):
    console.log( "invalid year,  harus diisini 1900-2200" );
    break;
   case ( bulan < 1 || bulan > 12 ):
    console.log( "invalid month, harus diisi 1-12" );
    break;
   case checkLagi:
    switch ( bulan ) {
     case 1:
       namaBulan = tanggal + " Januari " + tahun;
       break;
     case 2:
       namaBulan = tangal + " Februari " + tahun;
       break;
     case 3:
       namaBulan = tanggal + " Maret " + tahun;
       break;
     case 4:
       namaBulan = tanggal + " April " + tahun;
       break;
     case 5:
       namaBulan = tanggal + " Mei " + tahun ;
       break;
     case 6:
       namaBulan = tanggal + " Juni " + tahun;
       break;
     case 7:
       namaBulan = tanggal + " Juli " + tahun;
       break;
     case 8:
       namaBulan = tanggal + " Agustus " + tahun;
       break;
     case 9:
       namaBulan = tanggal + " September " + tahun;
       break;
     case 10:
       namaBulan = tanggal + " Oktober " + tahun;
       break;
     case 11:
       namaBulan = tanggal + " November  " + tahun;
       break;
     case 12:
       namaBulan = tanggal + " Desember " + tahun;
       break;
     default:
       namaBulan = "invalid number";
       break;
    }
    break;
}

console.log( namaBulan )
