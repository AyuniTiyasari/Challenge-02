const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  //mendeklarasikan variabel untuk menyimpan data/informasi
  let totalKeuntungan = 0;
  let totalModal = 0;
  let productBukuTerlaris = "";
  let penulisTerlaris = " ";
  let productBukuTerlarisTotalTerjual = 0;

  for (let i = 0; i < dataPenjualanNovel.length; i++) {
    const penjualan = dataPenjualanNovel[i];

    // menghitung totalKeuntungan dan totalModal
    totalKeuntungan +=
      (penjualan.hargaJual - penjualan.hargaBeli) * penjualan.totalTerjual;
    totalModal +=
      penjualan.hargaBeli * (penjualan.totalTerjual + penjualan.sisaStok);

    // Cek buku terlaris
    if (penjualan.totalTerjual > productBukuTerlarisTotalTerjual) {
      productBukuTerlaris = penjualan.namaProduct;
      productBukuTerlarisTotalTerjual = penjualan.totalTerjual;
    }
  }

  // Menghitung penulis terlaris
  const dataPenulis = {};
  dataPenjualanNovel.forEach((item) => {
    const penulis = item.penulis;
    if (dataPenulis[penulis]) {
      dataPenulis[penulis] += item.totalTerjual;
    } else {
      dataPenulis[penulis] = item.totalTerjual;
    }
  });

  // Menemukan penulis terlaris
  let maxTotalTerjual = 0;
  for (const penulis in dataPenulis) {
    if (dataPenulis[penulis] > maxTotalTerjual) {
      maxTotalTerjual = dataPenulis[penulis];
      penulisTerlaris = penulis;
    }
  }

  // Hitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  //data object
  const dataObject = {
    totalKeuntungan,
    totalModal,
    persentaseKeuntungan,
    productBukuTerlaris,
    penulisTerlaris,
  };

  return dataObject;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
