import { Store } from "pullstate";
import imgkbr from "../assets/Kekar Berkolom2.jpg"
import imgkbl from "../assets/Kekar Berlembar1.jpg"
import imglt from "../assets/Lautan Terangkat1.jpg"
import imgminumam from '../assets/drink.png'
import imgmakanan from '../assets/makanan.png'
import ikankarng1 from '../assets/Ikan Karang1.jpg'
import pohonstigi1 from '../assets/Pohon Stigi1.jpg'
import terumbukarang1 from '../assets/Terumbu Karang1.jpg'
import perahutradisional from '../assets/Budaya Membuat Perahu1.jpg'
import situsmanusiaoluhuta from '../assets/Situs Manusia Oluhuta1.png'
import snorekling from '../assets/Peralatan Snorkling.jpg'
import tenda from '../assets/Tenda.jpg'
import kamera from '../assets/kamera.jpg'
import perahu from '../assets/perahuk.jpg'
import kerajinan from '../assets/kalung.jpg'
import macrame from '../assets/Macrame.jpeg'

export const SplashConfig = new Store ({
    loadSplash: true
})

//Data Ekonomi
export const Eko = new Store ({
    eko :[
        {
            id: 1,
                image : kerajinan,
                title : "Kerajinan Terumbu Karang",
                p1: <p>
                    Selamat datang di dunia keindahan kerajinan terumbu karang yang unik dan mempesona!
                    <br></br>
                    Kami dengan bangga menyajikan koleksi kerajinan tangan terumbu karang hasil buatan tangan UMKM Lokal Desa Oluhuta yang menakjubkan, yang dihasilkan dengan cinta dan perhatian oleh para pengrajin terampil. Setiap kerajinan terumbu karang kami adalah karya seni yang indah, mencerminkan keajaiban alam laut dan memancarkan pesona bawah laut yang luar biasa.
                    <br></br>
                    Berikut adalah beberapa alasan mengapa Anda harus memiliki kerajinan terumbu karang kami :
                    <br></br>
                    1.	Keindahan Alam Bawah Laut
                    <br></br>
                    Setiap kerajinan terumbu karang kami menangkap pesona alam bawah laut yang menakjubkan. Dari patung-patung karang yang detail hingga pernak-pernik cantik yang dihiasi dengan terumbu karang asli, setiap karya seni kami adalah ungkapan indah tentang keindahan laut yang tak ternilai.
                    <br></br>
                    2.	Kreativitas dan Unik
                    <br></br>
                    Setiap kerajinan terumbu karang kami adalah produk dari kreativitas para pengrajin kami. Tidak ada dua karya yang sama, membuat setiap koleksi kami menjadi unik dan istimewa.
                    <br></br>
                    3.	Dukungan Konservasi
                    <br></br>
                    Dalam menyediakan kerajinan terumbu karang, kami mendukung konservasi terumbu karang dan lingkungan laut. Kami mendapatkan terumbu karang kami dari sumber yang berkelanjutan dan bertanggung jawab, sehingga Anda dapat memiliki kerajinan indah ini tanpa merusak lingkungan bawah laut.
                    <br></br>
                    4. Hadiah Berarti
                    <br></br>
                    Kerajinan terumbu karang adalah hadiah yang berarti bagi Anda atau orang yang Anda cintai. Setiap kerajinan memiliki pesan dan makna sendiri, dan akan menjadi kenang-kenangan indah yang abadi.
                    <br></br>
                    5. Keaslian
                    <br></br>
                    Kami menjamin keaslian setiap kerajinan terumbu karang yang kami tawarkan. Material yang kami gunakan adalah terumbu karang asli, yang dikerjakan dengan cermat untuk menghadirkan sentuhan alami ke setiap karya seni.
                    <br></br>
                    6. Inspirasi dalam Rumah Anda
                    <br></br>
                    Kerajinan terumbu karang akan memberikan sentuhan alami dan inspirasi bawah laut ke dalam rumah atau ruang Anda. Setiap kali Anda melihat kerajinan ini, Anda akan diingatkan akan keindahan dan keragaman alam laut.
                    <br></br>
                    Tingkatkan keindahan rumah Anda atau berikan hadiah istimewa kepada orang yang Anda cintai dengan kerajinan terumbu karang kami.
                </p>,
        },
        {
            id: 2,
                image : macrame,
                title : "Macrame",
                p1: <p>
                Selamat datang di koleksi macrame wisata Edu-geowisata Oluhuta yang mempesona!
                <br></br>
                Kami dengan bangga menyajikan karya seni macrame yang indah dan unik, dirancang khusus untuk menyempurnakan pengalaman wisata Anda. Setiap karya seni macrame kami adalah hasil buatan tangan UMKM Lokal Desa Oluhuta, mencerminkan keindahan alam dan pesona destinasi wisata yang menakjubkan.
                <br></br>
                Berikut adalah beberapa alasan mengapa Anda harus memiliki macrame wisata dari koleksi kami:
                <br></br>
                1.	Kreativitas dan Keunikan: Setiap karya seni macrame kami adalah produk dari kreativitas para seniman kami. Mereka merangkai tali dengan keahlian untuk menciptakan desain yang unik dan istimewa, tidak ada yang sama persis. Dengan memiliki macrame wisata dari kami, Anda akan memiliki karya seni yang tidak dimiliki oleh orang lain.
                <br></br>
                2.	Kenang-kenangan Wisata yang Abadi: Macrame wisata kami adalah kenang-kenangan yang indah dari perjalanan wisata Anda. Mereka menghadirkan sentuhan alam dan keajaiban destinasi wisata yang Anda kunjungi, sehingga mengingatkan Anda akan momen indah selama liburan Anda setiap kali Anda melihatnya.
                <br></br>
                3.	Inspirasi dan Energi Positif: Macrame memiliki daya tarik artistik yang khas dan memberikan energi positif ke dalam ruangan Anda. Mereka membawa keindahan alam ke dalam rumah Anda, menciptakan suasana yang menyenangkan dan menenangkan.
                <br></br>
                4.	Kualitas dan Tahan Lama: Karya seni macrame kami dibuat dengan tangan dan menggunakan bahan berkualitas tinggi, sehingga Anda dapat yakin akan kualitas dan ketahanannya. Macrame wisata kami dirancang untuk bertahan lama, memastikan Anda menikmati kenang-kenangan ini dalam waktu yang lama.
                <br></br>
                5.	Pilihan Motif dan Desain: Kami menyediakan berbagai pilihan motif dan desain macrame wisata, dari gambar alam hingga simbol khas destinasi wisata. Anda dapat memilih yang paling sesuai dengan gaya dekorasi Anda atau menggambarkan destinasi wisata favorit Anda.
                <br></br>
                6.	Hadiah Istimewa: Macrame wisata adalah hadiah yang istimewa untuk keluarga atau teman yang mencintai perjalanan dan wisata. Mereka akan menyambut hangat karya seni ini sebagai hadiah yang unik dan berarti.
                <br></br>
                Dapatkan karya seni macrame wisata kami dan hadirkan pesona destinasi wisata ke dalam rumah Anda. Biarkan macrame menjadi perwakilan keindahan alam dan kenangan tak terlupakan dari petualangan wisata Anda.
            </p>,
            }
    ]
})


