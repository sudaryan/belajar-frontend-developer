var tanya = true;
while (tanya == true) {


    // menangkap pilihan player
    var p = prompt('Masukkan pilihan Anda : gajah, semut, orang?');

    // menangkap pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut'
    }


    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = ('SERI')
    } else if (p == 'gajah') {
        if (comp == 'orang') {
            hasil = 'MENANG';
        } else {
            hasil = 'KALAH'
        }
    } else if (p == 'orang') {
        if (comp == 'gajah') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG'
        }
    } else if (p == 'semut') {
        if (comp == 'orang') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG'
        }
    } else {
        hasil = 'Anda memaksukkan pilihan yang salah';
    }


    // tampilkan hasilnya
    alert('Anda memilih : ' + p + ' \nkomputer memilih : ' + comp + ' \nMaka hasilnya : ' + hasil);
    tanya = confirm('Apakah Anda ingin bermain lagi?');
}
alert("Terimakasih sudah bermain.")