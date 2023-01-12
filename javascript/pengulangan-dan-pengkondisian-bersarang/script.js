// pengulangan bersarang
// cara menampilkan variabel yang sama.
var s = '';
for (var i = 0; i < 10; i++) { // mengulang baris
    s = s + '*';
}
console.log(s);

// menampilkan :
// **********

var s = '';
for (var i = 0; i < 5; i++) { // mengulang baris
    s = s + '*';
    s = s + '\n';
}
console.log(s);
// menampilkan 
// *
// *
// *
// *
// *


var s = '';
for (var i = 0; i < 5; i++) { // mengulang baris
    for (var j = 0; j < 5; j++) { // mengulang variable dalam baris
        s = s + '*';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
// *****
// *****
// *****
// *****
// *****

// pengulangan bersarang
// cara menampilkan variabel yang sama.
var s = '';
for (var i = 0; i < 10; i++) { // mengulang baris
    for (var j = 0; j <= i; j++) { // mengulang variable dalam baris
        s = s + '*';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********



// pengulangan bersarang mundur
var s = '';
for (var i = 10; i > 0; i--) { // mengulang baris mundur
    for (var j = 0; j < i; j++) { // mengulang bintang dalam baris tertentu
        s = s + '*';
    }
    s = s + '\n';
}
console.log(s);
// menampilkan :
// **********
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

var s = '';
for (var i = 10; i > 0; i--) { // mengulang baris
    for (var j = 1; j <= i; j++) { // mengulang kolom
        if (j >= i) {
            s = s + '*';
        } else {
            s = s + ' ';
        }

    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
//           *
//          **
//         ***
//        ****
//       *****
//      ******
//     *******
//    ********
//   *********
//  **********