//Data Culturardiversity
export const Cul = new Store ({
    cul :[
        {id: 1,
            image : perahutradisional,
            title : "Perahu Tradisional",
            p1 : <p>
                Perahu tradisional adalah jenis perahu yang telah digunakan oleh masyarakat sejak zaman dahulu, sebelum adanya teknologi modern dalam pembuatan kapal. Perahu ini mencerminkan kearifan lokal dan budaya suatu daerah, serta telah menjadi bagian penting dari kehidupan masyarakat maritim di berbagai wilayah di dunia. Di dalam Kamus Besar Bahasa Indonesia (KBBI), perahu dapat didefinisikan sebagai alat transportasi (kendaraan) air yang biasanya tidak memiliki geladak serta memiliki bentuk lancip pada kedua ujungnya dan lebar di bagian tengah.
                <br></br>
                Uniknya di Desa Oluhuta sendiri perahu tradisional dimaknai bukan hanya sebagai alat trasnportasi tetapi perahu tradisional memiliki makna spritual dan hubungan dengan alam roh (Altenmuller, 2002). Tradisi membuat perahu yang berada di Desa Oluhuta telah berlangsung selama generasi dapat diliha dari beberapa kriteria berikut : 
                <br></br>
                1. Material lokal
                <br></br>
                Tradisi pembuatan perahu masyarakat nelayan Desa Oluhuta biasanya menggunakan bahan-bahan alami yang tersedia secara lokal. Ini sering termasuk kayu pilihan yang bergantung pada ketersediaan dan kecocokan dengan lingkungan perairan setempat.
                <br></br>
                2. Penyelarasan dengan alam
                <br></br>
                Pembuatan perahu juga seringkali dipengaruhi oleh pengetahuan tentang alam dan lingkungan lokal. Masyarakat nelayan setempat sering memperhatikan arah angin, gelombang laut, dan kekuatan alam lainnya saat merancang perahu agar dapat berfungsi dengan baik di perairan laut.
                <br></br>
                3. Ritual dan doa
                <br></br>
                Beberapa komunitas nelayan memiliki ritual khusus atau doa yang dilakukan selama pembuatan perahu. Tujuannya adalah untuk memberikan rasa hormat kepada roh, memohon perlindungan, dan membawa keberuntungan bagi para nelayan yang akan menggunakan perahu tersebut. Di Gorontalo sendiri khusunya di Desa Oluhuta yang menganut kepercayan islam dalam bahas Gorontalo disebut dengan nama “mongadi sholawati” atau  bentuk doa dan pujian untuk Nabi sebagai ibadah kepada Allah SWT.
                <br></br>
                4. Pengrajin berbakat
                <br></br>
                Pembuatan perahu sering dilakukan oleh sekelompok pengrajin berbakat yang memiliki keahlian khusus dalam seni ini. Mereka mungkin merupakan ahli dalam memilih bahan yang tepat, memahat kayu dengan detail, dan merakit perahu dengan presisi.
                <br></br>
                5. Waktu melaut
                <br></br>
                Beberapa nelayan menggunakan “kalender keselamatan” sebelum melaut. Kalender tersebut dipercayai sebagai waktu keselamatan nelayan dan mendapatkan hasil yang bagus ketika melaut. Dalam bahasa gorontalo disebut dengan “Lowanga” atau hari buruk.
                <br></br>
                Tradisi pembuatan perahu oleh masyarakat nelayan Desa Oluhuta mencerminkan hubungan yang kuat antara manusia dan laut, serta penyesuaian dengan kondisi lingkungan setempat.
            </p>,
        },
        {id: 2,
            image : situsmanusiaoluhuta,
            title : "Situs Manusia Oluhuta",
            p1 : <p>
                Kerangka Manusia Oluhuta adalah peninggalan dari masa kebudayaan prasejarah yang di temukan di wilayah provinsi gorontalo, tepatnya berada di Desa Oluhuta, Kecamatan Kabila Bone. Haris Rubai, warga Desa Oluhuta dalam podcast Radio Republik Indonesia Gorontalo (2009) menerangkan bahwa penemuan ini berawal dari ketidaksegajaan ayahnya yaitu Karim A. Rubai, yang pada tahun 1994 hendak membangun rumah, lalu pada proses penggalian untuk membangun pondasi menemukan 7 buah beliung persegi yang terbuat dari batu dengan bentuk yang mirip. Kemudian Bapak Karim A. Rubai melaporkan penemuannya ini pada Depdikbud Kecamatan Bone Pantai. Pihak Depdikbud Kecamatan Bone Pantai kemudian meneruskan informasi terkait penemua bersejarah ini ke bidang Muskala Kanwil Depdikbud Provinsi Sulawesi Utara. Setelah itu berdasarkan informasi yang diterima Depdikbud Provinsi Sulawesi Utara, pada tahun 1995 Balai Arkeologi Manado turun untuk meninjau lokasi penemuan tersebut.
                <br></br>
                Pada tahun 2000, Balai Arkeologi Manado memulai penelitian dan ekskavasi dengan langkah pertama yakni membuka enam buah kotak galian. Dari sini ditemukanlah sejumlah benda seperti gerabah, cangkang kerang, dan siput, sejumlah besar sisa penuangan logam, bandul jala, susunan makam, serta kerangka-kerangka manusia baik yang masih utuh maupun yang sudah terpisah (Podcast Radio Republik Indonesia Gorontalo, 2009). Dalam sebuah vidio dokumenter oleh Balai Arkeologi Sulawesi Utara 2020 dijelaskan bahwa ekskavasi yang dilakukan pada 12 fosil kerangka manusia tersebut menggunakan sistem grid, yakni tanah di kupas per spit. Adapun 12 fosil kerangka manusia tersebut ditemukan pada spit 9 atau sekitar 105 cm di dalam tanah.
                <br></br>
                Ekskavasi tersebut dilakukan secara bertahap oleh Balai Arkeologi Manado, dimulai pada tahun 2004-2006 ditemukan 6 buah kerangka manusia. Selanjutnya menyusul 5 kerangka lainnya ditemukan di tahun 2008 dan 2009. Lalu, kerangka manusia yang terakhir di temukan pada tahun 2010 dengan posisi yang sejajar dengan kerangka pada tahun-tahun sebelumnya. Maka dari itu total kerangka manusia yang ditemukan di Desa Oluhuta berjumlah 12 kerangka manusia.
                <br></br>
                Selain itu, di tengah-tengah bagian tubuh kerangka ke-12 juga ditemukan sebuah tengkorak yang sudah tidak utuh. Kerangka manusia yang ditemukan di Desa Oluhuta rata-rata memiliki ukuran 170 cm; lebar dada 38; panjang tulang lengan 30cm; panjang tulang paha 39cm; serta panjang tulang kaki 36cm. Kerangka manusia ini dperkirakan hidup sekitar 530 hingga 700 tahun, hal ini diperoleh dari hasil dating yang dilakukan denga mengambil sampel arang atau hasil pembakaran pada salah satu kotak ekskavasi.
                <br></br>
                Kerangka manusia serta beberapa penemuan artefak yang ditemukan di Desa Oluhuta merupakan penemuan yang amat penting dan mampu menggambarkan serta menjelaskan kebudayaan dan kehidupan manusia yang mendiami Gorontalo pada masa lampau. Berdasarkan informasi dari Museum Popa Eyato yang diliput oleh banthayo.id (2020) di jelaskan bahwa 12 kerangka manusia tersebut ditemukan berada pada posisi sejajar dengan bujur yang sama yakni arah timur ke barat serta muka menghadap ke arah gunung yang diketahui menggunakan sistem penguburan primer. Hal ini menunjukkan bahwa pada masa itu, budaya penguburan yang dilakukan masyarakat yang mendiami wilayah tersebut sudah berpola. Tidak hanya itu, pola penguburan ini juga menandakan terdapat suatu kepercayaan yang mana tempat-tempat tinggi seperti gunung diangggap merupakan tempat bersemayam roh leluhur. Ditinjau dari segi posisi serta hadap pola penguburan yang ditemukan, Ipak Fahriani, seorang Arkeolog dari Balai Arkeologi Manado menyatakan bahwa kerangka tersebut merupakan manusia yang hidup jauh sebelum islam masuk ke Gorontalo, karena orientasi penguburannya yang tidak mencirikan nilai-nilai dan ajaran islam. Hal ini juga didukung oleh adanya bekal kubur yang ditemukan di sekitar kerangka manusia, seperti fragmen gerabah dan serpihan dari pembuatan alat batu, kapak batu, dan artefak lain yang biasanya ikut serta sebagai bekal kubur (vidio Dokumenter Balai Arkeologi Sulawesi Utara Part 1, 2020) dari pola penguburan ini juga dapat diketahui bahwa kerangka-keranggka yag ditemukan merupakan manusia yag hidup pada akhir masa prasejarah atau sekitar 2000 tahun yang lalu.
                <br></br>
                Di sisi lain, sejumlah artefak yang ditemukan terutama jenis kapak dan sebuah bandul jala dari tanah liat adalah bukti sejarah yang menjelaskan tentang mata pencaharian masyarakat Oluhuta yakni bercocok tanam juga sebagai nelayan. Saat ini, situs Manusia Oluhuta juga sudah tercatat sebagai salah satu cagar budaya Gorontalo dalam data Balai Cagar Budaya Gorontalo (BPCB) di tahun 2015 dengan nomor registrasi BP3.GTLO/75/03.04.0017.
            </p>,
            }
    ]
})
// Data Biodiversity
export const Bio = new Store ({
    bio :[
        {id: 1,
            image : ikankarng1,
            title : "Ikan Karang",
            p1: <p>
                Ikan yang tinggal di dalam atau dekat terumbu karang dikenal sebagai ikan terumbu karang, karena terumbu karang membentuk ekosistem yang rumit dan kaya akan kehidupan. Beberapa di antaranya dapat dilihat dan berwarna. Ikan karang sendiri merupakan salah satu aspek keanekaragaman hayati Desa Oluhtuta yang termasuk dalam komponen fauna. Ikan karang menjadi daya tarik utama bagi para penyelam dan snorkeler yang ingin mengamati keindahan dan keanekaragaman hayati terumbu karang di Desa Oluhuta.
                <br></br>
                Ikan karang memberikan kontribusi ekonomi bagi daerah pesisir khusunya Desa Oluhut yang mengandalkan sektor berbasis pariwisata. Beberapa ikan karang juga berkontribusi sebagai penyerbuk bagi alga-alga dan tumbuhan lainnya di terumbu karang. Proses penyerbukan ini penting dalam menjaga keseimbangan dan reproduksi tanaman laut di ekosistem tersebut. Tanpa ikan karang, ekosistem terumbu karang dapat mengalami gangguan dan masalah ekologis lainnya.
                <br></br>
                Beberapa contoh spesies ikan karang yang sering dijumpai dalam ekosistem terumbu karang di laut Desa Oluhuta :
                <br></br>
                1)	Ikan Kepe-kepe (Chaetodontidae)
                <br></br>
                Ikan kepe-kepe hidup di berbagai perairan hangat dan dangkal, terutama di terumbu karang dan perairan pantai di kawasan tropis dan subtropis. Mereka menyukai habitat terumbu karang karena menyediakan makanan berlimpah, tempat berlindung, dan kondisi yang cocok untuk berkembang biak. Salah satu organisme yang dapat dijadikan sebagai penanda kerusakan terumbu karang adalah ikan Kepe-kepe (Chaetodontidae) (Madduppa et al. 2012; Kulbicki, 2005)
                <br></br>
                2)	Ikan Anemon (Clownfish)
                <br></br>
                Ikan anemon atau lebih dikenal dengan sebutan ikan badut merupakan ikan karang yang terkenal karena hubungannya dengan anemon laut. Mereka hidup dalam simbiosis dengan anemon, di mana ikan memberikan perlindungan dari predator untuk anemon, dan sebaliknya, anemon memberikan tempat berlindung bagi ikan badut. Ikan badut juga menjadi daya tarik populer bagi wisatawan dan penyelam karena keunikan dan keindahan warnanya.
                <br></br>
                3)	Ikan Sargent Major
                <br></br>
                Ikan sargent major adalah ikan karang kecil dengan warna cerah dan garis-garis hitam yang khas di tubuhnya. Mereka sering hidup dalam kelompok dan berperan sebagai pemangsa bagi beberapa hama di terumbu karang. Ikan yang dikenal sebagai ikan Abu-abu Bergaris merupakan jenis ikan laut kecil yang sering ditemukan di perairan tropis termasuk di perairan Laut Oluhuta yang menjadi ikan favourite pengunjung wisata saat melakukan snorkel.
                <br></br>
                Ikan karang sering hidup dalam kelompok yang beragam, terutama di sekitar terumbu karang. Ini membantu melindungi mereka dari predator, berkomunikasi, dan mencari makan secara efisien dan secara langsung maupun secara tidak langsung memanfaatkan terumbu karang untuk kepentingan hidupnya
                <br></br>
                Selain itu Ikan karang menjadi daya tarik utama bagi pariwisata bawah laut. Aktivitas seperti snorkeling dan menyelam memberikan kesempatan bagi para wisatawan untuk berinteraksi dengan ikan karang dan menyaksikan keajaiban dunia bawah laut.
            </p>,
        },
        {id : 2,
            image : terumbukarang1,
            title : "Terumbu Karang",
            p1 : <p>
                Terumbu karang merupakan ekosistem penting bagi keberlanjutan sumberdaya wilayah pesisir. Ekosistem terumbu karang secara ekologis berfungsi sebagai penyangga untuk kehidupan pesisir.
                <br></br>
                Terumbu Karang Oluhuta menawarkan sejumlah peluang sebagai justifikasi yang kuat untuk pengembangan pariwisata di kawasan wisata Oluhuta, antara lain kedekatan kawasan dengan kawasan Taman Laut Olele yang terkenal dengan keindahan bawah lautnya, serta meningkatnya kecenderungan wisatawan domestik untuk mencari tempat wisata baru.
                <br></br>
                terumbu karang dikenal sebagai ekosistem yang memiliki fungsi penting, Peran ekologis Terumbu karang tidak terlepas dari fungsinya sebagai daerah spawing ground (pemijahan), mursey ground (pengasuhan), feeding ground (mencari makan), dan rearing ground (daerah pembesaran) bagi biota. Dalam peran ekologisnya, ekosistem terumbu karang adalah tempat hidup dan mencari makan berbagai tumbuhan laut maupun organisme hewan seperti ikan, penyu, udang, kerang dan rumput laut.
                <br></br>
                Terumbu karang Oluhuta memiliki kekayaan biota laut yang melimpah seperti ikan betok, anemon, ikan botuna biru dan ribuan spesies ikan serta organisme laut lain yang tingga di dalamnya. Yang paling populer adalah bunga karang raksasa Salvador Dali (Petrosia Lignosa) yang bisa ditemukan dikedalaman laut Desa Oluhuta. Sejauh ini, bunga karang Salavador Dali (Petrosia lignosa) telah menjadi salah satu destinasi wisata bawah laut Gorontalo. Bunga karang raksasa ini bisa mencapai panjang hingga tiga meter dan lokasinya bisa dijumpai di beberapa wisata bawah laut Gorontalo seperti di perairan Olele, Molotabu, Leato Kabupaten Bone Bolango dan Biluhu Kabupaten Gorontalo.
                <br></br>
                Berdasarkan hasil pengamatan yang dilakukan di Desa Oluhuta, rata-rata masyarakat setempat bermata pencaharian sebagai Nelayan dan juga petani. Dan menurut penuturan masyarakat setempat aktivitas nelayan Desa Oluhuta menerapkan sistem zonasi dimana proses penangkapan ikan hanya terjadi di zona tangkap saja dan peralatan yang digunakan adalah peralatan yang ramah lingkungan dan tidak merusak ekosistem bawah laut. Hal ini sejalan dengan kawasan Desa Oluhuta yang difungsikan sebagai destinasi wisata alam yang harus dijaga dengan baik karena terumbu karang merupakan ekosistem yang sangat sensitif dan rentan terhadap berbagai ancaman.
            </p>,
        },
        {id : 3,
            image : pohonstigi1,
            title : "Pohon Stigi",
            p1 : <p>
                Indonesia adalah negara yang kaya akan berbagai macam jenis tumbuhan, terutama aneka pepohonan. Salah satunya pohon stigi, pohon ini merupakan salah satu jenis tanaman perdu yang dapat ditemukan di beberapa wilayah pesisir. Termasuk di daerah pesisir Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bone Bolango, Provinsi Gorontalo, Indonesia.
                <br></br>
                Habitat pohon stigi tumbuh pada tempat yang berkarang dan tempat berpasir. Bentuknya yang unik mudah dikenali dengan mudah. Mulai dari batang yang berkelok tak beraturan, memiliki batang pohon berwarna abu-abu dan kecoklatan dan memiliki daun hijau berbentuk elips.
                <br></br>
                Sayangnya, banyak yang masih belum mengetahui tentang pohon yang populasinya mulai langka ini. Bahkan banyak juga yang belum pernah melihat seperti apa wujud dari pohon stigi.
                <br></br>
                Pohon Stigi tumbuh di permukaan teras terumbu karang atau lautan terngakat Desa Oluhuta yang saat ini sebagai salah satu konsep keanekaragaman hayati (biodiversity) Desa Oluhuta yang memiliki nilai ekologis, ekonomis, dan sosial yang sangat penting untuk menajdikan Desa Oluhuta adalah desa geowisata provinsi Gorontalo. Oleh karena itu, perlindungan dan pengelolaan yang berkelanjutan dari tempat pohon stigi tumbuh menjadi sangat penting untuk memastikan kelangsungan dan keberlanjutan spesies ini dan lingkungan hidupnya. Konservasi dan perlindungan keanekaragaman hayati menjadi sangat penting untuk memastikan kelangsungan hidup dan keberlanjutan ekosistem yang mendukung kehidupan manusia.
                <br></br>
                Selain keunikan pohon stigi yang tumbuh disekitar batuan karang Desa Oluhuta, pohon dengan spesies pemphis acidula ini memilki beragam manfaat dan kegunaan.
                <br></br>
                1)	Manfaat lingkungan
                <br></br>
                - Kemampuannya untuk menyerap karbondioksida dan menghasilkan sejumlah besar oksigen yang bermanfaat memastikan bahwa udara di sekitar pohon tetap segar.
                <br></br>
                - Dapat mengurangi risiko bencana alam, terutama banjir rob dan abrasi pantai. Pohon stigi sering ditemukan di hutan mangrove karena pohon stigi dapat menahan air laut pasang dan berfungsi sebagai tanggul alami untuk mencegah banjir yang berasal dari air laut.
                <br></br>
                - Dan berfungsi sebagai peneduh, terutama dari sinar matahari yang kuat.  Daun dari pohon ini yang cukup rindang membuat siapa saja yang berada di bawah pohon tersebut akan merasa sejuk dan segar.
                <br></br>
                2)	Manfaat Kesehatan
                <br></br>
                - Kayu pohon stigi dipercayai memiliki efek penyembuhan pada diabetes dan rematik. Bebereapa orang sedang meneliti dan mengolahnya untuk digunakan sebagai pengobatan alternatif.
                <br></br>
                - Membantu menjaga kekebalan tubuh terhadap penyakit. Oleh karena itu, komponen tanaman ini diyakini dapat membantu meningkatkan daya tahan tubuh terhadap penyakit seperti flu atau batuk pilek.
            </p>,
        }
    ]
})
//Data Geodiversity
export const Geo = new Store({
    geo :[
        {id: 1,
            image: imgkbr,
            title: "Kekar Berkolom",
            p1: <p>
                Kekar kolom adalah struktur batuan yang terbentuk karena pembekuan magma atau lava dengan cepat. Proses terbentuknya columnar joint dimulai ketika batuan lava atau batuan beku mencair dan mengalir selama letusan gunung berapi. Saat lapisan luar batuan tersebut cepat mendingin, terjadi kontraksi yang menyebabkan retakan-retakan membentuk pola kolom-kolom yang khas. Pada umumnya berbentuk kotak atau heksagon. Biasanya, kolom-kolom ini memiliki ukuran yang seragam dan tatanan yang rapi, yang memberikan kesan visual menarik sehingga terlihat seolah-olah oleh buatan manusia. Namun, sebenarnya situs geologi kekar kolom adalah murni hasil buatan alam.
                <br></br>
                Situs geologi yang disebut sebagai jejak peradaban tertua di dunia ini juga dapat ditemukan di Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bolango, Provinsi Gorontalo, Indonesia.
                <br></br>
                Keberadaan Kekar kolom di Desa Oluhuta ini terletak pada lereng gungung sekitar 2 meter dengan jarak jalan trans Desa Oluhuta.
                <br></br>
                Dalam proses pembentukannya yang sangat unik Kekar kolom masuk dalam potensi geowisata di Desa Oluhuta. Untuk mengembangkan potensi geologi tersebut, kekar kolom memerlukan pendampingan dari pihak-pihak yang memiliki akses ke potensi tersebut dan memiliki pengetahuan yang luas tentang potensi tersebut. Hal ini disebabkan oleh fakta bahwa wisata alam tertentu terbatas atau eksklusif pada beberapa wilayah. Selain itu, wisata alam mudah rusak oleh hal-hal dalam dan luar. Jika sudah rusak, akan sangat sulit atau bahkan tidak mungkin untuk mengembalikannya. Mengingat kekar kolom terbentuk oleh proses geologis yang berlangsung selama jutaan tahun. Akibatnya, upaya konservasi diperlukan untuk menjaga dan melestarikan potensi geologi kekar kolom dengan melibatkan pihak-pihak terkait seperti pemerintah, masyarakat lokal, ilmuwan dan pihak-pihak terkait lainnya.
                <br></br>
                Pendampingan oleh pihak-pihak yang memiliki pengetahuan yang komprehensif tentang kekar kolom juga sangat diperlukan. Ilmuwan dan ahli geologi dapat memberikan wawasan mendalam mengenai aspek-aspek penting, seperti proses pembentukan, kondisi lingkungan, dan upaya pencegahan kerusakan lebih lanjut. Selain itu, partisipasi masyarakat lokal penting dalam merawat dan menjaga kelestarian kekar Kolom mengingat kekar kolom tersebut merupakn keunikan fitur geologi tersendiri bagi Desa Oluhuta.
                <br></br>
                Tidak hanya itu, pengembangan akses yang berkelanjutan juga harus menjadi perhatian. Jika tidak diatur dengan baik, peningkatan kunjungan ke lokasi wisata alam yang berlokasi di Desa Oluhuta ini dapat mengakibatkan dampak negatif, seperti kerusakan lingkungan, atau kerusakan flora dan fauna setempat. Oleh karena itu, perencanaan yang matang harus dilakukan untuk menghindari efek merugikan pada lingkungan.
                <br></br>
                Upaya konservasi dalam bentuk edukasi juga perlu dilakukan kepada para pengunjung. Menyediakan informasi tentang pentingnya pelestarian kekar kolom dan bagaimana setiap individu dapat berkontribusi dalam menjaga kelestariannya hingga dapat membantu meningkatkan kesadaran dan kepedulian terhadap keberlangsungan situs geologi kekar kolom untuk menarik daya tarik pengunjung wisata lokal maupun internasional.
                <br></br>
                Oleh karena itu kolaborasi internasional juga dapat menjadi langkah maju dalam upaya konservasi ini. Melibatkan komunitas internasional dan mempertukarkan pengetahuan serta pengalaman dalam melestarikan kekayaan geologi sehingga dapat memberikan manfaat jangka panjang bagi kekar kolom dan wilayah Desa Oluhuta.
            </p>,
        },
        {id:2,
            image: imgkbl,
            title: "Kekar Berlembar",
            p1: <p>
                Kekar lembar adalah fenomena geologi yang terjadi di batuan, terutama batuan beku yang mengakibatkan pembentukan datar serupa dengan lembaran tipis atau lapisan yang mengelupas dari batuan. Dalam buku Jelajah Pusaka Alam dan Budaya mengatakan bahwa terbentuknya  kekar lembar adalah akibat penghilangan beban batuan yang terkena erosi. Penghilangan beban pada kekar ini terjadi akibat :
                <br></br>
                1)	Batuan beku belum benar-benar membeku secara menyeluruh.
                <br></br>
                2)	Tiba-tiba diatasnya terjadi erosi yang dipercepat.
                <br></br>
                3)	Sering terjadi pada sebuah intrusi konkordan (sill) dangkal.
                <br></br>
                Akibat dari proses ini, lapisan-lapisan tipis permukaan batuan secara perlahan terkelupas atau terkelupas dari batuan utama, membentuk bidang datar yang serupa dengan lembaran batuan. Kekar lembar (Sheet jointing) ini dapat membentuk struktur batuan yang menarik dan sering ditemukan di pegunungan granit dan batuan beku lainnya.
                <br></br>
                Sama halnya dengan kekar kolom situs geologi kekar lembar dapat di temui di perairan pesisr pantai Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bone Bolango, Provinsi Gorontalo, Indonesia. Keberadaan kekar lembar berada sekitar jarak 20 meter dengan kekar kolom (columnar joint).
                <br></br>
                Kekar lembar(sheeting joint) yang berada di Desa Oluhuta merupakan fenomena geologi yang menarik dan dapat memberikan wawasan tentang proses-proses geologi yang dapat terjadi di permukaan bumi sehingga memiliki pengaruh dalam studi arkeologi. Namun, Kekar lembar (sheeting joint) yang berlokasi di Desa Oluhuta berpotensi menyebabkan longsor batuan atau patahan dinding tebing sehingga perlunya keamanan infrastruktur di lokasi tersebut agar tidak terjadi potensi longsor batuan atau patahan dinding tebing. Mengingat kekar lembar (sheeting joint) merupakan salah satu tempat objek geowisata Desa Oluhuta. Dengan demikian, dalam pengelolaan geowisata perlu melibatkan dan mengintegrasikan masyarakat lokal dan pemangku kepentingan agar menjadikan kawasan Geopark Oluhta ini menjadi salah satu destinasi wisata minat khusus yang ada di Gorontalo.
                <br></br>
                Masyarakat lokal di Desa Oluhuta mayoritas menggantungkan hidup pada mata pencaharian tradisional, khususnya sebagai nelayan dan petani. Namun, jarak yang jauh dari pusat aktivitas di daerah Kota Gorontalo menyebabkan keterbatasan dalam pendidikan formal dan lapangan pekerjaan yang tersedia di wilayah tersebut. . Hal ini bisa dimaklumi karena masyarakat belum mengenal aspek kebumian yang bisa dikembangkan sebagai obyek wisata. Paradigma yang terjadi di masyarakat tentang situs geologi hanya sebatas eksploitasi mineral yang merugikan kelestarian situs geologi,
                <br></br>
                Diharapkan potensi yang dimiliki oleh Geopark Desa Oluhuta dapat mengubah pola pikir masyarakat, yaitu dengan memanfaatkan sumber daya alam dan memanfaatkannya secara berkelanjutan. Dengan pendekatan yang berfokus pada keindahan alam dan aspek berkelanjutan, diharapkan Geopark Oluhuta dapat menjadi salah satu kawasan wisata unggulan di Provinsi Gorontalo bahkan ke Luar Negeri.
            </p>,
        },
        {id:3,
            image: imglt,
            title: "Lautan Terangkat",
            p1: <p>
                Situs Teras Terumbu adalah Fenomena pengangkatan terumbu karang yang menyebabkan perubahan sedimentasi pasir besi di tanggul pantai yang sebelumnya aktif terendap di zona pantai. Akibatnya, muncul “shoal” atau dangkalan-dangkalan yang masyarakat Desa Setempat menyebutnya dengan Lautan Terangkat.
                <br></br>
                Pada dasarnya, teras terumbu karang memiliki beberapa nama seperti teras laut, terumbu karang terangkat, dan teras pantai.
                <br></br>
                tiga faktor utama penyebab fenomena teras terumbu karang, antara lain:
                <br></br>
                1.	Tumpukan lempeng yang menyebabkan terangkatnya sedimen laut kemudian menimbulkan pengangkatan batuan yang ditumbuhi terumbu karang.
                <br></br>
                2.	Gunung berapi aktif di bawah laut naik ke permukaan dan membentuk pulau yang terdapat lereng terjal yang biasanya terdapat batuan vulkanik yang ditumbuhi karang.
                <br></br>
                3.	Pergerakan yang dihasilkan oleh jalur aktif tektonik secara konvergen menyebabkan pesisir menjadi terangkat atau turun . Bentuk undakan teras pantai merupakan bukti pengangkatan yang diamati melalui perairan, sedangkan untuk pengamatan melalui darat dapat dibuktikan dengan adanya terumbu karang yang membentuk daratan.
                <br></br>
                Beberapa poin di atas merupakan beberapa fenomena geologi yang menyebabkan terbentuknya teras terumbu karang (Lautan Teragkat).
                <br></br>
                Selain proses pembentukannya yang unik, teras terumbu karang di Oluhuta juga memiliki berbagai jenis flora dan fauna yang termasuk dalam aspek daya tariknya. Di sekitar teras terumbu karang (lautan terangkat) banyak dijumpai pohon cemara laut dan pohon Stigi, dan di sepanjang pantai teras terumbu karang (lautan terangkat) terdapat tumbuhan bakau dan beberapa fauna seperti kepiting, kerang, dan berbagai jenis ikan. Selain itu keunikan lain dari teras terumbu karang (lautan terangkat)  di Oluhuta adalah medan yang menantang yang harus ditempuh untuk menuju lokasi utama teras terumbu karang (lautan terangkat) diperkirana memakan waktu sekitar 10-15 menit berjalan melalui beberapa tebing yang panjang untuk sampai ke sana.
            </p>,
        },
    ]
})
//Data Penyewaan
export const DetPen = new Store({
    detpen :[
        {
            id: 1,
            image : snorekling,
            nama : "Alat Snorekling",
            harga_sewa : 100000,
            jumlah_alat : 5,
            detail : "Detail Snorekling",
            pd: <p>
                Temukan keindahan bawah laut dengan alat snorkeling kami yang inovatif. Rasakan sensasi menyelam dalam kedamaian air biru dan jelajahi dunia bawah permukaan dengan kejernihan yang menakjubkan. Nikmati petualangan tanpa batas dengan alat snorkeling terbaik kami, cocok untuk pemula hingga ahli.
                <br></br>
                Dapatkan pengalaman snorkeling tak terlupakan dengan alat berkualitas tinggi kami, yang dirancang untuk kenyamanan, keamanan, dan ketahanan. Segera dapatkan alat snorkeling kami dan buatlah momen indah bersama keluarga dan teman-teman di perairan indah favorit Anda.
            </p>,
            informasi : "Informasi Fasilitas",
            pi: <p>
                1. Snorkel adalah tabung berongga yang dipasang di bagian atas masker selam untuk memungkinkan pengguna bernapas di permukaan air tanpa harus mengangkat kepala. Ini mengurangi kebutuhan untuk mengangkat kepala dari air untuk bernapas, memungkinkan penyelam untuk tetap tenggelam.
                <br></br>
                2. Kaki katak adalah sepatu khusus yang dirancang dengan sirip di bagian bawahnya. Sirip ini membantu penyelam untuk bergerak dengan mudah dan efisien di dalam air, memberikan daya dorong ekstra yang memungkinkan penyelam untuk berenang lebih cepat dan menghemat energi.
                <br></br>
                3. Masker selam adalah perangkat yang menutupi mata, hidung, dan sebagian wajah untuk memungkinkan penyelam melihat dengan jelas di bawah permukaan air. Masker ini biasanya memiliki lensa kaca atau polikarbonat yang tahan terhadap air laut dan memungkinkan pandangan yang jernih.
                <br></br>
                4. Pelampung tubuh ini dirancang untuk dipakai di sekitar tubuh atau dada penyelam. Biasanya berbentuk seperti jaket atau bantalan yang terbuat dari bahan ringan dan tahan air. Pelampung ini memberikan dukungan ekstra untuk membantu penyelam berapung di permukaan air dengan mudah tanpa perlu banyak usaha berenang.
            </p>,
            syarat : "Syarat Dan Ketentuan",
            ps: <p>
                Sebagai syarat dan batasan dalam menyewa alat snorkeling, berikut beberapa poin yang perlu diperhatikan penyewa :
                <br></br>
                1. Penyewa di haruskan untuk menunjukkan identifikasi yang sah dan berlaku sebelum menyewa alat.
                <br></br>
                2. Penyewa harus mematuhi semua aturan keamanan yang ditetapkan oleh atau petugas snorkeling. Ini termasuk pemakaian jaket pelampung dan selalu berenang bersama teman atau pasangan jika snorkeling di laut terbuka.
                <br></br>
                3. Sebelum menyewa, penyewa harus memeriksa kondisi alat snorkeling dan memastikan semuanya berfungsi dengan baik. Jika ada kerusakan atau masalah, laporkan kepada penyewa segera untuk mendapatkan penggantian atau perbaikan.
                <br></br>
                4. Penyewa bertanggung jawab atas alat snorkeling yang disewa selama periode waktu yang ditentukan. Jika ada kerusakan atau kehilangan akibat kelalaian atau penggunaan yang salah, penyewa harus menggantinya sesuai dengan kebijakan penyewa.
                <br></br>
                5. Pastikan penyewa mengembalikan alat snorkeling sesuai dengan waktu yang disepakati. Keterlambatan pengembalian dapat mengakibatkan biaya tambahan atau denda.
                <br></br>
                6. Penyewa diharuskan untuk mengikuti batasan lokasi yang ditentukan untuk snorkeling dan tidak boleh melebihi batas yang ditetapkan.
                <br></br>
                7. Penyewa menyadari risiko yang terkait dengan snorkeling dan mengakui bahwa penyewa bertanggung jawab atas tindakan dan keselamatannya sendiri.
            </p>,
        },
        {
            id: 2,
            image : tenda,
            nama : "Alat Camping",
            harga_sewa : 100000,
            jumlah_alat : 5,
            detail : "Detail Alat Camping",
            pd: <p>
                Mari nikmati petualangan luar biasa di alam bebas dengan sewa peralatan camping kami!
                <br></br>
                Kami menawarkan penyewaan peralatan camping berkualitas yang akan membuat pengalaman berkemah Anda menjadi tak terlupakan. Dengan peralatan camping yang lengkap dan handal, Anda dapat menikmati momen indah bersama keluarga, teman, atau bahkan solo di tengah keindahan alam Desa Oluhuta.
            </p>,
            informasi : "Informasi Fasilitas",
            pi: <p>
                1. Tenda Camping :
                <br></br>
                Tenda kami dirancang untuk memberikan perlindungan dari cuaca buruk dan kenyamanan yang optimal. Kami memiliki berbagai ukuran dan jenis tenda yang sesuai dengan kebutuhan Anda.
                <br></br>
                2. Matras :
                <br></br>
                Menyediakan matras yang empuk dan kokoh juga kami siapkan untuk memastikan tidur yang nyenyak.
                <br></br>
                3. Peralatan Masak :
                <br></br>
                Dapatkan peralatan masak lengkap seperti kompor portable, panci, penggorengan, dan peralatan makan untuk mempermudah Anda memasak hidangan lezat di alam terbuka.
                <br></br>
                4. Kursi Lipat Sederhana :
                <br></br>
                Kursi lipat sederhana adalah pilihan praktis untuk kalian penggemar camping yang mengutamakan mobilitas. Kursi ini ringan, mudah dilipat, dan kompak saat disimpan. Meskipun sederhana, kursi ini memberikan kenyamanan yang cukup untuk duduk dan bersantai di sekitar api unggun.
                <br></br>
                5. Hamock Camping :
                <br></br>
                "Hammock Camping menghadirkan pengalaman tidur yang nyaman dan bebas dari bebatuan atau akar-akar tajam yang bisa mengganggu tidur Anda di tanah. Dengan material kain yang lembut dan nyaman, Anda akan merasa seperti melayang di atas tanah dan tertidur dengan tenang dalam alam bebas.
            </p>,
            syarat : "Syarat Dan Ketentuan",
            ps: <p>
                1. Penyewa diharuskan untuk menunjukkan identifikasi yang sah dan berlaku, seperti kartu identitas atau SIM, sebagai bukti identitas.
                <br></br>
                2. Sebelum menyewa alat camping, penyewa harus melakukan pembayaran penuh.
                <br></br>
                3. Penyewa harus merawat alat dengan baik selama masa sewa. Alat harus digunakan sesuai dengan fungsinya dan tidak boleh disalahgunakan. Jika ada kerusakan atau kehilangan yang disebabkan oleh kelalaian atau kesalahan penyewa, penyewa bertanggung jawab untuk mengganti atau memperbaiki alat sesuai dengan nilai kerusakan.
                <br></br>
                4. Alat harus dikembalikan dalam kondisi yang sama seperti saat disewa, dan bebas dari kerusakan.
                <br></br>
                5. Penyewa harus menghormati lingkungan sekitar.
            </p>,
        },
        {
            id: 3,
            image : kamera,
            nama : "Kamera Bawah Laut",
            harga_sewa : 100000,
            jumlah_alat : 8,
            detail : "Detail Kamera Bawah Laut",
            pd: <p>
                Jelajahi keindahan bawah laut dengan pengalaman fotografi yang menakjubkan melalui layanan penyewaan Camera Bawah Laut kami!
                <br></br>
                Kami menyediakan peralatan kamera bawah laut berkualitas tinggi yang akan membantu Anda menangkap momen indah di bawah permukaan laut. Dengan peralatan kamera bawah laut terbaru dan canggih, Anda dapat mengabadikan keajaiban alam laut, kehidupan laut yang menakjubkan, serta pesona terumbu karang yang luar biasa.
            </p>,
            informasi : "Informasi Fasilitas",
            pi: <p>
                Berikut adalah beberapa fitur dan manfaat dari layanan penyewaan Camera Bawah Laut kami:
                <br></br>
                1. Kamera bawah laut yang kami sediakan dilengkapi dengan teknologi mutakhir, seperti sensor tinggi, kemampuan pengambilan gambar dalam kondisi cahaya rendah, dan kemampuan perekaman video resolusi tinggi. Anda dapat memastikan bahwa setiap momen indah di bawah air akan terekam dengan kualitas yang luar biasa.
                <br></br>
                2. Kamera bawah laut kami didesain khusus untuk bertahan dalam lingkungan air laut. Dilengkapi dengan perangkat pelindung agar tahan terhadap air dan goresan, Anda dapat mengabadikan momen di kedalaman laut tanpa khawatir tentang kerusakan perangkat.
                <br></br>
                Nikmati momen fotografi bawah laut yang tak terlupakan dengan layanan penyewaan Camera Bawah Laut kami
            </p>,
            syarat : "Syarat Dan Ketentuan",
            ps: <p>
                1. Penyewa harus memberikan identifikasi pribadi yang sah, seperti KTP atau SIM.
                <br></br>
                2. Kamera bawah laut hanya boleh digunakan di dalam air atau lingkungan bawah laut yang sesuai dengan spesifikasi dan batasan yang ditentukan oleh penyedia sewa. Penggunaan kamera untuk tujuan lain yang tidak relevan dengan fotografi bawah laut dilarang.
                <br></br>
                3. Penyewa diharapkan untuk memeriksa kondisi kamera bawah laut sebelum digunakan dan melaporkan setiap kerusakan atau masalah yang ada kepada penyedia sewa sebelum meninggalkan tempat penyewaan.
                <br></br>
                4. Penyewa bertanggung jawab untuk menjaga dan merawat kamera bawah laut dengan baik selama masa sewa. Jika ada kerusakan akibat kelalaian atau penggunaan yang salah, penyewa harus menggantinya sesuai dengan kebijakan penyedia sewa.
                <br></br>
                5. Penyewa bertanggung jawab atas kerugian atau kehilangan kamera bawah laut selama masa sewa. Jika kamera hilang atau rusak, penyewa akan bertanggung jawab untuk menggantinya sesuai dengan nilai pasar kamera tersebut.
                <br></br>
                6. Penyewa harus menghormati lingkungan bawah laut dan tidak merusak atau mengganggu kehidupan laut atau terumbu karang saat menggunakan kamera bawah laut.
                <br></br>
                Pastikan untuk membaca dan memahami syarat dan ketentuan penyewaan kamera bawah laut sebelum sewa. Dengan mematuhi ketentuan tersebut, Anda dapat menyewa kamera bawah laut dengan aman dan nyaman untuk menikmati pengalaman fotografi bawah laut yang spektakuler dan tak terlupakan.
            </p>,
        },
        {
            id: 4,
            image : perahu,
            nama : "Perahu Kaca",
            jumlah_alat : 4,
            harga_sewa : 100000,
            detail : "Detail Perahu Kaca",
            pd: <p>
                Selamat datang di pengalaman tak terlupakan mengarungi perairan indah dengan penyewaan perahu kaca kami! Apakah Anda ingin menikmati momen santai di atas air yang tenang atau menyaksikan keajaiban bawah laut tanpa basah kuyup? Perahu kaca kami adalah solusi ideal untuk semua penggemar petualangan!
            </p>,
            informasi : "Keunikan Perahu Kaca Kami :",
            pi: <p>
                1. Jendela Kaca Bening
                <br></br>
                Perahu kaca kami dirancang dengan jendela kaca besar yang melengkung, memberikan Anda pandangan spektakuler ke bawah laut. Lihatlah kehidupan laut yang memukau, seperti terumbu karang yang berwarna-warni dan ikan-ikan eksotis, tanpa perlu menyelam.
                <br></br>
                2. Kenyamanan Tanpa Batas
                <br></br>
                Kenyamanan Anda adalah prioritas kami. Perahu kaca kami dilengkapi dengan kursi empuk dan fasilitas bersantai lainnya. Anda dapat menikmati pemandangan indah sambil duduk santai, tanpa khawatir akan kelelahan atau ketidaknyamanan.
                <br></br>
                3. Pemandu Ahli
                <br></br>
                Nikmati perjalanan yang aman dan informatif dengan pemandu berpengalaman kami. Mereka akan memberikan wawasan menarik tentang lingkungan laut dan tempat-tempat menarik di sekitarnya.
                <br></br>
                4. Rute Wisata yang Menarik
                <br></br>
                Kami menawarkan beragam rute wisata yang menarik, mengelilingi pesisir pantai yang memesona atau menyusuri danau yang tenang. Setiap rute dipilih dengan hati-hati untuk memberikan pengalaman paling mengesankan bagi Anda.
            </p>,
            syarat : "Informasi dan Reservasi:",
            ps: <p>
                Jangan lewatkan kesempatan ini untuk menjelajahi keindahan alam dengan cara yang unik dan menarik. Untuk informasi lebih lanjut atau untuk melakukan reservasi, hubungi kami di Kontak di bawah ini
            </p>,
        }
    ]
})


