var nama = 'Muhammad';
var peran = 'Ksatria';

if( nama === '' ) {
  console.log( "silahkan isi nam dulu" );
}else if ( peran === '' ) {
  console.log( "Halo " + nama + ', Pilih Peranmu untuk memulai game' );
} else {
  console.log( 'Selamat datang di Dunia Proxytia ', nama );
  if( peran === "Ksatria" ) {
    console.log( 'Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!' );
  } else if ( peran === 'Tabib' ) {
    console.log( 'Halo Tabib ' + nama +  ' , kamu akan membantu temanmu yang terluka.' );
  } else {
    console.log( 'Halo Penyihir ' + nama +  ' , ciptakan keajaiban yang membantu kemenanganmu!!' );
  };
};
