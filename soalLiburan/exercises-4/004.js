// hanya boleh menggunakan rekursif

function soal3(param1, param2)
{
    // var total = param1;
    // if(param2 == 0){
    //   return total
    // } else {
    //   total += param2
    // }

    return soal3(param1, param2--)

}

console.log(soal3(2,5))
/*
    2 * 2 * 2 * 2 * 2
    32
*/

console.log(soal3(3,3))
/*
    27
*/
