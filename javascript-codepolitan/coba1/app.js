// console.log('sebelum pebanding')
// if (1 + 1 === 3) {
//     console.log('di dalam pembanding')
// }
// console.log('setelah pembanding')

// if punya satu pilihan
// contoh pakai if dengan math random
// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     console.log('angka lebih besar dari 0.5')
// }

// if (angka <= 0.5) {
//     console.log('angka lebih kecil dari 0.5')
// }


// else if punya banyak pilihan
// contoh pakai else if

// const iniHari = 'sabtu'
// if (iniHari === 'senin') {
//     console.log('selamat bekerja');
// } else if (iniHari === 'sabtu') {
//     console.log('semoga tidak cepat berlalu');
// }

// contoh pakai else if
// const nilai = '79';

// if (nilai < 50) {
//     console.log('E')
// } else if (nilai < 60) {
//     console.log('D')
// } else if (nilai < 70) {
//     console.log('C')
// } else if (nilai < 80) {
//     console.log('B')
// } else if (nilai < 100) {
//     console.log('A')
// }


// else adalah pilihan terakhir
// contoh pakai else
// const iniHari = prompt('isikan hari').toLowerCase();

// if (iniHari === 'senin') {
//     console.log('selamat bekerja');
// } else if (iniHari === 'sabtu') {
//     console.log('semoga tidak cepat berlalu');
// } else {
//     console.log('biasa saja')
// }


// melakukan if bersarang
// const password = prompt('buat password')

// // password minimal 6 karakter
// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         alert('password valid');
//     } else {
//         alert('password tidak boleh ada spasi')
//     }
// } else {
//     alert('password minimal 6 karakter')
// }


// operator logic and 
// const password = prompt('buat password')

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     alert('password valid');
// } else {
//     alert('password tidak valid')
// }


//  operator logic or
// const role = prompt('masukkan role akun');

// if (role === 'admin' || role === 'spv') {
//     alert('boleh masuk');
// } else {
//     alert('anda bukan admin atau spv')
// }



//  operator logic not
// const role = prompt('masukkan role akun');

// if (role !== 'admin') {
//     alert('anda bukan admin')
// } else {
//     alert('boleh masuk');
// }


const day = 4;
switch (day) {
    case 1:

        break;

    default:
        break;
}