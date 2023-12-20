function cetak() {
    //ambil data dari inputan
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let tempat lahir = document.getElementById("tempatlahir").value;
    let tanggal lahir = document.getElementById("tanggallahir").value;
    let cetak = prompt()
    //tampilkan data yang diambil kedalam paragraf hasil cetak
    document.getElementById("hasil-cetak").innerHTML = nama+email+ttempatlahir+tanggallahir;