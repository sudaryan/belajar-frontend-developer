// pengulangan bersarang
// cara menampilkan variabel yang sama.
var s = '';
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        s = s + '*';
    }
    s = s + '\n';
}

for (var i = 6; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s = s + '*';
    }
    s = s + '\n';
}

console.log(s);

// menampilkan
// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

var n = 5;
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
//   *******
//  *********



var s = "";
for (var i = 0; i < 6; i++) {
    if (i % 2 == 0) {
        for (var j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                s += "#";
            } else {
                s += " ";
            }
        }
        s += "\n";
    } else {
        for (var j = 0; j < 6; j++) {
            if (j % 2 == 0) {
                s += " ";
            } else {
                s += "#";
            }
        }
        s += "\n";
    }
}

console.log(s);

// hasil
//  # # # 
//   # # #
//  # # #
//   # # #
//  # # #
//   # # #