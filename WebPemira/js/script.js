const numberDisplay = document.getElementById("number");
const numberDisplay2 = document.getElementById("number2");
const numberDisplay3 = document.getElementById("number3");
const numberDisplay4 = document.getElementById("number4");
const addButton = document.getElementById("add-button");
const addButton2 = document.getElementById("add-button2");
const addButton3 = document.getElementById("add-button3");
const addButton4 = document.getElementById("add-button4");
const subtractButton = document.getElementById("subtract-button");
const subtractButton2 = document.getElementById("subtract-button2");
const subtractButton3 = document.getElementById("subtract-button3");
const subtractButton4 = document.getElementById("subtract-button4");

let currentNumber = 0;
let currentNumber2 = 0;
let currentNumber3 = 0;
let currentNumber4 = 0;

const jumlahDisplay = document.getElementById("jumlahmsk");
const jumlahSah = document.getElementById("sah")

// Fungsi untuk menghitung jumlah total
function hitungTotal() {
  const total = currentNumber + currentNumber2 + currentNumber3 + currentNumber4;
  jumlahDisplay.textContent = total;
}

//Fungsi menghitung jumlah suara sah
function suaraSah(){
  const sah = currentNumber +currentNumber2 + currentNumber3;
  jumlahSah.textContent = sah;
}

// Memanggil hitungTotal setiap kali ada perubahan pada angka
addButton.addEventListener("click", () => {
  console.log("anjay")
  currentNumber++;
  numberDisplay.textContent = currentNumber;
  hitungTotal();
  suaraSah();
});

addButton2.addEventListener("click", () => {
  currentNumber2++;
  numberDisplay2.textContent = currentNumber2;
  hitungTotal();
  suaraSah();
});

addButton3.addEventListener("click", () => {
  currentNumber3++;
  numberDisplay3.textContent = currentNumber3;
  hitungTotal();
  suaraSah();
});

addButton4.addEventListener("click", () => {
  currentNumber4++;
  numberDisplay4.textContent = currentNumber4;
  hitungTotal();
});

subtractButton.addEventListener("click", () => {
  console.log("ajg")
  currentNumber--;
  numberDisplay.textContent = currentNumber;
  hitungTotal();
  suaraSah();
});

subtractButton2.addEventListener("click", () => {
  currentNumber2--;
  numberDisplay2.textContent = currentNumber2;
  hitungTotal();
  suaraSah();
});

subtractButton3.addEventListener("click", () => {
  currentNumber3--;
  numberDisplay3.textContent = currentNumber3;
  hitungTotal();
  suaraSah();
});

subtractButton4.addEventListener("click", () => {
  currentNumber4--;
  numberDisplay4.textContent = currentNumber4;
  hitungTotal();
});

function tampilkanNama() {
  const namaInput = document.getElementById('namaInput').value;
  localStorage.setItem('nama', namaInput);
  tampilkanHasilNama();
}

function tampilkanHasilNama() {
  const hasilNama = document.getElementById('hasilNama');
  const nama = localStorage.getItem('nama');
  if (nama) {
      hasilNama.innerHTML = `Ketua Himpunan Mahasiswa ${nama}`;
  } else {
      hasilNama.innerHTML = 'Nama belum dimasukkan.';
  }
}


