import { Store } from "pullstate";
import { loginAPI } from "../api/APIauth";
import imgmakanan from '../assets/makanan.png'

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

//Data Geodiversity
export const KekarBerkolom1 = new Store({
  kekarberkolom :[
    {id: 1, title: "Kekar kolom adalah struktur batuan yang terbentuk karena pembekuan magma atau lava dengan cepat. Proses terbentuknya columnar joint dimulai ketika batuan lava atau batuan beku mencair dan mengalir selama letusan gunung berapi. Saat lapisan luar batuan tersebut cepat mendingin, terjadi kontraksi yang menyebabkan retakan-retakan membentuk pola kolom-kolom yang khas. Pada umumnya berbentuk kotak atau heksagon. Biasanya, kolom-kolom ini memiliki ukuran yang seragam dan tatanan yang rapi, yang memberikan kesan visual menarik sehingga terlihat seolah-olah oleh buatan manusia. Namun, sebenarnya situs geologi kekar kolom adalah murni hasil buatan alam."},
    {id: 2, title: "Situs geologi yang disebut sebagai jejak peradaban tertua di dunia ini juga dapat ditemukan di Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bolango, Provinsi Gorontalo, Indonesia."},
    {id: 3, title: "Keberadaan Kekar kolom di Desa Oluhuta ini terletak pada lereng gungung sekitar 2 meter dengan jarak jalan trans Desa Oluhuta."},
    {id: 4, title: "Dalam proses pembentukannya yang sangat unik Kekar kolom masuk dalam potensi geowisata di Desa Oluhuta. Untuk mengembangkan potensi geologi tersebut, kekar kolom memerlukan pendampingan dari pihak-pihak yang memiliki akses ke potensi tersebut dan memiliki pengetahuan yang luas tentang potensi tersebut. Hal ini disebabkan oleh fakta bahwa wisata alam tertentu terbatas atau eksklusif pada beberapa wilayah. Selain itu, wisata alam mudah rusak oleh hal-hal dalam dan luar. Jika sudah rusak, akan sangat sulit atau bahkan tidak mungkin untuk mengembalikannya. Mengingat kekar kolom terbentuk oleh proses geologis yang berlangsung selama jutaan tahun. Akibatnya, upaya konservasi diperlukan untuk menjaga dan melestarikan potensi geologi kekar kolom dengan melibatkan pihak-pihak terkait seperti pemerintah, masyarakat lokal, ilmuwan dan pihak-pihak terkait lainnya."},
    {id: 5, title: "Pendampingan oleh pihak-pihak yang memiliki pengetahuan yang komprehensif tentang kekar kolom juga sangat diperlukan. Ilmuwan dan ahli geologi dapat memberikan wawasan mendalam mengenai aspek-aspek penting, seperti proses pembentukan, kondisi lingkungan, dan upaya pencegahan kerusakan lebih lanjut. Selain itu, partisipasi masyarakat lokal penting dalam merawat dan menjaga kelestarian kekar Kolom mengingat kekar kolom tersebut merupakn keunikan fitur geologi tersendiri bagi Desa Oluhuta."},
    {id: 6, title: "Tidak hanya itu, pengembangan akses yang berkelanjutan juga harus menjadi perhatian. Jika tidak diatur dengan baik, peningkatan kunjungan ke lokasi wisata alam yang berlokasi di Desa Oluhuta ini dapat mengakibatkan dampak negatif, seperti kerusakan lingkungan, atau kerusakan flora dan fauna setempat. Oleh karena itu, perencanaan yang matang harus dilakukan untuk menghindari efek merugikan pada lingkungan."},
    {id: 7, title: "Upaya konservasi dalam bentuk edukasi juga perlu dilakukan kepada para pengunjung. Menyediakan informasi tentang pentingnya pelestarian kekar kolom dan bagaimana setiap individu dapat berkontribusi dalam menjaga kelestariannya hingga dapat membantu meningkatkan kesadaran dan kepedulian terhadap keberlangsungan situs geologi kekar kolom untuk menarik daya tarik pengunjung wisata lokal maupun internasional."},
    {id: 8, title: "Oleh karena itu kolaborasi internasional juga dapat menjadi langkah maju dalam upaya konservasi ini. Melibatkan komunitas internasional dan mempertukarkan pengetahuan serta pengalaman dalam melestarikan kekayaan geologi sehingga dapat memberikan manfaat jangka panjang bagi kekar kolom dan wilayah Desa Oluhuta."},
  ]
})
export const KekarBerlembar1 =new Store({
  kekarberlembar :[
    {id: 1, title: "Kekar lembar adalah fenomena geologi yang terjadi di batuan, terutama batuan beku yang mengakibatkan pembentukan datar serupa dengan lembaran tipis atau lapisan yang mengelupas dari batuan. Dalam buku Jelajah Pusaka Alam dan Budaya mengatakan bahwa terbentuknya  kekar lembar adalah akibat penghilangan beban batuan yang terkena erosi. Penghilangan beban pada kekar ini terjadi akibat :"},
    {id: 2, title: "1)	Batuan beku belum benar-benar membeku secara menyeluruh."},
    {id: 3, title: "2)	Tiba-tiba diatasnya terjadi erosi yang dipercepat."},
    {id: 4, title: "3)	Sering terjadi pada sebuah intrusi konkordan (sill) dangkal."},
    {id: 5, title: "Akibat dari proses ini, lapisan-lapisan tipis permukaan batuan secara perlahan terkelupas atau terkelupas dari batuan utama, membentuk bidang datar yang serupa dengan lembaran batuan. Kekar lembar (Sheet jointing) ini dapat membentuk struktur batuan yang menarik dan sering ditemukan di pegunungan granit dan batuan beku lainnya."},
    {id: 6, title: "Sama halnya dengan kekar kolom situs geologi kekar lembar dapat di temui di perairan pesisr pantai Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bone Bolango, Provinsi Gorontalo, Indonesia. Keberadaan kekar lembar berada sekitar jarak 20 meter dengan kekar kolom (columnar joint)."},
    {id: 7, title: "Kekar lembar(sheeting joint) yang berada di Desa Oluhuta merupakan fenomena geologi yang menarik dan dapat memberikan wawasan tentang proses-proses geologi yang dapat terjadi di permukaan bumi sehingga memiliki pengaruh dalam studi arkeologi. Namun, Kekar lembar (sheeting joint) yang berlokasi di Desa Oluhuta berpotensi menyebabkan longsor batuan atau patahan dinding tebing sehingga perlunya keamanan infrastruktur di lokasi tersebut agar tidak terjadi potensi longsor batuan atau patahan dinding tebing. Mengingat kekar lembar (sheeting joint) merupakan salah satu tempat objek geowisata Desa Oluhuta. Dengan demikian, dalam pengelolaan geowisata perlu melibatkan dan mengintegrasikan masyarakat lokal dan pemangku kepentingan agar menjadikan kawasan Geopark Oluhta ini menjadi salah satu destinasi wisata minat khusus yang ada di Gorontalo."},
    {id: 8, title: "Masyarakat lokal di Desa Oluhuta mayoritas menggantungkan hidup pada mata pencaharian tradisional, khususnya sebagai nelayan dan petani. Namun, jarak yang jauh dari pusat aktivitas di daerah Kota Gorontalo menyebabkan keterbatasan dalam pendidikan formal dan lapangan pekerjaan yang tersedia di wilayah tersebut. . Hal ini bisa dimaklumi karena masyarakat belum mengenal aspek kebumian yang bisa dikembangkan sebagai obyek wisata. Paradigma yang terjadi di masyarakat tentang situs geologi hanya sebatas eksploitasi mineral yang merugikan kelestarian situs geologi,"},
    {id: 9, title: "Diharapkan potensi yang dimiliki oleh Geopark Desa Oluhuta dapat mengubah pola pikir masyarakat, yaitu dengan memanfaatkan sumber daya alam dan memanfaatkannya secara berkelanjutan. Dengan pendekatan yang berfokus pada keindahan alam dan aspek berkelanjutan, diharapkan Geopark Oluhuta dapat menjadi salah satu kawasan wisata unggulan di Provinsi Gorontal bahkan ke Luar Negeri."},
  ]
})
export const LautanTerangkat1 =new Store({
  lautanterangkat :[
    {id: 1, title: "Situs Teras Terumbu adalah Fenomena pengangkatan terumbu karang yang menyebabkan perubahan sedimentasi pasir besi di tanggul pantai yang sebelumnya aktif terendap di zona pantai. Akibatnya, muncul “shoal” atau dangkalan-dangkalan yang masyarakat Desa Setempat menyebutnya dengan Lautan Terangkat."},
    {id: 2, title: "Pada dasarnya, teras terumbu karang memiliki beberapa nama seperti teras laut, terumbu karang terangkat, dan teras pantai."},
    {id: 3, title: "tiga faktor utama penyebab fenomena teras terumbu karang, antara lain:"},
    {id: 4, title: "1.	Tumpukan lempeng yang menyebabkan terangkatnya sedimen laut kemudian menimbulkan pengangkatan batuan yang ditumbuhi terumbu karang. "},
    {id: 5, title: "2.	Gunung berapi aktif di bawah laut naik ke permukaan dan membentuk pulau yang terdapat lereng terjal yang biasanya terdapat batuan vulkanik yang ditumbuhi karang."},
    {id: 6, title: "3.	Pergerakan yang dihasilkan oleh jalur aktif tektonik secara konvergen menyebabkan pesisir menjadi terangkat atau turun . Bentuk undakan teras pantai merupakan bukti pengangkatan yang diamati melalui perairan, sedangkan untuk pengamatan melalui darat dapat dibuktikan dengan adanya terumbu karang yang membentuk daratan."},
    {id: 7, title: "Beberapa poin di atas merupakan beberapa fenomena geologi yang menyebabkan terbentuknya teras terumbu karang (Lautan Teragkat)."},
    {id: 8, title: "Selain proses pembentukannya yang unik, teras terumbu karang di Oluhuta juga memiliki berbagai jenis flora dan fauna yang termasuk dalam aspek daya tariknya. Di sekitar teras terumbu karang (lautan terangkat) banyak dijumpai pohon cemara laut dan pohon Stigi, dan di sepanjang pantai teras terumbu karang (lautan terangkat) terdapat tumbuhan bakau dan beberapa fauna seperti kepiting, kerang, dan berbagai jenis ikan. Selain itu keunikan lain dari teras terumbu karang (lautan terangkat)  di Oluhuta adalah medan yang menantang yang harus ditempuh untuk menuju lokasi utama teras terumbu karang (lautan terangkat) diperkirana memakan waktu sekitar 10-15 menit berjalan melalui beberapa tebing yang panjang untuk sampai ke sana."},
  ]
})

//Data Makanan
export const Makanan1 =new Store({
  makanan :[
    {id: 1, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 2, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 3, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 4, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 5, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 6, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 7, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 8, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 9, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 10, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 11, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 12, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 13, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 14, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 15, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 16, name: 'Nasi Kuning', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 17, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 'Rp. 10.000' },
    {id: 18, name: 'Pisang Goreng', image: imgmakanan, harga: 'Rp. 10.000' },
  ]
})