// Data Kuliner

export const Kul = new Store({
    kul : [
        {id: "Makanan", title : "Makanan", image: imgmakanan},
        {id: "Minuman", title : "Minuman", image: imgminumam},
    ]
})

export const Minuman1 =new Store({
    minuman :[
        {id: 1, name: 'Pop Ice', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 2, name: 'Nasi Kuning Ayam + Sagela', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 3, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 4, name: 'Nasi Kuning', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 5, name: 'Nasi Kuning Ayam', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 6, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 7, name: 'Nasi Kuning', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 8, name: 'Nasi Kuning Ayam', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 9, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 10, name: 'Nasi Kuning', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 11, name: 'Nasi Kuning Ayam', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 12, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 13, name: 'Nasi Kuning', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 14, name: 'Nasi Kuning Ayam', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 15, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 16, name: 'Nasi Kuning', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 17, name: 'Nasi Kuning Ayam', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        {id: 18, name: 'Pisang Goreng', image: imgminumam, harga: 10000, nama_warung : "Warung Random" },
        ]
    })
export const Makanan1 =new Store({
    makanan :[
        {id: 1, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 2, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 3, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 4, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 5, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 6, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 7, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 8, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 9, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 10, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 11, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 12, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 13, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 14, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 15, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 16, name: 'Nasi Kuning', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 17, name: 'Nasi Kuning Ayam', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        {id: 18, name: 'Pisang Goreng', image: imgmakanan, harga: 10000, nama_warung : "Warung Random" },
        ]
    })

