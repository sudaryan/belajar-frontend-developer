var s = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < i; j++) {
        s = s + '*';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
// 
// *
// **
// ***
// ****

var s = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
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

var s = '';
for (var i = 5; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s = s + '*';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
// *****
// ****
// ***
// **
// *

var s = '';
for (var i = 5; i > 0; i--) {
    for (var j = 0; j <= 5; j++) {
        if (j >= i) {
            s = s + '*';
        } else
            s = s + ' ';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
//     *  
//    **
//   ***
//  ****
// *****

var s = '';
for (var i = 5; i > 0; i--) {
    for (var j = 5; j > 0; j--) {
        if (j > i) {
            s = s + ' ';
        } else
            s = s + '*';
    }
    s = s + '\n';
}
console.log(s);

// menampilkan :
// *****  
//  ****
//   ***
//    **
//     *

var n = 3;
var string = "";

for (var i = 1; i <= n; i++) {
    // untuk mengatur jarak
    for (var j = 1; j <= n - i; j++) {
        string += " ";
    }
    // nge-print bintangnya
    for (var k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";

}

console.log(string);

// hasil
//      *
//     ***
//    *****