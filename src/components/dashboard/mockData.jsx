const data = [
    ["id", "Nama", "No HP", "Alamat"],
    [1,"Bagus Widodo",+6282364738746, "Jl.Beringin"],
    [2,"Bagus Wadidaw",+6282364738746, "Jl.Beringin"],
    [3,"Bagus Wadidaw",+6282364738746, "Jl.Beringin"],
    [4,"Bagus Wadidaw",+6282364738746, "Jl.Beringin"]
];

const arrData = [
    ["id", "Nama Barang Sewa", "harga", "Tanggal"],
    [1,"Alat Snorkeling",100000, "14-8-2023"],
    [2,"Alat Camping",100000, "14-8-2023"],
    [3,"Perahu Kaca",100000, "14-8-2023"],
    [4,"Kamera Bawah Laut",100000, "14-8-2023"]
];

const arrDataMonitoring = [
    ["id", "Nama", "No HP", "Posisi", "Sosial Media"],
    [1,"Bagus Widodo",+6282364738746, "Pemandu Lokal", "@BagusWidodo"],
    [2,"Bagus Wadidaw",+6282364738746, "Pemandu Lokal", "BagusWidodo"]
];

export const getData = () => {
    return data;
};

export const getArrData = () => {
    return arrData;
};

export const getDataMonitoring = () => {
    return data;
};