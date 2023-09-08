const dataPenjualanPakAldi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
]

function getTotalPenjualan(dataPenjualan) {
    let totalPenjualan = 0;

    //iterasi
    for (let i = 0; i < dataPenjualan.length; i++) {
        const penjualan = dataPenjualan[i];
        
        //menghitung total terjual
        totalPenjualan += penjualan.totalTerjual;
    }
    
    return totalPenjualan;  
}

console.log('Total Penjualan :', getTotalPenjualan(dataPenjualanPakAldi));