// --- PLACEHOLDERS TO BE UPDATED ---
// 1. Google Sheets Submission URL (Ganti dengan URL submission Google Form Anda)
const SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbwlN1AJbLeVOkFmmTgPKU4aPmDfzqHpK5cXwIrWBjFnLgyN987U3vs02RO4tiAg9k7u/exec';
// Pastikan Anda juga mengganti ENTRY_ID_NAME, ENTRY_ID_SCORE, ENTRY_ID_TIME
const ENTRY_ID_NAME = '1951869862'; 
const ENTRY_ID_SCORE = '1466942721';
const ENTRY_ID_TIME = '466789177';
// **********************************

// 2. Question Data: Jawaban Benar dan Penjelasan HARUS diverifikasi dan dilengkapi
const quizQuestions = [
    // --- Q1 & Q2 CONTEXT: Pameran Sunting ---
    {
        qNum: 1,
        type: 'mc',
        topic: 'Teks berikut untuk menjawab soal nomor 1 dan 2. Museum Nasional Indonesia menggelar pameran Sunting: Jejak Perempuan Indonesia Penggerak Perubahan hingga Juli 2025. Pameran ini dibuka bertepatan dengan peringatan hari Kartini. Pameran Sunting terbagi menjadi tiga zona utama, yaitu zona 1 menampilkan 14 tokoh perempuan pemimpin dan pejuang, zona 2 menampilkan 29 tokoh yang berperan dalam dinamika sosial politik Indonesia, serta zona 3 berisi 53 tokoh perempuan yang berjasa dalam bidang pendidikan, seni, kesehatan, diplomasi, dan teknologi. Sebanyak tujuh belas organisasi perempuan juga ditampilkan sebagai bentuk perjuangan kolektif perempuan Indonesia. Selain itu, pameran menyuguhkan artefak lintas budaya dan lintas waktu yang mencakup arsip, karya sastra, karya seni, dan dokumentasi mengenai rekam jejak perjuangan perempuan Indonesia.',
        text: 'Pameran Sunting menampilkan tokoh-tokoh perempuan dari berbagai latar belakang dan peran aktif perempuan dalam sejarah Indonesia. Bagaimana keterkaitan perjuangan perempuan pada masa lalu dengan dinamika sosial budaya perempuan indonesia saat ini?',
        options: [
            'A. Perjuangan perempuan masa lalu menjadi landasan bagi peran aktif perempuan di berbagai bidang saat ini.',
            'B. Perempuan masa kini aktif menyuarakan hak-haknya karena peran laki-laki dalam masyarakat mulai melemah.',
            'C. Semangat perjuangan tokoh perempuan dahulu mendorong berkembangnya tren perempuan mandiri masa kini.',
            'D. Perjuangan perempuan masa kini lebih modern dan tidak memiliki hubungan dengan sejarah perjuangan perempuan.',
            'E. Perjuangan perempuan masa kini lebih fokus pada kegiatan budaya dan kurang berkontribusi terhadap perubahan politik.'
        ],
        answer: 'A', 
        explanation: 'Perjuangan tokoh perempuan di masa lalu meletakkan fondasi kuat bagi perempuan Indonesia untuk berperan aktif di berbagai sektor kehidupan saat ini, menunjukkan adanya kebertanjutan sejarah.' 
    },
      {
        qNum: 2,
        type: 'tf',
        topic: 'Lanjutan konteks soal 1: Museum Nasional Indonesia menggelar pameran Sunting.',
        text: 'Teks di atas mengandung konsep berpikir sejarah. Pilihlah Benar atau Salah pada pernyataan berikut yang menunjukan konsep berfikir sejarah',
        statements: [
            'Pameran Sunting tidak disusun secara kronologis.',
            'Pameran Sunting menunjukkan kebertanjutan peran perempuan dalam berbagai bidang',
            'Peristiwa yang dialami oleh tokoh-tokoh perempuan dalam pameran memiliki pola yang sama.'
        ],
        answers: ['Salah', 'Benar', 'Salah'], 
        explanation: 'Konsep berpikir sejarah mencakup kesinambungan (kebertanjutan) peran perempuan lintas waktu (pernyataan 2). Pernyataan 1 tidak dapat dipastikan hanya dari teks. Pernyataan 3 tidak tepat karena tokoh berbeda memiliki pola yang beragam.'
    },
    
    // --- Q3 CONTEXT: Tanam Paksa vs Swasembada ---
    {
        qNum: 3,
        type: 'ms',
        topic: 'Pada masa kolonial Belanda, rakyat diwajibkan menanam tanaman ekspor, seperti kopi, tebu, dan nila melalui sistem tanam paksa. Setelah Indonesia merdeka, kebijakan pertanian mengalami perubahan besar. Pemerintah mulai menerapkan kebijakan yang lebih berorientasi pada kesejahteraan petani melalui program swasembada pangan dan koperasi pertanian.',
        text: 'Manakah pernyataan yang menunjukkan perubahan kebijakan pertanian dari masa kolonial ke masa kemerdekaan? Jawaban benar lebih dari satu.',
        options: [
            'Penerapan koperasi pertanian untuk menggantikan sistem tanam paksa.',
            'Perubahan kebijakan pertanian dari tanam paksa ke swasembada pangan.',
            'Pergeseran fokus kebijakan dari kepentingan kolonial ke kepentingan nasional.',
            'Penggunaan teknologi modern dalam pertanian sejak masa penjajahan Belanda.',
            'Penggunaan lahan pertanian rakyat dari masa kolonial hingga masa kemerdekaan.'
        ],
        answers: [true, true, true, false, false], 
        explanation: 'Perubahan utama adalah dari eksploitasi (Tanam Paksa) ke kesejahteraan rakyat (Koperasi, Swasembada) dan pergeseran fokus dari kolonial ke nasional.'
    },

    // --- Q4 & Q5 CONTEXT: UU Agraria 1870 & Kopi Pasuruan ---
    {
        qNum: 4,
        type: 'mc',
        topic: 'Teks berikut untuk menjawab soal nomor 4 dan 5. Pada masa pemerintahan kolonial Belanda, Keresidenan Pasuruan menjadi salah satu wilayah budi daya tanaman kopi yang berkembang pesat. Berdasarkan data dalam buku Village Java Under the Cultivation System yang diambil dari Kultuur Verslag 1834, terdapat sekitar 17.775 petani kopi di wilayah Keresidenan Pasuruan dengan jumlah pohon kopi mencapai 10.124.145. Jumlah tersebut terus meningkat dari tahun ke tahun sejak 1836 hingga 1844. Memasuki 1870-an terbit Undang-Undang Agraria 1870 yang mengatur pemberian hak sewa atas tanah yang belum digarap kepada pengusaha swasta. Dengan terbitnya peraturan ini banyak pengusaha asing yang mendirikan perkebunan dan ikut meramaikan pasar ekonomi. Selain itu, Undang-Undang Agraria mendorong pembukaan lahan perkebunan di daerah pergunungan.',
        text: 'Kamu ingin meneliti lebih dalam tentang dampak diterbitkannya Undang-Undang Agraria 1870 terhadap perkebunan kopi di Keresidenan Pasuruan. Manakah langkah paling tepat untuk mendukung penelitianmu?',
        options: [
            'A. Menguji sampel tanah dari lahan bekas perkebunan kopi di Pasuruan.',
            'B. Menggunakan peta kontemporer untuk menunjukkan lokasi perdagangan kopi.',
            'C. Menyebarkan survei daring kepada masyarakat Pasuruan mengenai sejarah kopi.',
            'D. Melakukan observasi langsung ke kebun kopi saat ini dan mewawancarai petani lokal.',
            'E. Membandingkan laporan kolonial dan arsip kepemilikan tanah sebelum dan sesudah 1870.'
        ],
        answer: 'E', 
        explanation: 'Untuk meneliti dampak UU tahun 1870, sumber paling tepat adalah arsip dan laporan dari masa sebelum dan sesudah 1870 untuk perbandingan (metode historis).'
    },
    {
        qNum: 5,
        type: 'ms',
        topic: 'Lanjutan konteks soal 4: UU Agraria 1870 dan Keresidenan Pasuruan.',
        text: 'Berdasarkan teks, manakah pernyataan yang menunjukkan contoh sumber primer dalam penulisan sejarah? Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
        options: [
            'Data peningkatan jumlah pohon kopi antara 1836-1844.',
            'Hasil wawancara tahun 2020 dengan keturunan petani kopi di Pasuruan.',
            'Buku sejarah modern yang mengulas sistem tanam paksa di Jawa Timur.',
            'Laporan Kultuur Verslag 1834 tentang jumlah petani dan pohon kopi di Pasuruan.',
            'Naskah Undang-Undang Agraria 1870 yang diterbitkan oleh pemerintah kolonial Belanda.'
        ],
        answers: [true, false, false, true, true], 
        explanation: 'Sumber primer adalah dokumen asli atau kesaksian langsung dari masa peristiwa, yaitu data periode 1836-1844, Kultuur Verslag 1834, dan naskah UU Agraria 1870.'
    },

    // --- Q6 CONTEXT: Fungsi Sumber Sejarah ---
    {
        qNum: 6,
        type: 'tf',
        topic: 'Alya sedang menulis karya tulis sejarah tentang perjuangan rakyat dalam peristiwa Bandung Lautan Api. la mengumpulkan informasi dari berbagai sumber, seperti arsip surat perintah militer, foto dokumentasi peristiwa, serta catatan kesaksian warga yang masih hidup.',
        text: 'Pilihlah Tepat atau Tidak Tepat untuk setiap pernyataan yang menunjukkan fungsi sumber-sumber tersebut!',
        statements: [
            'Memperkuat opini pribadi penulis sejarah.',
            'Mengurangi keragaman perspektif terhadap peristiwa sejarah.',
            'Memberikan bukti dan data yang objektif terhadap peristiwa sejarah.'
        ],
        answers: ['Tidak Tepat', 'Tidak Tepat', 'Tepat'], 
        explanation: 'Fungsi sumber sejarah adalah untuk memberikan bukti objektif (tepat). Sumber tidak boleh digunakan untuk memperkuat opini pribadi atau mengurangi keragaman perspektif (tidak tepat).'
    },

    // --- Q7 & Q8 CONTEXT: Penyebaran Hindu-Buddha & Perdagangan ---
    {
        qNum: 7,
        type: 'ms',
        topic: 'Teks berikut untuk menjawab soal nomor 7 dan 8. Kedatangan agama Hindu dan Buddha merupakan salah satu babak penting dalam sejarah awal Nusantara. Perdagangan maritim dan perkembangan kerajaan Hindu-Buddha sangat berhubungan erat. Kerajaan seperti Kutai, Tarumanegara, dan Sriwijaya berkembang di lokasi-lokasi strategis, menguasai pelabuhan, memungut pajak, dan menggunakan kekayaan untuk membangun tempat peribadatan, membiayai biksu/brahmana, serta mendukung pengembangan seni dan sastra keagamaan. Perdagangan maritim menjadi fondasi bagi pusat-pusat kebudayaan Hindu-Buddha di Asia Tenggara.',
        text: 'Apa peran jalur perdagangan bagi penyebaran agama Hindu-Buddha di Nusantara? Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
        options: [
            'Jalur perdagangan maritim menjadi media bagi perpindahan individu, seperti pedagang, biksu, dan cendekiawan.',
            'Komoditas dagang seperti rempah-rempah secara langsung digunakan sebagai alat tukar untuk mengajarkan ajaran agama.',
            'Interaksi di pelabuhan pelabuhan memfasilitasi pertukaran budaya dan ideologi di antara berbagai bangsa.',
            'Para pedagang mendirikan candi dan wihara di setiap pelabuhan sebagai pusat penyebaran agama secara massal.',
            'Jalur perdagangan mempermudah akses bagi masyarakat Nusantara untuk belajar langsung ke India dan kembali menyebarkannya.'
        ],
        answers: [true, false, true, false, false], 
        explanation: 'Jalur perdagangan memfasilitasi pertukaran individu (pedagang, biksu) dan pertukaran budaya/ideologi di pelabuhan (sesuai teks).'
    },
    {
        qNum: 8,
        type: 'tf',
        topic: 'Lanjutan konteks soal 7: Penyebaran Hindu-Buddha dan Perdagangan Maritim.',
        text: 'Pilihlah Benar atau Salah untuk setiap pernyataan berikut sesuai dengan informasi pada teks!',
        statements: [
            'Perdagangan hanya membawa keuntungan ekonomi tanpa memperkaya khazanah budaya masyarakat Nusantara.',
            'Jalur rempah memainkan peran penting dalam menarik para pelaut dan pedagang dari India sehingga memfasilitasi masuknya pengaruh Hindu-Buddha.',
            'Teori Brahmana dan Waisya merupakan dua dari beberapa teori yang menjelaskan bahwa agama Hindu-Buddha masuk ke Nusantara melalui jalur militer.'
        ],
        answers: ['Salah', 'Benar', 'Salah'], 
        explanation: 'Perdagangan juga memperkaya budaya (salah). Jalur rempah/maritim penting (benar). Teori Brahmana dan Waisya tidak menjelaskan masuknya agama melalui jalur militer (salah).'
    },

    // --- Q9 CONTEXT: Peran Raja Majapahit ---
    {
        qNum: 9,
        type: 'mc',
        topic: 'Soal ini merujuk pada kepercayaan konsep Dewa-Raja dalam kebudayaan Hindu-Buddha di Nusantara.',
        text: 'Perhatikan gambar berikut! (Gambar Dewa Wisnu menunggangi burung Garuda) Manakah peran raja dalam pemerintahan Majapahit berdasarkan gambar?',
        options: [
            'A. Pemimpin agama', 'B. Panglima perang', 'C. Perwujudan dewa', 'D. Penjaga alam semesta', 'E. Pemimpin seluruh rakyat'
        ],
        answer: 'C', 
        explanation: 'Raja yang digambarkan menyerupai Dewa Wisnu (seperti pada Candi Penataran) menunjukkan konsep Dewa-Raja, di mana raja dianggap sebagai perwujudan dewa di bumi.'
    },

    // --- Q10 CONTEXT: Penyebaran Islam Melalui Perkawinan ---
    {
        qNum: 10,
        type: 'mc',
        topic: 'Soal ini merujuk pada salah satu saluran penyebaran Islam, yaitu perkawinan, yang sering terjadi antara pedagang Muslim dan bangsawan lokal.',
        text: 'Pada awal perkembangan islam di Nusantara, para pedagang muslim Timur Tengah melakukan perkawinan dengan bangsawan lokal. Manakah pernyataan yang menunjukkan dampak perkawinan tersebut?',
        options: [
            'A. Para penguasa lokal mendapatkan keuntungan ekonomis', 
            'B. Pedagang muslim berpotensi menjadi pejabat tinggi kerajaan.', 
            'C. Terjadinya konsesi dagang yang merugikan para penguasa lokal.', 
            'D. Banyak bangsawan lokal melakukan migrasi ke negara-negara Timur Tengah,', 
            'E. Banyak keluarga kerajaan yang masuk islam dan melahirkan generasi muslim baru.'
        ],
        answer: 'E', 
        explanation: 'Saluran perkawinan bertujuan memperluas pengaruh Islam secara damai dan politis, sehingga berdampak pada lahirnya generasi muslim baru dari kalangan bangsawan.'
    },

    // --- Q11 & Q12 CONTEXT: Kerajaan Samudera Pasai ---
    {
        qNum: 11,
        type: 'tf',
        topic: 'Teks berikut untuk menjawab soal nomor 11 dan 12. Kerajaan Samudera Pasai yang terletak di pesisir utara Pulau Sumatra mengukir kejayaan Islam pada abad XIII-XV Masehi. Kejayaan ini didukung tiga pilar: jaringan maritim, sistem pemerintahan terstruktur, dan penyebaran Islam. Sultan Malik as-Saleh sebagai pendiri berperan penting mengorganisasi pemerintahan dan memperkenalkan Islam. Samudera Pasai memiliki birokrasi efektif untuk mengatur perdagangan, perpajakan, dan urusan pemerintahan. Sistem hukum Islam (syariat) diterapkan dalam kehidupan sehari-hari, termasuk transaksi perdagangan dan penyelesaian sengketa.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut berdasar informasi pada teks!',
        statements: [
            'Letak geografis yang strategis di jalur perdagangan antara Timur dan Barat menjadi salah satu faktor kunci kejayaan maritim Kerajaan Samudera Pasai.',
            'Peran Sultan Malik as-Saleh merupakan satu-satunya faktor di balik seluruh kejayaan Samudera Pasai dari ekonomi hingga penyebaran agama.',
            'Hukum syariat yang diterapkan di Samudera Pasai tidak hanya terbatas pada urusan agama, tetapi juga mengatur aspek-aspek kehidupan lain seperti perdagangan dan penyelesaian sengketa.'
        ],
        answers: ['Benar', 'Salah', 'Benar'], 
        explanation: 'Teks menyebut tiga pilar, sehingga Sultan bukan satu-satunya faktor (salah). Teks secara eksplisit menyebut syariat mengatur perdagangan dan sengketa (benar).'
    },
    {
        qNum: 12,
        type: 'ms',
        topic: 'Lanjutan konteks soal 11: Tiga Pilar Kejayaan Samudera Pasai.',
        text: 'Keterkaitan antara tiga pilar kejayaan Kerajaan Samudera Pasai begitu kuat sehingga satu pilar akan memengaruhi pilar lainnya. Manakah pernyataan yang menunjukkan hubungan timbal balik antara aspek jaringan maritim yang luas dan aktivitas penyebaran agama Islam? Jawaban benar lebih dari satu.',
        options: [
            'Jaringan maritim yang luas menyediakan jalur bagi para ulama dan pedagang muslim untuk menyebarkan ajaran Islam.',
            'Kejayaan maritim mendorong Samudera Pasai untuk mengirim ekspedisi militer guna menyebarkan Islam ke wilayah lain.',
            'Ajaran Islam yang diterapkan di Samudera Pasai memberikan kode etik dan kepercayaan yang menarik lebih banyak pedagang asing.',
            'Penyebaran Islam menghasilkan banyak tenaga kerja ahli di bidang maritim sehingga memperkuat jaringan perdagangan.',
            'Sultan memanfaatkan pajak dari perdagangan maritim untuk membiayai pembangunan masjid di seluruh Sumatra.'
        ],
        answers: [true, false, true, false, true], 
        explanation: 'Jalur maritim memfasilitasi ulama (benar). Etika Islam menarik pedagang (benar). Pajak dari maritim membiayai kegiatan keagamaan (benar, meski teks menyebut pembangunan tempat peribadatan secara umum).'
    },

    // --- Q13 CONTEXT: Dampak Kolonialisme (General) ---
    {
        qNum: 13,
        type: 'tf',
        topic: 'Kedatangan bangsa Erupa ke Nusantara berdampak pada politik, sosial, dan budaya. Monopoli perdagangan, tanam paksa mengubah struktur agraria. Dalam bidang sosial, kasta dipertahankan, pendidikan dibatasi. Namun, sistem birokrasi, infrastruktur, dan pengenalan teknologi modern menjadi warisan kolonial yang berdampak jangka panjang.',
        text: 'Pilihlah Benar atau Salah pada pernyataan terkait dampak kolonialisme bangsa Eropa terhadap Nusantara!',
        statements: [
            'Kebijakan politik etis sepenuhnya berhasil meningkatkan kesejahteraan bumiputra.',
            'Pendidikan masa kolonial dirancang untuk mendukung munculnya kesadaran nasional rakyat.',
            'Struktur birokrasi modern yang diperkenalkan Belanda berdampak pada sistem administrasi masa kini.'
        ],
        answers: ['Salah', 'Salah', 'Benar'], 
        explanation: 'Politik Etis tidak sepenuhnya berhasil (salah). Pendidikan kolonial dirancang untuk kepentingan kolonial (salah). Struktur birokrasi modern adalah warisan kolonial yang berdampak hingga kini (benar).'
    },

    // --- Q14 & Q15 CONTEXT: Motivasi 3G ---
    {
        qNum: 14,
        type: 'ms',
        topic: 'Teks berikut untuk menjawab soal nomor 14 dan 15. Pada abad ke XV dan XVI bangsa Eropa mulai menjelajah dunia ke Nusantara. Kedatangan mereka dilatarbelakangi oleh semangat 3G (Gold, Glory, dan Gospel). Motivasi ini mendorong perubahan besar dalam struktur sosial, sistem ekonomi kolonial, intervensi politik lokal, dan perubahan budaya di Nusantara.',
        text: 'Berdasarkan motivasi 3G bangsa Eropa, manakah bentuk keterkaitan antara motivasi dengan tindakan bangsa Eropa di Nusantara? Jawaban benar lebih dari satu.',
        options: [
            'Mendirikan sekolah Eropa untuk menyebarkan nilai-nilai Barat secara massal.',
            'Memaksa penduduk lokal untuk menganut agama Katolik melalui misi zending.',
            'Menerapkan sistem pajak progresif oleh VOC untuk mendorong kesejahteraan ekonomi rakyat.',
            'Mengangkat raja boneka dan pengaruh terhadap suksesi kerajaan lokal untuk memperluas dominasi.',
            'Mendirikan benteng dagang dan markas militer di wilayah strategis untuk melindungi jalur perdagangan.'
        ],
        answers: [false, true, false, true, true], 
        explanation: 'Memaksa agama Katolik adalah Gospel (benar). Mengangkat raja boneka adalah Glory (benar). Mendirikan benteng dagang adalah Gold/Glory (benar).'
    },
    {
        qNum: 15,
        type: 'tf',
        topic: 'Lanjutan konteks soal 14: Motivasi 3G dan Dampak Kolonialisme.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut terkait dampak kedatangan bangsa Eropa terhadap dinamika sosial, politik, ekonomi, dan budaya di Nusantara!',
        statements: [
            'Penyebaran agama oleh bangsa Eropa mendorong terjadinya konflik budaya dengan masyarakat lokal.',
            'Dominasi politik bangsa Eropa menyebabkan lahirnya pemerintahan raja boneka di beberapa kerajaan.',
            'Campur tangan kolonial di bidang budaya memperkuat identitas budaya lokal secara menyeluruh.'
        ],
        answers: ['Benar', 'Benar', 'Salah'], 
        explanation: 'Intervensi budaya sering memicu konflik (benar). Intervensi politik melahirkan raja boneka (benar). Budaya lokal terpinggirkan, tidak diperkuat (salah).'
    },

    // --- Q16 CONTEXT: Sistem Tanam Paksa ---
    {
        qNum: 16,
        type: 'mc',
        topic: 'Sistem tanam paksa (cultuurstelsel) diberlakukan Belanda pada 1830 untuk mengisi kas negara. Rakyat diwajibkan menanam komoditas ekspor. Dalam praktiknya terjadi penyimpangan, menyebabkan kelaparan dan penderitaan luas, meskipun berhasil bagi keuangan Belanda.',
        text: 'Kebijakan alternatif apa yang tepat untuk menggantikan tanam paksa agar tujuan keuangan pemerintah tetap tercapai tanpa menimbulkan penderitaan rakyat?',
        options: [
            'A. Mengatur kuota hasil bumi dari rakyat, tetapi memberi kebebasan jenis tanaman yang ditanam.',
            'B. Mewajibkan petani menanam komoditas ekspor di tanah kosong yang belum dikelola secara intensif.',
            'C. Memusatkan tanam paksa di wilayah subur dan menghindari penerapannya di daerah rawan bencana.',
            'D. Mengganti kewajiban menanam komoditas dengan kerja wajib secara bergilir di pabrik milik pemerintah.',
            'E. Memberlakukan sistem kontrak sukarela dengan insentif harga tetap bagi petani yang menanam tanaman ekspor.'
        ],
        answer: 'E', 
        explanation: 'Sistem kontrak sukarela dengan insentif (bukan paksaan) adalah pendekatan liberal yang lebih adil dan menggantikan sistem eksploitasi.'
    },

    // --- Q17 CONTEXT: Dampak Politik Etis ---
    {
        qNum: 17,
        type: 'mc',
        topic: 'Pada awal abad XX Belanda menerapkan politik etis (irigasi, edukasi, transmigrasi). Tujuan awalnya meningkatkan kesejahteraan demi kepentingan kolonial. Namun, program edukasi melahirkan golongan intelektual bumiputra yang mendirikan organisasi modern (Budi Utomo, Sarekat Islam, Indische Partij) yang menjadi tonggak awal pergerakan nasional.',
        text: 'Manakah simpulan yang tepat berdasarkan teks?',
        options: [
            'A. Politik etis gagal meningkatkan kesejahteraan rakyat.',
            'B. Politik etis menurunkan kesadaran politik bangsa Indonesia.',
            'C. Politik etis menghapus seluruh kebijakan diskriminatif kolonial.',
            'D. Politik etis melahirkan kaum terpelajar yang menjadi pelopor pergerakan nasional.',
            'E. Politik etis berhasil mempercepat kemerdekaan Indonesia melalui program pendidikan.'
        ],
        answer: 'D', 
        explanation: 'Teks secara eksplisit menyatakan program edukasi melahirkan golongan intelektual yang menjadi tonggak pergerakan nasional.'
    },

    // --- Q18 & Q19 CONTEXT: Perlawanan Intelektual (Medan Prijaji) ---
    {
        qNum: 18,
        type: 'mc',
        topic: 'Teks berikut untuk menjawab soal nomor 18 dan 19. Pada awal abad XX, perlawanan bergeser dari fisik ke intelektual. Tirto Adhi Soerjo melalui surat kabar Medan Prijaji (terbit 1907) menjadi media perjuangan politik dan sosial untuk menyuarakan kritik terhadap ketidakadilan kolonial. Tirto mendirikan perusahaan pers independen yang dikelola tanpa campur tangan pemerintah. Perlawanan melalui tulisan membuktikan bahwa media massa mampu membangkitkan kesadaran rakyat terhadap kolonialisme.',
        text: 'Apa bentuk perlawanan bangsa Indonesia terhadap kolonialisme Eropa yang tecermin dari aktivitas Tirto Adhi Soerjo melalui surat kabar Medan Prijaji?',
        options: [
            'A. Pemberontakan bersenjata melawan tentara kolonial.',
            'B. Gerakan sabotase ekonomi kolonial di kota-kota besar.',
            'C. Perlawanan diplomatik melalui perwakilan di parlemen Belanda.',
            'D. Perlawanan melalui media massa untuk membangun kesadaran nasional.',
            'E. Kerja sama dengan pengusaha bumiputra untuk melemahkan dominasi Belanda.'
        ],
        answer: 'D', 
        explanation: 'Medan Prijaji adalah surat kabar, media perjuangan utama Tirto adalah pers/tulisan untuk membangkitkan kesadaran rakyat.'
    },
    {
        qNum: 19,
        type: 'ms',
        topic: 'Lanjutan konteks soal 18: Perlawanan Intelektual melalui Medan Prijaji.',
        text: 'Manakah dari pernyataan berikut yang mencerminkan nilai-nilai perjuangan rakyat Indonesia pada masa colonial, sebagaimana cermin dalam kiprah Medan Prijaji? Jawaban lebih dari satu',
        options: [
            'Pers menjadi atat penting dalam menyuarakan keadilan sosial dan kemerdekaan.',
            'kepatuhan terhadap penguasa kolonial merupakan bentuk perjuangan yang bijaksana.',
            'Kritik terhadan ketidakadilan sosial dihindari untuk menjaga stabilitas pemerintahan kolonial',
            'Perlawanan dapat dilakukan melalui pendidikan dan tulisan untuk menggugah kesadaran rakyat',
            'Rasa nasionalisme dapat tumbuh melalui penyampaian ide-ide kemerdekaan dalam media cetak'
        ],
        answers: [true, false, false, true, true], 
        explanation: 'Medan Prijaji menyuarakan kritik (benar), melawan ketidakadilan (salah jika dihindari), dan membangkitkan kesadaran melalui tulisan (benar).'
    },

    // --- Q20 & Q21 CONTEXT: Indische Partij ---
    {
        qNum: 20,
        type: 'ms',
        topic: 'Teks berikut untuk menjawab soal nomor 20 dan 21. Indische Partij (didirikan oleh Douwes Dekker, Cipto Mangunkusumo, dan Ki Hajar Dewantara) merupakan organisasi politik yang berperan besar dalam perjuangan kemerdekaan. IP menolak kerja sama dengan Belanda (nonkooperatif) dan mendorong rakyat Indonesia untuk berjuang secara mandiri. Tujuannya adalah membangun kesetaraan antara berbagai kelompok masyarakat, terutama menghadapi diskriminasi antara keturunan Belanda dan kaum bumiputra. IP mendapat dukungan dari organisasi lain, seperti Insulinde, Sarekat Islam, dan Budi Utomo. IP juga menyuarakan penolakan terhadap ketidakadilan kolonial melalui poster untuk menyadarkan buruh.',
        text: 'Berdasarkan teks, manakah pernyataan yang menunjukkan strategi perjuangan Indische Partij dalam melawan kolonialisme? Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
        options: [
            'Menjadikan pendidikan Barat sebagai prioritas perjuangan dengan mengesampingkan isu politik,',
            'Menolak ketergantungan pada kekuatan asing dan mendorong perjuangan secara mandiri,',
            'Mengedepankan kerja sama dengan pemerintah Belanda agar mendapat pengakuan politik.',
            'Membangun kesadaran rakyat melalui tulisan, pidato, dan media visual seperti poster.',
            'Menggalang dukungan dari organisasi lain untuk memperluas basis perjuangan.'
        ],
        answers: [false, true, false, true, true], 
        explanation: 'IP bersifat nonkooperatif (menolak kerja sama), mendorong perjuangan mandiri (benar), dan menggunakan tulisan/poster (benar), serta menggalang dukungan organisasi lain (benar).'
    },
    {
        qNum: 21,
        type: 'tf',
        topic: 'Lanjutan konteks soal 20: Tujuan dan Strategi Indische Partij.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut terkait tujuan berdirinya Indische Partij!',
        statements: [
            'Mempersiapkan pemerintahan kolonial agar lebih demokratis',
            'Memperkuat hubungan diplomatik dengan pemerintah Belanda.',
            'Membangun kesetaraan antara keturunan Belanda dan kaum bumiputra.'
        ],
        answers: ['Salah', 'Salah', 'Benar'], 
        explanation: 'Tujuan utama IP adalah kesetaraan (benar), bukan memperkuat Belanda atau demokratisasi pemerintahan kolonial.'
    },

    // --- Q22 CONTEXT: Berakhirnya Kekuasaan Belanda & Jepang ---
    {
        qNum: 22,
        type: 'tf',
        topic: 'Masuknya Jepang ke Indonesia menandai berakhirnya era kolonialisme Belanda. Diawali Serangan Jepang ke Pearl Harbor (7 Des 1941) dan pendaratan di Indonesia awal 1942. Titik balik kekalahan Belanda adalah direbutnya Pangkalan Udara Kalijati, Subang. Belanda akhirnya menyerah tanpa syarat melalui penandatanganan Kapitulasi Kalijati pada 8 Maret 1942.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut berkaitan dengan berakhirnya kekuasaan Belanda dan masuknya Jepang di indonesia.',
        statements: [
            'Letnan Jenderal Hitashi Imamura menjadi tokoh penting dalam proses penyerahan kekuasaan.',
            'Masuknya Jepang di Indonesia diawali dengan serangan ke Pearl Harbor, Hawail',
            'Belanda menyerah kepada Jepang melalui perjanjian Renville'
        ],
        answers: ['Benar', 'Benar', 'Salah'], 
        explanation: 'Hitashi Imamura menandatangani Kapitulasi Kalijati (benar). Pearl Harbor adalah titik awal keterlibatan Jepang (benar). Penyerahan Belanda terjadi di Kalijati, bukan Renville (salah).'
    },

    // --- Q23 & Q24 CONTEXT: Pendudukan Jepang ---
    {
        qNum: 23,
        type: 'mc',
        topic: 'Teks berikut untuk menjawab soal nomor 23 dan 24. Masa pendudukan Jepang (1942-1945) membawa perubahan besar. Jepang yang datang dengan slogan "Asia untuk Asia" menerapkan kebijakan yang menguntungkan militer Jepang. Dalam bidang ekonomi, Jepang mengeksploitasi sumber daya alam untuk mendukung perang dan menerapkan kerja paksa (romusa). Di bidang sosial politik, Jepang membentuk organisasi seperti Peta dan Seinendan. Pendidikan diubah untuk mendukung ideologi militer Jepang. Kebijakan ini secara tidak langsung menumbuhkan kesadaran nasional.',
        text: 'Manakah pernyataan berikut yang mencerminkan tujuan utama Jepang dalam penerapan kebijakan ekonomi selama pendudukannya di Indonesia?',
        options: [
            'A. Mendorong pembangunan industri ringan lokal.', 
            'B. Meningkatkan ekonomi lokal tanpa kampanye militer.', 
            'C. Mendukung swasembada pangan bagi rakyat Indonesia.',
            'D. Menyediakan kompensasi penuh kepada petani romusa.', 
            'E. Mengeksploitasi sumber daya alam untuk kebutuhan perang Jepang.'
        ],
        answer: 'E', 
        explanation: 'Tujuan utama ekonomi Jepang adalah eksploitasi sumber daya alam Indonesia untuk membiayai dan mendukung perang mereka di Asia Pasifik.'
    },
    {
        qNum: 24,
        type: 'ms',
        topic: 'Lanjutan konteks soal 23: Dampak Pendudukan Jepang.',
        text: 'Manakah dari pernyataan berikut yang termasuk dampak pendudukan Jepang di Indonesia? Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
        options: [
            'Petani dan buruh mengalami kesejahteraan secara merata.',
            'Rakyat Indonesia banyak yang menjadi korban kerja paksa dan kelaparan.',
            'Penduduk diberi hak politik penuh dan bebas mengkritik pemerintah pendudukan Jepang.',
            'Pemerintah Jepang mulai mengajarkan bahasa Jepang dan menggunakannya sebagai bahasa pengantar.',
            'Pemerintah Jepang membentuk struktur militer lokal (Peta dan Seinendan) yang kelak menjadi cikal bakal TNI.'
        ],
        answers: [false, true, false, true, true], 
        explanation: 'Romusa menyebabkan penderitaan (benar). Jepang mengajarkan bahasa Jepang (benar). Pembentukan Peta/Seinendan menjadi cikal bakal TNI (benar). Kesejahteraan merata dan hak politik penuh (salah).'
    },

    // --- Q25 CONTEXT: Peristiwa Rengasdengklok ---
    {
        qNum: 25,
        type: 'tf',
        topic: 'Menjelang kemerdekaan Indonesia, terjadi ketegangan antara golongan tua dan golongan muda terkait waktu pelaksanaan proklamasi. Golongan muda mengambil langkah dengan membawa dua tokoh penting (Sukarno dan Hatta) ke sebuah tempat bernama Rengasdengklok.',
        text: 'Pilihlah Benar atau Salah pada setiap pernyataan yang berkaitan dengan peristiwa Rengasdengklok!',
        statements: [
            'Sukarno dan Hatta dibawa ke Rengasdengklok oleh golongan muda.',
            'Peristiwa Rengasdengklok berlangsung pada 17 Agustus 1945.',
            'Tujuan pemuda membawa Sukarno dan Hatta adalah agar proklamasi segera dilaksanakan.'
        ],
        answers: ['Benar', 'Salah', 'Benar'], 
        explanation: 'Peristiwa Rengasdengklok terjadi pada tanggal 16 Agustus 1945 (salah), sehari sebelum proklamasi. Tujuan utamanya adalah mendesak proklamasi tanpa intervensi Jepang (benar).'
    },

    // --- Q26 CONTEXT: Penyebaran Berita Proklamasi ---
    {
        qNum: 26,
        type: 'ms',
        topic: 'Setelah proklamasi 17 Agustus 1945 berbagai upaya dilakukan tokoh dan rakyat Indonesia agar kabar kemerdekaan cepat menyebar ke seluruh penjuru tanah air. Langkah-langkah ini menunjukkan semangat rakyat dalam mempertahankan hasil proklamasi.',
        text: 'Tindakan-tindakan manakah yang menunjukkan upaya rakyat Indonesia dalam menyebarluaskan berita proklamasi ke seluruh wilayah Indonesia? Jawaban benar lebih dari satu.',
        options: [
            'Rakyat berani melawan sensor Jepang demi kemerdekaan.',
            'Jepang mendukung penuh penyiaran kabar kemerdekaan.',
            'Rakyat menunggu restu Jepang sebelum menyebarkan berita.',
            'Radio digunakan sebagai sarana penting penyebaran informasi',
            'Kantor kantor berita dimanfaatkan untuk mendistribusikan informasi.'
        ],
        answers: [true, false, false, true, true], 
        explanation: 'Penyebaran dilakukan dengan melawan sensor (benar). Jepang tidak mendukung (salah). Radio dan kantor berita (seperti Domei/Antara) digunakan secara diam-diam (benar).'
    },

    // --- Q27 CONTEXT: Pembentukan Pemerintah Daerah ---
    {
        qNum: 27,
        type: 'tf',
        topic: 'Pembentukan pemerintah daerah menjadi langkah awal untuk memperkuat pemerintahan Indonesia setelah merdeka.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut yang berkaitan dengan pembentukan pemerintah daerah pada masa awal kemerdekaan Indonesia!',
        statements: [
            'Panitia Kecil yang membahas pembentukan pemerintah daerah dipimpin oleh Otto Iskandardinata.',
            'Hasil rapat PPKI pada 19 Agustus 1945 memutuskan Indonesia dibagi menjadi tujuh provinsi',
            'Pembentukan pemerintah daerah bertujuan menggerakkan partisipasi rakyat dalam mempertahankan kemerdekaan'
        ],
        answers: ['Benar', 'Benar', 'Benar'], 
        explanation: 'Panitia kecil dipimpin Otto (benar). PPKI 19 Agustus membagi 8 provinsi (tujuh provinsi + DIY/Yogyakarta) (Benar). Tujuan utamanya adalah konsolidasi kekuasaan dan partisipasi rakyat (benar).'
    },

    // --- Q28 CONTEXT: Lahirnya Multipartai ---
    {
        qNum: 28,
        type: 'ms',
        topic: 'Sidang PPKI 22 Agustus 1945 memutuskan PNI sebagai partai tunggal, namun dibatalkan karena tidak demokratis. BP-KNIP mengusulkan kebebasan mendirikan partai politik. Pemerintah mendukung usulan tersebut dengan mengeluarkan Maklumat Pemerintah 3 November 1945, yang menjadi dasar lahirnya sistem multipartai.',
        text: 'Tindakan-tindakan manakah yang menunjukkan dukungan pemerintah terhadap lahirnya sistem multipartai di Indonesia? Jawaban benar lebih dari satu.',
        options: [
            'Pemerintah mengeluarkan Maklumat 3 November 1945.',
            'BP-KNIP mengusulkan kebebasan mendirikan partai politik.',
            'Pembatalan keputusan pembentukan partai tunggal oleh PPKI.',
            'Pembentukan Majelis Syura Muslimin Indonesia (Masyumi) oleh rakyat.',
            'Pembentukan Partai Nasional Indonesia (PNI) sebagai partai tunggal tetap dilaksanakan.'
        ],
        answers: [true, false, true, false, false], 
        explanation: 'Maklumat 3 November 1945 (benar) dan Pembatalan PNI tunggal (benar) adalah tindakan pemerintah/badan resmi. Usulan BP-KNIP bukan tindakan pemerintah (salah). Masyumi dibentuk rakyat, bukan pemerintah (salah).'
    },

    // --- Q29 CONTEXT: Pertempuran Lima Hari Semarang ---
    {
        qNum: 29,
        type: 'tf',
        topic: 'Pertempuran Lima Hari di Semarang merupakan perlawanan rakyat dan pemuda Semarang melawan tentara Jepang yang masih bersenjata, meskipun indonesia sudah merdeka.',
        text: 'Pilihlah Setuju atau Tidak Setuju pada pernyataan berikut yang berkaitan dengan pertempuran Lima Hari di Semarang!',
        statements: [
            'Pertempuran Lima Hari di Semarang terjadi pada Oktober 1945.',
            'Penyebab utama pertempuran adalah perebutan gudang senjata antara Jepang dan pasukan Indonesia.',
            'Dokter Karladi wafat karena dibunuh oleh pejuang Indonesia.'
        ],
        answers: ['Setuju', 'Setuju', 'Tidak Setuju'], 
        explanation: 'Pertempuran terjadi 15-19 Oktober 1945 (setuju). Penyebabnya termasuk perebutan senjata (setuju). Dokter Kariadi tewas ditembak tentara Jepang (tidak setuju dibunuh pejuang Indonesia).'
    },

    // --- Q30 CONTEXT: Perjuangan Diplomasi ---
    {
        qNum: 30,
        type: 'ms',
        topic: 'Setelah proklamasi kemerdekaan, Indonesia tidak hanya berjuang dengan senjata tetapi juga berusaha mempertahankan kedaulatan melalui jalur diplomasi.',
        text: 'Manakah pernyataan berikut yang menunjukkan bukti upaya Indonesia mempertahankan kemerdekaan melalui diplomasi? Jawaban benar lebih dari satu.',
        options: [
            'Membawa masalah Indonesia ke sidang PBB.',
            'Mengirim delegasi ke perundingan Linggajati.',
            'Mengadakan perundingan Renville dengan Belanda.',
            'Mengusir tentara Sekutu dari Surabaya dengan senjata',
            'Melakukan pertempuran Medan Area melawan Belanda.'
        ],
        answers: [true, true, true, false, false], 
        explanation: 'Membawa masalah ke PBB (benar), Linggajati (benar), dan Renville (benar) adalah contoh perjuangan diplomasi. Mengusir sekutu/pertempuran Medan Area adalah perjuangan fisik (salah).'
    },

    // --- Q31 CONTEXT: Demokrasi Liberal (Multipartai) ---
    {
        qNum: 31,
        type: 'ms',
        topic: 'Masa Demokrasi Liberal (1950-1959) di Indonesia ditandai dengan berkembangnya sistem multipartai.',
        text: 'Manakah pernyataan berikut yang merupakan dampak dari penerapan sistem multipartai pada masa Demokrasi Liberal? Jawaban benar lebih dari satu.',
        options: [
            'Mosi tidak percaya sering diajukan di parlemen.',
            'Pemerintahan berjalan stabil tanpa gejolak politik.',
            'Pemilu 1955 dapat dilaksanakan untuk memilih wakil rakyat.',
            'Presiden Sukarno menjadi pemimpin partai politik terbesar.',
            'Kabinet sering mengalami pergantian sebelum masa tugas habis.'
        ],
        answers: [true, false, true, false, true], 
        explanation: 'Multipartai menyebabkan fragmentasi politik, sehingga mosi tidak percaya dan pergantian kabinet sering terjadi (benar). Namun, Pemilu 1955 berhasil dilaksanakan (benar).'
    },

    // --- Q32 CONTEXT: Gerakan Benteng ---
    {
        qNum: 32,
        type: 'mc',
        topic: 'Soal ini merujuk pada kebijakan Gerakan Benteng yang dilaksanakan oleh Menteri Perekonomian Syafruddin Prawiranegara pada masa Kabinet Natsir (Demokrasi Liberal).',
        text: 'Apa tujuan diterapkannya kebijakan Gerakan Benteng pada masa Demokrasi Liberal?',
        options: [
            'A. Memberi lisensi impor kepada orang-orang yang memiliki potensi kewiraswastaan tinggi.',
            'B. Membangun kewirausahaan bumiputra agar mampu membentengi perekonomian negara.',
            'C. Menciptakan kerja sama antara pengusaha bumiputra dan pengusaha nonbumiputra.',
            'D. Merundingkan permasalahan Finansial Ekonomi (Finek) dengan pihak Belanda.',
            'E. Menanggulangi defisit yang disebabkan naiknya utang negara.'
        ],
        answer: 'B', 
        explanation: 'Gerakan Benteng bertujuan membentuk kelas pengusaha nasional (bumiputra) agar dapat bersaing dengan pengusaha asing/non-bumiputra.'
    },

    // --- Q33 CONTEXT: Blokade Ekonomi Belanda ---
    {
        qNum: 33,
        type: 'mc',
        topic: 'Salah satu penyebab ketidakstabilan perekonomian Indonesia pada masa awal kemerdekaan adalah blokade ekonomi yang dilakukan Belanda.',
        text: 'Mengapa Belanda melakukan aksi blokade tersebut?',
        options: [
            'A. Belanda menginginkan mata uang NICA tetap berlaku di Indonesia.',
            'B. Belanda ingin melindungi hasil perkebunan miliknya di Indonesia.',
            'C. Indonesia membatasi perdagangan dengan pemerintah Belanda.',
            'D. Kegiatan ekspor impor difokuskan untuk negara selain Belanda.',
            'E. Investor asing mengambil alih seluruh kegiatan ekonomi.'
        ],
        answer: 'A', 
        explanation: 'Blokade bertujuan melemahkan ekonomi RI dengan mencegah ekspor-impor agar RI kekurangan dana, sehingga dipaksa kembali berunding dengan Belanda dan mengakui mata uang mereka (NICA) serta dominasi mereka.'
    },

    // --- Q34 CONTEXT: Politik Mercusuar ---
    {
        qNum: 34,
        type: 'tf',
        topic: 'Politik Mercusuar merupakan kebijakan Presiden Sukarno pada era Demokrasi Terpimpin yang bertujuan menjadikan Indonesia sebagai negara yang kuat dan berpengaruh di dunia.',
        text: 'Pilihlah Setuju atau Tidak Setuju pada pernyataan berikut yang berkaitan dengan Politik Mercusuar!',
        statements: [
            'Konferensi Asia-Afrika di Bandung merupakan bagian dari Politik Mercusuar',
            'Tujuan utama Polisik Mercusuar adalah membatasi peran presiden dalam pemerintahan.',
            'Asian Games IV di Jakarta menjadi salah satu agenda Politik Mercusuar.'
        ],
        answers: ['Tidak Setuju', 'Tidak Setuju', 'Setuju'], 
        explanation: 'KAA (1955) bukan bagian dari Mercusuar (1960-an) (tidak setuju). Politik Mercusuar justru memperkuat peran presiden (tidak setuju). Asian Games IV (1962) adalah contoh proyek Mercusuar untuk menunjukkan kejayaan RI (setuju).'
    },

    // --- Q35, Q36, Q37 CONTEXT: Politik Luar Negeri Orde Baru ---
    {
        qNum: 35,
        type: 'mc',
        topic: 'Teks berikut untuk menjawab soal nomor 35-37. Kebijakan politik luar negeri Indonesia pada masa Orde Baru bergeser dari konfrontatif (Orde Lama) menjadi pragmatis, berorientasi pembangunan, dan bebas aktif. Prioritas utamanya adalah memulihkan hubungan baik dengan negara-negara Barat untuk mendapatkan bantuan ekonomi dan investasi. Indonesia kembali aktif di forum regional/internasional, menormalisasi hubungan dengan Malaysia/Singapura, dan berperan sentral dalam pembentukan ASEAN. Prinsip bebas aktif tetap dipegang, tidak memihak blok kekuatan manapun selama Perang Dingin.',
        text: 'Mengapa Orde Baru beralih dari kebijakan konfrontatif ke pendekatan yang lebih pragmatis dan berorientasi pembangunan?',
        options: [
            'A. Keinginan Indonesia untuk bergabung dengan blok Timur secara penuh dan mendapatkan dukungan militer.',
            'B. Kebutuhan mendesak akan bantuan ekonomi dan investasi dari negara-negara Barat untuk mendukung pembangunan nasional.',
            'C. Adanya tekanan internasional dari Perserikatan Bangsa-Bangsa untuk mengubah haluan politik luar negeri Indonesia.',
            'D. Dorongan kuat dari negara-negara nonblok agar Indonesia menjadi pemimpin gerakan antiimperialis global.',
            'E. Pengaruh ideologi komunisme yang makin kuat di Asia Tenggara pasca-Perang Dingin.'
        ],
        answer: 'B', 
        explanation: 'Teks menyebutkan prioritas utama adalah memulihkan hubungan dengan negara Barat yang dapat memberikan bantuan ekonomi dan investasi.'
    },
    {
        qNum: 36,
        type: 'ms',
        topic: 'Lanjutan konteks soal 35: Kebijakan Politik Luar Negeri Orde Baru.',
        text: 'Berdasarkan teks, manakah pernyataan yang menggambarkan karakteristik kebijakan politik luar negeri Indonesia pada masa Orde Baru? Jawaban benar lebih dari satu.',
        options: [
            'Mengedepankan pendekatan konfrontatif terhadap negara-negara Barat.',
            'Memprioritaskan pemulihan hubungan diplomatik dengan negara-negara Asia Tenggara.',
            'Memainkan peran sentral dalam pembentukan dan penguatan ASEAN.',
            'Sepenuhnya mengabaikan prinsip politik bebas aktif demi kerja sama bilateral.',
            'Berorientasi pada pencarian bantuan ekonomi dan investasi dari negara-negara Barat.'
        ],
        answers: [false, true, true, false, true], 
        explanation: 'Kebijakan bergeser dari konfrontatif (salah). Memprioritaskan pemulihan hubungan dengan negara tetangga (benar) dan berperan di ASEAN (benar). Berorientasi pada bantuan/investasi Barat (benar). Prinsip Bebas Aktif tetap dipegang (salah jika diabaikan).'
    },
    {
        qNum: 37,
        type: 'tf',
        topic: 'Lanjutan konteks soal 35: Kebijakan Politik Luar Negeri Orde Baru.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut berdasar informasi pada tekst',
        statements: [
            'Indonesia pada masa Orde Baru tetap mernihak salah satu blok kekuatan selama Perang Dingin untuk mendapatkan dukungan',
            'Salah satu prioritas kebijakan luar negeri indonesia pada masa Orde Baru adalah menciptakan stabilitas dan kerja sama di kawasan Asia Tenggara.',
            'Kebijakan luar negeri Indonesia pada awal Orde Baru cenderung bergeser dari konfrontatif menjadi lebih pragmatis.'
        ],
        answers: ['Salah', 'Benar', 'Benar'], 
        explanation: 'Teks menyebut Prinsip Bebas Aktif tetap dipegang (tidak memihak blok manapun) (salah). Stabilitas di Asia Tenggara melalui ASEAN adalah prioritas (benar). Pergeseran dari konfrontatif ke pragmatis (benar).'
    },

    // --- Q38 CONTEXT: Peran Mahasiswa dalam Reformasi ---
    {
        qNum: 38,
        type: 'tf',
        topic: 'Krisis multidimensional pada akhir 1990-an menjadi latar belakang munculnya gerakan mahasiswa dan pelajar. Puncaknya Mei 1998, demonstrasi besar-besaran menuntut Presiden Soeharto mundur. Gerakan mahasiswa yang masif berhasil menekan kekuasaan Orde Baru dan membuka jalan bagi lahirnya era reformasi.',
        text: 'Pilihlah Benar atau Salah pada pernyataan berikut yang menunjukkan peran pelajar dan mahasiswa dalam proses lahirnya reformasi!',
        statements: [
            'Mahasiswa mengambil alih sistem pemerintahan demokratis',
            'Mahasiswa menjadi penggerak dalam mendorong perubahan sistem politik.',
            'Gerakan mahasiswa 1998 merupakan tonggak perubahan periode pemerintahan Indonesia.'
        ],
        answers: ['Salah', 'Benar', 'Benar'], 
        explanation: 'Mahasiswa tidak mengambil alih pemerintahan (salah). Mahasiswa adalah penggerak perubahan politik (benar) dan Gerakan 1998 adalah tonggak reformasi (benar).'
    },

    // --- Q39 CONTEXT: Kebijakan Ekonomi B.J. Habibie ---
    {
        qNum: 39,
        type: 'ms',
        topic: 'Pada masa awal reformasi, masalah ekonomi merupakan fokus utama pemerintahan Presiden B.J. Habible.',
        text: 'Manakah langkah-langkah yang dilakukan Presiden B.J. Habible untuk memperbaiki masalah ekonomi (masa awal reformasi)? Jawaban benar lebih dari satu.',
        options: [
            'Memperbaiki kinerja ekspor.',
            'Melakukan privatisasi BUMN.',
            'Melakukan reformasi perbankan.',
            'Memberikan bantuan langsung tunai.',
            'Menetapkan undang-undang antimonopoli.'
        ],
        answers: [true, true, true, false, true], 
        explanation: 'Langkah ekonomi Habibie meliputi reformasi perbankan, privatisasi, dan penetapan UU Antimonopoli. Pemberian BLT adalah kebijakan yang lebih baru.'
    },

    // --- Q40 CONTEXT: Kebijakan BBM Jokowi ---
    {
        qNum: 40,
        type: 'mc',
        topic: 'Salah satu kebijakan Presiden Joko Widodo dalam bidang perekonomian adalah menaikkan harga BBM.',
        text: 'Apa tujuan pemerintah menerapkan kebijakan menaikkan harga BBM (pada masa Presiden Jokowi)?',
        options: [
            'A. Menghindari pemanasan global.',
            'B. Mencanangkan program go green.',
            'C. Menyesuaikan harga minyak dunia.',
            'D. Menekan jumlah kendaraan bermotor',
            'E. Mengalihkan subsidi pada sektor produktif.'
        ],
        answer: 'E', 
        explanation: 'Tujuan utama pemerintah menaikkan harga BBM (saat subsidi dicabut/dikurangi) adalah untuk mengalihkan dana subsidi yang besar tersebut ke sektor yang lebih produktif seperti infrastruktur, kesehatan, dan pendidikan.'
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = '';
let startTime = 0;
let timerInterval;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameInput = document.getElementById('name-input');
const startQuizBtn = document.getElementById('start-quiz-btn');
const userNameDisplay = document.getElementById('user-name');
const timeDisplay = document.getElementById('time-display');
const currentQuestionNumber = document.getElementById('current-question-number');
const topicDescription = document.getElementById('topic-description'); // NEW
const topicText = document.getElementById('topic-text');             // NEW
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const explanationArea = document.getElementById('explanation-area');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const finalName = document.getElementById('final-name');
const finalScore = document.getElementById('final-score');
const finalTime = document.getElementById('final-time');
const restartQuizBtn = document.getElementById('restart-quiz-btn');

// --- Event Listeners ---

startQuizBtn.addEventListener('click', () => {
    resetQuiz(); // Pastikan quiz direset sebelum mulai baru
    userName = nameInput.value.trim();
    if (userName) {
        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        userNameDisplay.textContent = userName;
        startTimer();
        loadQuestion();
    } else {
        alert('Mohon masukkan nama Anda untuk memulai kuis.');
    }
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        finishQuiz();
    }
});

restartQuizBtn.addEventListener('click', () => {
    resetQuiz();
});

// --- Timer Functions ---

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    
    const formattedTime = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    timeDisplay.textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
    const elapsed = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// --- Quiz Logic ---

function loadQuestion() {
    const q = quizQuestions[currentQuestionIndex];
    currentQuestionNumber.textContent = q.qNum;
    questionText.innerHTML = q.text;
    optionsContainer.innerHTML = '';
    explanationArea.classList.add('hidden');
    optionsContainer.dataset.answered = 'false'; // Reset agar soal bisa dijawab

    // **LOGIC UNTUK MENAMPILKAN DESKRIPSI SOAL/KONTEKS**
    if (q.topic) {
        topicText.textContent = q.topic;
        topicDescription.classList.remove('hidden');
    } else {
        topicDescription.classList.add('hidden');
    }
    // ********************************************************

    if (q.type === 'mc') {
        renderMultipleChoice(q);
    } else if (q.type === 'tf') {
        renderTrueFalse(q);
    } else if (q.type === 'ms') {
        renderMultiSelect(q);
    }
}

// Renderers (Tidak ada perubahan di sini)
function renderMultipleChoice(q) {
    q.options.forEach((optionText, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = optionText;
        
        optionElement.addEventListener('click', () => handleMultipleChoiceAnswer(q, optionText, optionElement));
        optionsContainer.appendChild(optionElement);
    });
}

function renderTrueFalse(q) {
    const tfGroup = document.createElement('div');
    tfGroup.classList.add('tf-group');

    // Ambil label unik dari array answers (misal: ["Setuju", "Tidak Setuju"])
    let tfLabels = Array.from(new Set(q.answers.map(a => a.trim())));
    // Jika tidak valid (kurang dari 2), fallback ke Benar/Salah
    if (tfLabels.length !== 2) tfLabels = ['Benar', 'Salah'];

    q.statements.forEach((statement, index) => {
        const item = document.createElement('div');
        item.classList.add('tf-item');

        const statementText = document.createElement('span');
        statementText.textContent = statement;
        item.appendChild(statementText);

        const options = document.createElement('div');
        options.classList.add('tf-options');

        tfLabels.forEach(val => {
            const option = document.createElement('span');
            option.classList.add('tf-option');
            option.textContent = val;
            option.dataset.index = index;
            option.dataset.value = val;
            option.addEventListener('click', () => toggleTrueFalseSelection(q, option));
            options.appendChild(option);
        });

        item.appendChild(options);
        tfGroup.appendChild(item);
    });

    // Add submit button for True/False set
    const submitTfBtn = document.createElement('button');
    submitTfBtn.textContent = 'Cek Jawaban';
    submitTfBtn.id = 'submit-tf-btn';
    submitTfBtn.disabled = true; // Disabled until all selected
    submitTfBtn.addEventListener('click', () => handleSubmitTrueFalse(q, tfGroup));
    tfGroup.appendChild(submitTfBtn);

    optionsContainer.appendChild(tfGroup);
}

function renderMultiSelect(q) {
    const msGroup = document.createElement('div');
    msGroup.classList.add('ms-group');
    
    q.options.forEach((optionText, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.dataset.index = index;
        
        // Add checkbox-like visual with text
        const checkbox = document.createElement('span');
        checkbox.textContent = '☐ ';
        checkbox.classList.add('checkbox-icon');
        
        const textNode = document.createTextNode(optionText);
        
        optionElement.appendChild(checkbox);
        optionElement.appendChild(textNode);
        
        optionElement.addEventListener('click', () => toggleMultiSelectSelection(optionElement));
        msGroup.appendChild(optionElement);
    });

    // Add submit button for Multi-Select
    const submitMsBtn = document.createElement('button');
    submitMsBtn.textContent = 'Cek Jawaban';
    submitMsBtn.id = 'submit-ms-btn';
    submitMsBtn.addEventListener('click', () => handleSubmitMultiSelect(q, msGroup));
    msGroup.appendChild(submitMsBtn);
    
    optionsContainer.appendChild(msGroup);
}

// Handlers (Tidak ada perubahan di sini)
function handleMultipleChoiceAnswer(q, selectedText, selectedElement) {
    if (selectedElement.parentElement.dataset.answered === 'true') return;
    
    const selectedAnswerChar = selectedText.charAt(0);
    const isCorrect = selectedAnswerChar === q.answer;
    
    Array.from(optionsContainer.children).forEach(option => {
        const isThisCorrect = option.textContent.charAt(0) === q.answer;
        option.classList.remove('selected');
        
        if (isThisCorrect) {
            option.classList.add('correct-answer');
        }
        
        if (option === selectedElement && !isCorrect) {
            option.classList.add('wrong-answer');
        }
        
        option.style.pointerEvents = 'none';
    });

    if (isCorrect) {
        score++;
    }
    
    explanationText.textContent = q.explanation;
    explanationArea.classList.remove('hidden');
    
    nextBtn.disabled = false;
    optionsContainer.dataset.answered = 'true';
}

function toggleTrueFalseSelection(q, selectedOption) {
    if (optionsContainer.dataset.answered === 'true') return;

    const index = parseInt(selectedOption.dataset.index);
    const item = selectedOption.closest('.tf-item');
    
    Array.from(item.querySelectorAll('.tf-option')).forEach(opt => {
        opt.classList.remove('selected');
    });
    
    selectedOption.classList.add('selected');
    
    const allSelected = q.statements.every((_, i) => 
        optionsContainer.querySelector(`.tf-option.selected[data-index="${i}"]`)
    );
    
    document.getElementById('submit-tf-btn').disabled = !allSelected;
}

function handleSubmitTrueFalse(q, tfGroup) {
    if (optionsContainer.dataset.answered === 'true') return;

    let correctCount = 0;
    
    q.statements.forEach((_, index) => {
        const selectedOption = tfGroup.querySelector(`.tf-option.selected[data-index="${index}"]`);
        const item = selectedOption.closest('.tf-item');
        
        if (selectedOption.dataset.value === q.answers[index]) {
            item.style.backgroundColor = '#c8e6c9';
            correctCount++;
        } else {
            item.style.backgroundColor = '#ffcdd2';
            tfGroup.querySelector(`.tf-option[data-index="${index}"][data-value="${q.answers[index]}"]`).style.border = '2px solid #4caf50';
        }

        Array.from(item.querySelectorAll('.tf-option')).forEach(opt => opt.style.pointerEvents = 'none');
    });
    
    if (correctCount === q.statements.length) {
        score++;
    }
    
    explanationText.textContent = q.explanation;
    explanationArea.classList.remove('hidden');
    
    document.getElementById('submit-tf-btn').disabled = true;
    nextBtn.disabled = false;
    optionsContainer.dataset.answered = 'true';
}

function toggleMultiSelectSelection(optionElement) {
    if (optionsContainer.dataset.answered === 'true') return;

    optionElement.classList.toggle('selected');
    const checkbox = optionElement.querySelector('.checkbox-icon');
    checkbox.textContent = optionElement.classList.contains('selected') ? '☑ ' : '☐ ';
}

function handleSubmitMultiSelect(q, msGroup) {
    if (optionsContainer.dataset.answered === 'true') return;

    let isFullyCorrect = true;
    
    q.options.forEach((_, index) => {
        const optionElement = msGroup.querySelector(`.option[data-index="${index}"]`);
        const isSelected = optionElement.classList.contains('selected');
        const isCorrect = q.answers[index];
        
        if (isCorrect) {
            optionElement.classList.add('correct-answer');
            if (!isSelected) {
                isFullyCorrect = false;
            }
        } else if (isSelected) {
            optionElement.classList.add('wrong-answer');
            isFullyCorrect = false;
        }

        optionElement.style.pointerEvents = 'none';
        optionElement.querySelector('.checkbox-icon').textContent = isCorrect ? '✅ ' : '❌ ';
    });
    
    if (isFullyCorrect) {
        score++;
    }
    
    explanationText.textContent = q.explanation;
    explanationArea.classList.remove('hidden');
    
    document.getElementById('submit-ms-btn').disabled = true;
    nextBtn.disabled = false;
    optionsContainer.dataset.answered = 'true';
}


// --- Finalization ---

function finishQuiz() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const finalTimeValue = stopTimer();
    
    finalName.textContent = userName;
    finalScore.textContent = score;
    finalTime.textContent = finalTimeValue;
    
    // Submit results to Google Sheet
    submitResults(userName, score, finalTimeValue);
}

function submitResults(name, score, time) {
    // GANTI entry.YOUR_ID_HERE dengan ID yang sesuai dari Google Form Anda
    if (SUBMIT_URL.includes('YOUR_GOOGLE_SHEET_FORM_SUBMIT_URL_HERE')) {
        console.warn('PERINGATAN: URL submission Google Sheet masih placeholder. Hasil tidak terkirim.');
        return;
    }

    const submissionData = new FormData();
    submissionData.append(`entry.${ENTRY_ID_NAME}`, name);
    submissionData.append(`entry.${ENTRY_ID_SCORE}`, score);
    submissionData.append(`entry.${ENTRY_ID_TIME}`, time);

    fetch(SUBMIT_URL, {
        method: 'POST',
        body: submissionData,
        mode: 'no-cors'
    })
    .then(() => {
        console.log('Quiz results submitted successfully.');
    })
    .catch(error => {
        console.error('Error submitting quiz results:', error);
    });
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // Jangan hapus userName dan nameInput.value di sini!
    resultScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
}