var noAngkot = 1;
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi.');
}