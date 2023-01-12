var jumlahAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
    }
}