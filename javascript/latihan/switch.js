// contoh penggunaan if dan parseInt
// var angka = parseInt(prompt('Masukkan Angka :'))

// if (angka === 1) {
// alert('Anda memasukkan angka 1')
// } else if (angka === 2) {
// alert('Anda memasukkan angka 2')
// } else if (angka === 3) {
// alert('Anda memasukkan angka 3')
// } else {
// alert('Angka yang Anda masukkan salah')
// }

// jika menggunakan prompt perhatikan tipe datanya
// contoh penggunaan switch
// var angka = prompt('Masukkan angka :')
// jika tipe data di dalam prompt string, maka case harus ber-tipe string
// di dalam caseharus berupa nilai, tidak boleh (angka <10). harus nilainya langsung (case : '10')
// switch (angka) {
// case '1':
// alert('Anda memasukkan angka 1')
// break;
// case '2':
// alert('Anda memasukkan angka 2')
// break;
// case '3':
// alert('Anda memasukkan angka 3')
// break;
// default:
// alert('Angka yang anda masukkan salah')
// break;
// }

// cara penggunaan swicth dengan break, fungsi break adalah untuk memutus case.
var item = prompt('Masukkan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)');
switch (item) {
    case 'nasi':
        alert('makanan / minuman SEHAT')
        break;
    case ('daging'):
        alert('makanan / minuman SEHAT')
        break;
    case ('susu'):
        alert('makanan / minuman SEHAT')
        break;
    case ('hamburger'):
        alert('makanan / minuman TIDAK SEHAT')
        break;
    case ('softdrink'):
        alert('makanan / minuman TIDAK SEHAT')
        break;
    default:
        alert('makanan / minuman yang anda masukkan tidak tersedia')
        break;
}


// cara penggunaan swicth tanpa break, jika tanpa break maka perintah yang sama bisa di tampilkan dalam satu alert.
var item = prompt('Masukkan nama makanan / minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink)');
switch (item) {
    case 'nasi':
    case ('daging'):
    case ('susu'):
        alert('makanan / minuman SEHAT')
        break;
    case ('hamburger'):
    case ('softdrink'):
        alert('makanan / minuma TIDAK SEHAT')
        break;
    default:
        alert('makanan / minuman yang anda masukkan tidak tersedia')
        break;
}