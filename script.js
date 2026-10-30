
// LATIHAN 1
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");


// LATIHAN 2
const namaPengguna = prompt("Masukkan nama Anda:", "");

if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent =
        "Selamat datang, " + namaPengguna + ".";
} else {
    alert("Nama belum diisi.");
}


// LATIHAN 3
function operasiDasar(a, b) {
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}

operasiDasar(9, 4);


// LATIHAN 4
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
    inputNilai === null ||
    inputNilai.trim() === "" ||
    Number.isNaN(nilaiMahasiswa) ||
    nilaiMahasiswa < 0 ||
    nilaiMahasiswa > 100
) {
    alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
} else {
    alert("Belum lulus");
}


// LATIHAN 5
const inputPilihan = prompt("Masukkan angka 1–5:");

switch (inputPilihan) {
    case "1":
        alert("Bilangan satu");
        break;
    case "2":
        alert("Bilangan dua");
        break;
    case "3":
        alert("Bilangan tiga");
        break;
    case "4":
        alert("Bilangan empat");
        break;
    case "5":
        alert("Bilangan lima");
        break;
    default:
        alert("Pilihan tidak tersedia");
}


// LATIHAN 6
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}


// LATIHAN 7
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}


// LATIHAN 8
const daftarMenu = document.querySelectorAll(".menu");

daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;

    daftarMenu.forEach((item) => {
        if (item.checked) total += Number(item.value);
    });

    document.getElementById("total").textContent =
        total.toLocaleString("id-ID");
}


// MINI PROJECT
function hitungNilaiAkhir(tugas, uts, uas) {
    return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
    if (nilai >= 85) return "A";
    if (nilai >= 75) return "B";
    if (nilai >= 60) return "C";
    if (nilai >= 50) return "D";
    return "E";
}

function hitungNilai() {
    const inputTugas = document.getElementById("tugas").value;
    const inputUTS = document.getElementById("uts").value;
    const inputUAS = document.getElementById("uas").value;

    const tugas = Number(inputTugas);
    const uts = Number(inputUTS);
    const uas = Number(inputUAS);

    const hasil = document.getElementById("hasilNilai");

    if (
        inputTugas.trim() === "" ||
        inputUTS.trim() === "" ||
        inputUAS.trim() === ""
    ) {
        hasil.textContent = "Semua nilai harus diisi.";
        return;
    }

    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        hasil.textContent = "Nilai harus berada pada rentang 0–100.";
        return;
    }

    const akhir = hitungNilaiAkhir(tugas, uts, uas);

    hasil.textContent =
        "Nilai akhir: " + akhir.toFixed(2) +
        "\nPredikat: " + tentukanPredikat(akhir) +
        "\nStatus: " + (akhir >= 60 ? "Lulus" : "Belum lulus");

    console.log("Nilai akhir:", akhir.toFixed(2));
    console.log("Predikat:", tentukanPredikat(akhir));
    console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
}
