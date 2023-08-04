import { Store } from "pullstate";
import { loginAPI } from "../api/APIauth";

// deklarasi State Data User
export const UserState = new Store({
  user : {},
  active: false
});

// fungsi untuk login ke API
export async function updateUser({user, pass}) {
  const {respon, isError} = await loginAPI(user, pass)
  if (isError) {
    return false;
  }
  UserState.update((s) => { s.user = respon; s.active = true });
  return respon.role;
}

// deklarasi state Akses Data Menu
export const ConstantMenu = new Store({
  menu : [{id: 1, title: "Lihat Dokumen", icon: "urlIcon", route: 'Draf Dokumen' },
  {id: 2, title: "Riwayat", icon: "urlIcon", route: '/dashboard/riwayat' },
  {id: 3, title: "Verifikasi Dokumen", icon: "urlIcon", route: 'Scanner' },
  {id: 4, title: "Statistik TTE", icon: "urlIcon", route: '/dashboard/statistik' },
  {id: 5, title: "Pengaturan", icon: "urlIcon", route: '/dashboard/pengaturan' },]
})

// Data Detail Penyewaan Alat Snorekling
export const DetailSnorekling = new Store({
  detailsnorekling : [
    {id: 1, title: "Temukan keindahan bawah laut dengan alat snorkeling kami yang inovatif. Rasakan sensasi menyelam dalam kedamaian air biru dan jelajahi dunia bawah permukaan dengan kejernihan yang menakjubkan. Nikmati petualangan tanpa batas dengan alat snorkeling terbaik kami, cocok untuk pemula hingga ahli." },
    {id: 2, title: "Dapatkan pengalaman snorkeling tak terlupakan dengan alat berkualitas tinggi kami, yang dirancang untuk kenyamanan, keamanan, dan ketahanan. Segera dapatkan alat snorkeling kami dan buatlah momen indah bersama keluarga dan teman-teman di perairan indah favorit Anda."},
    ]
})
export const InformasiSnorekling = new Store({
  informasisnorekling : [
    {id: 1, title: "1. Snorkel adalah tabung berongga yang dipasang di bagian atas masker selam untuk memungkinkan pengguna bernapas di permukaan air tanpa harus mengangkat kepala. Ini mengurangi kebutuhan untuk mengangkat kepala dari air untuk bernapas, memungkinkan penyelam untuk tetap tenggelam."},
    {id: 2, title: "2. Kaki katak adalah sepatu khusus yang dirancang dengan sirip di bagian bawahnya. Sirip ini membantu penyelam untuk bergerak dengan mudah dan efisien di dalam air, memberikan daya dorong ekstra yang memungkinkan penyelam untuk berenang lebih cepat dan menghemat energi." },
    {id: 3, title: "3. Masker selam adalah perangkat yang menutupi mata, hidung, dan sebagian wajah untuk memungkinkan penyelam melihat dengan jelas di bawah permukaan air. Masker ini biasanya memiliki lensa kaca atau polikarbonat yang tahan terhadap air laut dan memungkinkan pandangan yang jernih."},
    {id: 4, title: "4. Pelampung tubuh ini dirancang untuk dipakai di sekitar tubuh atau dada penyelam. Biasanya berbentuk seperti jaket atau bantalan yang terbuat dari bahan ringan dan tahan air. Pelampung ini memberikan dukungan ekstra untuk membantu penyelam berapung di permukaan air dengan mudah tanpa perlu banyak usaha berenang."},
  ]
})
export const SyaratdanKetentuan = new Store({
  syaratdanketentuan :[
    {id: 1, title: "Sebagai syarat dan batasan dalam menyewa alat snorkeling, berikut beberapa poin yang perlu diperhatikan penyewa :"},
    {id: 2, title: "1. Penyewa diharuskan untuk menunjukkan identifikasi yang sah dan berlaku sebelum menyewa alat."},
    {id: 3, title: "2. Penyewa harus mematuhi semua aturan keamanan yang ditetapkan oleh atau petugas snorkeling. Ini termasuk pemakaian jaket pelampung dan selalu berenang bersama teman atau pasangan jika snorkeling di laut terbuka."},
    {id: 4, title: "3. Sebelum menyewa, penyewa harus memeriksa kondisi alat snorkeling dan memastikan semuanya berfungsi dengan baik. Jika ada kerusakan atau masalah, laporkan kepada penyewa segera untuk mendapatkan penggantian atau perbaikan."},
    {id: 5, title: "4. Penyewa bertanggung jawab atas alat snorkeling yang disewa selama periode waktu yang ditentukan. Jika ada kerusakan atau kehilangan akibat kelalaian atau penggunaan yang salah, penyewa harus menggantinya sesuai dengan kebijakan penyewa."},
    {id: 6, title: "5. Pastikan penyewa mengembalikan alat snorkeling sesuai dengan waktu yang disepakati. Keterlambatan pengembalian dapat mengakibatkan biaya tambahan atau denda."},
    {id: 7, title: "6. Penyewa diharuskan untuk mengikuti batasan lokasi yang ditentukan untuk snorkeling dan tidak boleh melebihi batas yang ditetapkan."},
    {id: 8, title: "7. Penyewa menyadari risiko yang terkait dengan snorkeling dan mengakui bahwa penyewa bertanggung jawab atas tindakan dan keselamatannya sendiri."},
  ]
})