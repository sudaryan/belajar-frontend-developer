// let playlist = ['in the end', 'numb', 'country road']


// mendapatkan data dari array dengan perulangan
// inisial harus di mulai dari angka 0, kondisi seuai panjang array
// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra']

// for (let i = 0; i < animals.length; i++) {
//     console.log(i + 1, animals[i]);
// }

// pengenalan nested loop

// let str = 'LOL';
// for (let i = 0; i <= 4; i++) {
//     console.log("outer:", i);
//     for (let j = 0; j < str.length; j++) {
//         console.log('   inner:', str[j]); // kurung kotak [] untuk mengambil variabel 
//     }
// }

// const pilihan = 'abcd';

// for (let i = 1; i <= 10; i++) {
//     // console.log(`${i}. Soal nomor ${i};`);  // back tick adalah template string
//     console.log(i + ". soal nomor " + i);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}. pilihan jawaban`);
//     }

// }


// mendapatkan dari nested array dengan nested loop
// const studentRow = [
//     ['olivia', 'hana', 'emma', 'noah'],
//     ['ita', 'ica', 'ani', 'dian'],
//     ['lucas', 'robert', 'adi', 'aldo']
// ];

// for (let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log("seat row #", i + 1);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`  ${row[j]}`);
//     }
// }

// perulangan menggunakan while 
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }


// const password = 'pas123';

// let gues = prompt('enter the password');
// while (gues !== password) {
//     gues = prompt('password anda salah!');
// }
// alert('password anda benar!')



// kata kunci break untuk menghentikan perulangan
// let input = prompt('hai, katakan sesuatu!');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === 'stop') break;
// }
// alert('selamat datang')

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }



// membuat game tebak angka dengan while
// let maximum = parseInt(prompt('masukkan nilai maksimal'));
// while (!maximum) {
//     maximum = parseInt(prompt('masukkan nilai maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('isikan tebakan anda!'));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt('Tembakan anda terlalu tinggi, silahkan coba lagi!'));
//     } else {
//         guess = parseInt(prompt('tebakan anda terlalu rendah, silahkan coba lagi!'));
//     }
// }
// alert(`Selamat tebakan anda benar! dengan percobaan sebanyak ${attempts} kali`);




// cara melakukan perulangan pada array dengan for of
// for (variable of iterable) {
//     statement
// }

// const fruits = ['banana', 'orange', 'apple', 'mango'];

// for (let fruit of fruits) {
//     console.log(`Buah ${fruit}`);
// }

// menampilkan nested array dengan for of
// const studentRow = [
//     ['olivia', 'hana', 'emma', 'noah'],
//     ['ita', 'ica', 'ani', 'dian'],
//     ['lucas', 'robert', 'adi', 'aldo']
// ];

// for (let row of studentRow) {
//     for (let student of row) {
//         console.log(student);
//     }
// }



// cara melakukan perulangan pada data object dengan for in

// const studentScore = {
//     olivia: 20,
//     liam: 13,
//     emma: 40,
//     noah: 18,
//     amelia: 32,
//     oliver: 10,
//     eva: 11,
//     elijah: 21,
//     shopia: 14,
//     mateo: 22,
// };

// for (let student in studentScore) {
//     console.log(`${student} memiliki skor ${studentScore[student]}`);
// }


// mengubah data object menjadi data array
// Object.values(studentScore)
//     (10)[20, 13, 40, 18, 32, 10, 11, 21, 14, 22]

// membuat nilai rata2 dari data object

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);