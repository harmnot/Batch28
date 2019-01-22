/*
================
urutanAngkaUlang
================

adalah sebuah program yang berfungsi untuk mengurutkan angka dari ulang
setelah mencapai batas tertentu dalam bentuk array multidimensi

contoh:
input = 9
maka outputnya :
[
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], // baris ke-1 dimulai dari angka 1
  [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ], // baris ke-2 dimulai dari angka 2
  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
  [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
  [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
]

perhatikan bahwa angka tersebut akan kembali ke angka awal = 1
bila telah mencapai batasnya yaitu angka 9

input = 6
maka outputnya :
[
  [ 1, 2, 3, 4, 5, 6 ],
  [ 2, 3, 4, 5, 6, 1 ],
  [ 3, 4, 5, 6, 1, 2 ],
  [ 4, 5, 6, 1, 2, 3 ],
  [ 5, 6, 1, 2, 3, 4 ],
  [ 6, 1, 2, 3, 4, 5 ]
]

*/

function urutanAngkaUlang(angka) {

  let [i, j, arr, text] = [
    1, 0, [], ""
  ]
  for (i = 0; i < angka; i++) {

    let[temp, h] = [ [], 1 ];

    for (j = 0; j < angka; j++) {
      if ((j + i)+1<= angka) {
        temp.push(j + i + 1)
      } else {
        temp.push(h)
        h++
      }
    }
    arr.push(temp)
  }
  // let create2d = Array.from({length: angka}, (_, i) => Array.from({length: angka}, (_, j) => i>j? 1 : 2))
  // return create2d
  return arr

}

console.log(urutanAngkaUlang(9));
/*
[
  [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 2, 3, 4, 5, 6, 7, 8, 9, 1 ],
  [ 3, 4, 5, 6, 7, 8, 9, 1, 2 ],
  [ 4, 5, 6, 7, 8, 9, 1, 2, 3 ],
  [ 5, 6, 7, 8, 9, 1, 2, 3, 4 ],
  [ 6, 7, 8, 9, 1, 2, 3, 4, 5 ],
  [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ],
  [ 8, 9, 1, 2, 3, 4, 5, 6, 7 ],
  [ 9, 1, 2, 3, 4, 5, 6, 7, 8 ]
]
*/

console.log(urutanAngkaUlang(6));
/*
[
  [ 1, 2, 3, 4, 5, 6 ],
  [ 2, 3, 4, 5, 6, 1 ],
  [ 3, 4, 5, 6, 1, 2 ],
  [ 4, 5, 6, 1, 2, 3 ],
  [ 5, 6, 1, 2, 3, 4 ],
  [ 6, 1, 2, 3, 4, 5 ]
]
*/
