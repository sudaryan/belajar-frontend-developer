// pengenalan function
// - potongan code yang memungkinkan digunakan kembali
// - bisa dibuat lebih awal dan digunakan nanti
// - akan sering digunakan

// contoh function

// function lemparDadu() {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }



// Mendefinisikan dan menjalankan function
// function sudar() {
//     console.log("hai..");
//     console.log("apa kabar?");
// }

// cara panggil function berkali2
// sudar()
// sudar()
// sudar()
// sudar()
// sudar()



// Argument dan parameter function

// function greet(name) { // parameter
//     console.log(`Hi, ${name}`) // parameter harus sama
// }
// greet('jason') // argument

// function selamatPagi(name) {
//     console.log(`Halo, ${name}. Selamat pagi!`);
// }

// selamatPagi('yanto');



// multiple parameter dan argument (bisa lebih dari satu)
// function jumlahkan(a, b) {
//     const total = a + b; //multiple parameter
//     console.log(total);
// }

// jumlahkan(a, b) // multiple argument

// berikan nilai default pada parameter
// function jumlahkan(a = 0, b = 0) {
//     const total = a + b; //multiple parameter
//     console.log(total);
// }

// jumlahkan(a, b) // multiple argument



// statement return pada function

// function jumlahkan(a = 0, b = 0) {
//     const total = a + b; //multiple parameter
//     console.log(total);
//     return total; // return untuk menyimpan variable
// di bawah return tidak boleh ada proses apapun
// }

// jumlahkan(a, b) // multiple argument

// if di dalam function dengan 2 return
// function jumlahkan(a = 0, b = 0) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Bukan Angka';
//     }
//     return a + b;
// }


// visibilitas variable sesuai scope atau ruang lingkup

// let linux = 'Redhat'

// function easeyLinux() {
//     let linux = 'Debian';
//     linux; // Debian
// }

// linux; // Redhat

// let progaming = 'javaScript';

// function typeSafe() {
//     let progaming = 'TypeScript';
// }
// console.log(progaming) // bisa memanggil variable di luar function

// typeSafe();

// let progaming = 'javaScript';

// function typeSafe() {
//     let progaming = 'TypeScript';
//     console.log(progaming) // memanggil variable di dalam function
// }

// typeSafe();

// let progaming = 'javaScript';

// function typeSafe() {
//     console.log(progaming) // bisa memanggil variable di luar function karena levelnya lebih tinggi
// }

// typeSafe();

// let progaming = 'javaScript';

// function typeSafe() {}

// typeSafe();
// console.log(progaming) // bisa memanggil variable di luar function karena levelnya lebih tinggi



// blocked scope variable dengan tag: let, const, var
// var: variable yang bisa di akses secara global

// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
//     console.log(lebar); // scope area di dalam if 
// }
// console.log(tinggi);

// let tinggi = 8;
// if (tinggi > 5) {
//     let lebar = 10;
//     console.log(lebar);
// }
// console.log(lebar); // variable let tidak bisa di akses 


// for (let index = 0; index < 10; index++) {
//     const indexNumber = index;
//     console.log(indexNumber);
// }
// console.log('index: ', indexNumber); // variable const tidak bisa di akses


// var tinggi = 8;
// if (tinggi > 5) {
//     var lebar = 10;
//     // console.log(lebar);
// }
// console.log('lebar: ', lebar); // variable var bisa di akses di luar if


// for (var index = 0; index < 10; index++) {
//     var indexNumber = index;
//     // console.log('index: ', indexNumber);
// }
// console.log('index: ', index); // variable var bisa di akses di luar for



// lexical scope: yg bisa akses function di luar scope

// function lamarKerja() {
//     const jabatan = 'programer';

//     function orangDalam() {
//         let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//         console.log(kenalan);
//     }
//     orangDalam();
// }

// function lamarKerja() {
//     const jabatan = 'programer';

//     function lebihDalam() {

//         function orangDalam() {
//             let kenalan = `Orang dalam bisa memasukkan ${jabatan}`;
//             console.log(kenalan);
//         }
//         orangDalam();
//     }
//     lebihDalam();

// }




// function expresions

// contoh function biasa
// function perkalian(nilai) {
//     return nilai * nilai;

// }

// let hasil = perkalian(5);

// contoh function expresions
// const perkalian = function (nilai, pembanding) { // parameter bisa berisi banyak
//     return nilai * pembanding;

// }



// function sebagai argument
// bisa  memanggil banyak function sekaligus

// function duakali(func) {
//     func();
//     func();
//     func();
//     func();
//     func();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6 + 1);
//     console.log(hasil);
// }

// cara panggil : duakali(lemparDadu)



// function bernilai balik function
// function yg memanggil function

// function panggilFunction() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('Selamat angkanya lebih besar');
//         };

//     } else {
//         return function () {
//             console.log('Maaf, angkanya lebih kecil');
//         };
//     }
// }



// Definisi sebuah method : ketika menambahkan function pada suatu object property
// atau property yang memiliki function