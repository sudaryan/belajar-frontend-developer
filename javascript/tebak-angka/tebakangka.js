var chance = 3;
alert('TEBAK ANGKA 1-10' + '\nKAMU PUNYA ' + chance + ' KESEMPATAN');
chance--
while (chance >= 0) {
    var user = prompt('MASUKKAN TEBAKAN ANDA :');
    var compt = Math.floor(Math.random() * 11);

    if (user == compt) {
        alert('TEBAKAN ANDA BENAR' + '\n ANGKA YANG DICARI ' + compt);
        break;
    } else if (chance == 0) {
        alert('KESEMPATAN ANDA TELAH HABIS. \nANDA KALAH. \nTERIMAKASIH SUDAH BERMAIN.');
        break;
    } else if (user > compt) {
        alert('TEBAKAN ANDA TERLALU TINGGI' + '\nANDA PUNYA ' + chance + ' KESEMPATAN LAGI');
    } else if (user < compt) {
        alert('TEBAKAN ANDA TERLALU RENDAH' + '\nANDA PUNYA ' + chance + ' KESEMPATAN LAGI');
    } else {
        alert('YANG ANDA MASUKKAN BUKAN ANGKA' + '\nANDA PUNYA ' + chance + 'KESEMPATAN LAGI')
    }
    chance--

}