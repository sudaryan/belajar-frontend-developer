// foreach method : dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah element yang dimiliki array (khusus array)

// 
// contoh : 
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (n) { // n mewakili setiap nilai di dalam array
//     console.log(n * n); // n * n : mengakilan dirinya sendiri
//     // output: 1,4,9,16, 25, 36, 49, 64, 81
// })

// contoh lain:
// angka.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// contoh menampilkan object dalam array

// const animes = [{
//         title: 'Attack on Titan',
//         Rating: 90,
//     },
//     {
//         title: 'One Peace',
//         Rating: 89,
//     },
//     {
//         title: 'Bleach',
//         Rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         Rating: 90,
//     },
//     {
//         title: 'Naruto',
//         Rating: 84,
//     },
// ];

// animes.forEach(function (anime) {
//     console.log(`${anime.title} - ${anime.Rating}/100`);
// });



// map method: sebuah callback funtion array yang nilai baliknya sudah di modifikasi melalui callback function dari susatu array menjadi tipe data array lagi

// contoh:
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const angkaDouble = angka.map(function (num) {
//     return num * 2;
// });

// const animes = [{
//         title: 'Attack on Titan',
//         Rating: 90,
//     },
//     {
//         title: 'One Peace',
//         Rating: 89,
//     },
//     {
//         title: 'Bleach',
//         Rating: 82,
//     },
//     {
//         title: 'Hunter x Hunter',
//         Rating: 90,
//     },
//     {
//         title: 'Naruto',
//         Rating: 84,
//     },
// ];

// const animesList = animes.map(function (anime) {
//     return anime.title.toUpperCase();
// })


// Arrow function: 

// contoh funtion regular: 
// function perkalian(x) {
//     return x * x;
// }

// const hasil = perkalian(5);

// contoh arrow expresions:
// const hasil = function penjumlahan(x) {
//     return x + x;
// }

// contoh arrow function:
// const perkalian = (x) => {
//     return x * x;
// }

// contoh arrow function lain:
// const perkalian = (x, y) => {
//     return x * y;
// }

// contoh arrow function lain:
// const random = () => {
//     return Math.floor(Math.random() * 6 + 1);
// }


// Return secara implisit dari arrow function: menggunakan tanda kurung biasa
// const random = () => (
//     Math.floor(Math.random() * 6 + 1)
// );

// atau
// const add = (a, b) => a + b


// memahami settimeout dan setinterval
// console.log('Halo..')
// setTimeout(() => {
//     console.log('Ada orang dirumah?')
// }, 3000); // waktu delay
// console.log('permisi..')

// const interval = setInterval(() => {
//     console.log(Math.random());
// }, 3000); // interval waktu untuk di tampilkan

// clearInterval(interval) untuk menghentikan interval



// memilih data tertentu di dalam array dengan filter method: function yang akan mengembalikan nilai array lagi yang sudah di manipulasi sesuai dengan kriteria yang di tetapkan

// contoh:
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const ganjil = angka.filter(n => {
//     return n % 2 === 1;
// });

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const angkaKecil = angka.filter(n => {
//     return n < 5;
// });

// contoh filter di struktur data object:
// const animes = [{
//         title: 'Attack on Titan',
//         Rating: 90,
//         Year: 2013,
//     },
//     {
//         title: 'One Peace',
//         Rating: 89,
//         Year: 1999,
//     },
//     {
//         title: 'Bleach',
//         Rating: 82,
//         Year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         Rating: 90,
//         Year: 2011,

//     },
//     {
//         title: 'Naruto',
//         Rating: 84,
//         Year: 2002,
//     },
// ];

// const animeBagus = animes.filter((anime) => anime.Rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);

// menggabungkan method filter dan map:
// const judulanimeBagus = animes.filter((anime) => anime.Rating >= 85).map((anime) => anime.title);

// const animeCukupBagus = animes.filter((anime) => anime.Rating <= 85);
// const animeBaru = animes.filter((anime) => anime.Year > 2010);


// menentukan benar atau salah pada array dengan method every dan some:
// every: function yang mengembalikan nilai boolean, true pada saat nilai yang ada pada suatu array seluruh memiliki kriteria yang sama, false jika sebaliknya.

// contoh : 
// const kataKata = ['kita', 'kamu', 'saya']
// kataKata.every(kata => {
//     return kata.length === 4
// }) // true

// some: function yang mengembalikan nilai boolean, true pada saat nilai yang ada pada suatu array sebagian memiliki kriteria yang sama, false jika seluruh memiliki kriteria yang berbeda.

// contoh:
// const examScore = [80, 85, 70, 90, 77];
// const isGraduate = examScore.every((score) => score > 75); //false

// const animes = [{
//         title: 'Attack on Titan',
//         Rating: 90,
//         Year: 2013,
//     },
//     {
//         title: 'One Peace',
//         Rating: 89,
//         Year: 1999,
//     },
//     {
//         title: 'Bleach',
//         Rating: 82,
//         Year: 2004,
//     },
//     {
//         title: 'Hunter x Hunter',
//         Rating: 90,
//         Year: 2011,

//     },
//     {
//         title: 'Naruto',
//         Rating: 84,
//         Year: 2002,
//     },
// ];

// const isAnimeListNew = animes.some((anime) => anime.Year > 2010); // true



// mendapatkan satu nilai sesuai kondisi dari sebauh array dengan reduce

// reduce: melakukan proses sebanyak element milik suatu array, nilai baliknyaadalah single value

// const subtotal = [1500, 20000, 4000, 19000, 32000];
// const total = subtotal.reduce((currentTotal, singleSubtotal) => {
//     return currentTotal + singleSubtotal;
// });

// const examScore = [80, 85, 70, 90, 77];
// jika menggunakan for of:
// let total = 0;
// for (let score of examScore) {
//     total += score;
// }

// jika menggunakan function reduce:
// const total = examScore.reduce((subtotal, score) => {
//     return subtotal + score;
// })


// const animes = [{
//         title: 'One Peace',
//         Rating: 89,
//         Year: 1999,
//     },
//     {
//         title: 'Bleach',
//         Rating: 82,
//         Year: 2004,
//     },
//     {
//         title: 'Attack on Titan',
//         Rating: 92,
//         Year: 2013,
//     },
//     {
//         title: 'Hunter x Hunter',
//         Rating: 90,
//         Year: 2011,

//     },
//     {
//         title: 'Naruto',
//         Rating: 84,
//         Year: 2002,
//     },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime);
//     if (currAnime.Rating > bestAnime.Rating) {
//         return currAnime;
//     }
//     return bestAnime;
// });


// object this di dalam function mengarah pada object global window