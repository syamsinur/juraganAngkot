var penumpang = [];

function tambahPenumpang (namaPenumpang, penumpang) {
    // kalo angkot kosong
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // telusuri seluruh kursi
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                return penumpang;
            }
            // jika kursi sudah penuh
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

function hapusPenumpang (namaPenumpang, penumpang) {
    // jika angkot kosong
    if (penumpang.length == 0) {
        console.log('angkot masih kosong');
        return penumpang;
    } else {
        // telusuri seluruh kursi
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada nama yang sesuai
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            }
            // jika nama tidak ada
            else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}