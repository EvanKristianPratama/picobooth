export interface ArticleSection {
  heading: string;
  body: string[];
  bulletPoints?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Sewa Photobooth' | 'Software Photobooth' | 'Paket Usaha';
  readTime: string;
  publishDate: string;
  author: string;
  summary: string;
  keywords: string[];
  metaDescription: string;
  coverImage: string;
  sections: ArticleSection[];
  ctaText: string;
  ctaLink: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'panduan-sewa-photobooth-event-wedding',
    title: 'Panduan Lengkap Sewa Photobooth Event & Wedding: Tips Memilih Vendor Terbaik',
    category: 'Sewa Photobooth',
    readTime: '4 min baca',
    publishDate: '3 September 2026',
    author: 'Pico Strips Team',
    summary: 'Sedang mencari jasa sewa photobooth untuk wedding, ulang tahun, atau corporate gathering? Simak perbandingan cetak thermal vs studio 4R dan checklist memilih vendor terpercaya.',
    keywords: ['sewa photobooth', 'sewa photobooth jakarta', 'harga sewa photobooth', 'vendor photobooth wedding', 'photobooth murah'],
    metaDescription: 'Panduan sewa photobooth murah dan berkualitas untuk event wedding & kantor. Dapatkan tips memilih vendor, perbandingan cetak 4R & thermal, serta estimasi harga.',
    coverImage: '/booth/2.png',
    sections: [
      {
        heading: 'Mengapa Photobooth Menjadi Daya Tarik Utama di Setiap Acara?',
        body: [
          'Dalam setiap perayaan—mulai dari pesta pernikahan (wedding), sweet seventeen, hingga gala dinner korporat—photobooth bukan lagi sekadar pelengkap dekorasi, melainkan magnet hiburan nomor satu bagi para tamu undangan.',
          'Para tamu tidak hanya ingin hadir; mereka ingin mengabadikan momen bersama rekan dan keluarga dalam bentuk fisik yang bisa langsung dibawa pulang maupun diunggah ke media sosial.'
        ],
        bulletPoints: [
          'Suvenir interaktif yang berkesan dan tahan lama',
          'Menciptakan antrean antusias yang memeriahkan suasana venue',
          'Branding otomatis melalui custom template frame foto berlogo acara'
        ]
      },
      {
        heading: 'Pilihan Format Cetak: Thermal Receipt Khas Korea vs Cetak Studio 4R',
        body: [
          'Di Pico Booth, kami menyediakan dua opsi cetak terpopuler yang disesuaikan dengan konsep acara Anda:',
          '1. Thermal Receipt Print (Pico Strips): Tren viral ala Korea dengan cetakan kertas kasir berestetika monokrom high-contrast. Proses cetak super cepat (hanya 3 detik per strip), tanpa tinta, dan anti ribet antre panjang.',
          '2. Studio 4R Print: Pilihan klasik beresolusi tinggi dengan warna tajam dan laminasi glossy premium, sangat ideal untuk resepsi pernikahan formal dan event gala.'
        ]
      },
      {
        heading: 'Checklist Sebelum Booking Vendor Sewa Photobooth',
        body: [
          'Sebelum Anda mentransfer uang muka (DP), pastikan Anda menanyakan beberapa hal krusial ini kepada vendor:',
          'Pastikan vendor menyediakan opsi unduh file digital instan via QR code di layar booth, pencahayaan studio memadai, serta tim operator standby yang ramah sepanjang durasi acara.'
        ],
        bulletPoints: [
          'Apakah cetakan unlimited selama jam sewa?',
          'Apakah desain template frame dapat dikustomisasi sesuai tema acara?',
          'Apakah ada link cloud gallery untuk mengunduh semua foto beresolusi penuh setelah acara?'
        ]
      },
      {
        heading: 'Paket Sewa Photobooth Fleksibel di Pico Booth Mulai 999k',
        body: [
          'Pico Booth menawarkan paket sewa photobooth lengkap mulai dari Rp 999.000 dengan setup modern, pencahayaan profesional, live preview layar sentuh, dan sinkronisasi QR cloud real-time.',
          'Tersedia juga opsi custom backdrop, branding booth khusus, dan operator berpengalaman siap melayani area Jabodetabek dan sekitarnya.'
        ]
      }
    ],
    ctaText: 'Konsultasi Sewa Photobooth via WhatsApp',
    ctaLink: 'https://wa.me/6287779511667?text=Halo%20Pico%20Strips,%20saya%20ingin%20tanya%20paket%20Sewa%20Photobooth%20(Event%20Rental)'
  },
  {
    id: '2',
    slug: 'software-photo-booth-murah-terbaik',
    title: 'Rekomendasi Software Photo Booth Murah Terbaik: Fitur Lengkap Mulai 5 Ribuan',
    category: 'Software Photobooth',
    readTime: '3 min baca',
    publishDate: '3 September 2026',
    author: 'Pico Engineering',
    summary: 'Mencari software photo booth murah tanpa perlu langganan jutaan rupiah per bulan? Pelajari sistem pay-per-event Pico Booth OS dengan fitur multi-kamera & QR instant.',
    keywords: ['software photo booth murah', 'aplikasi photobooth', 'software photobooth indonesia', 'software photobooth wedding', 'software photobooth web'],
    metaDescription: 'Software photo booth murah terbaik di Indonesia. Sistem bayar per transaksi cuma Rp 5.000, multi-kamera, custom frame builder, dan cloud galeri otomatis.',
    coverImage: '/software/Tangkapan%20Layar%202026-07-14%20pukul%2023.58.56.png',
    sections: [
      {
        heading: 'Tantangan Software Photobooth Konvensional: Biaya Mahal & Kaku',
        body: [
          'Banyak vendor photobooth pemula maupun pengusaha rental terbebani dengan biaya lisensi software luar negeri yang mematok tarif langganan bulanan mahal ($50 - $150/bulan).',
          'Padahal jadwal event rental tidak selalu ada setiap minggu. Akibatnya, Anda tetap harus membayar biaya software meskipun mesin sedang tidak beroperasi.'
        ]
      },
      {
        heading: 'Solusi Pico Booth OS: Pay As You Go Hanya Rp 5.000 / Transaksi',
        body: [
          'Pico Booth OS menghadirkan revolusi model bisnis: Tidak ada biaya sewa bulanan atau biaya lisensi awal yang mencekik. Anda hanya membayar Rp 5.000 per transaksi yang berhasil!',
          'Jika dalam sebulan tidak ada event, Anda membayar Rp 0. Ini memberikan fleksibilitas cashflow maksimal bagi pemilik usaha photobooth maupun penyelenggara event.'
        ],
        bulletPoints: [
          'Tanpa komitmen bulanan: Bayar hanya saat mesin digunakan',
          'Mendukung multi-kamera (Duo sync kamera webcam, DSLR, hingga smartphone)',
          'Drag-and-drop Visual Frame Designer untuk membuat frame custom dalam 2 menit',
          'Live Cloud Gallery dengan QR code otomatis tanpa perlu kabel transfer manual'
        ]
      },
      {
        heading: 'Kompatibilitas Multi-Platform yang Ringan & Cepat',
        body: [
          'Software Pico Booth dirancang berbasis web modern yang sangat ringan dan responsif. Dapat dijalankan di laptop Windows, Mac mini, MacBook, hingga tablet sentuh.',
          'Didukung integrasi langsung ke printer thermal kecepatan tinggi maupun printer foto sublimasi merk ternama seperti DNP, Epson, dan Canon.'
        ]
      }
    ],
    ctaText: 'Coba Demo Software Pico Booth Gratis',
    ctaLink: 'https://picobooth.biz.id'
  },
  {
    id: '3',
    slug: 'analisis-modal-peluang-paket-usaha-photobooth',
    title: 'Analisis Modal & Peluang Paket Usaha Photobooth: Cara Cepat Balik Modal & Cuan 30 Juta/Bulan',
    category: 'Paket Usaha',
    readTime: '5 min baca',
    publishDate: '3 September 2026',
    author: 'Pico Business Team',
    summary: 'Kupas tuntas potensi bisnis photobooth kekinian. Analisis modal mesin, perhitungan cashflow per sesi, strategi kemitraan, dan tips mencapai BEP dalam hitungan bulan.',
    keywords: ['paket usaha photobooth', 'usaha photobooth', 'mesin photobooth', 'bisnis photobooth', 'franchise photobooth murah'],
    metaDescription: 'Peluang bisnis paket usaha photobooth lengkap siap pakai. Analisis ROI, potensi omzet 30 juta/bulan, mesin komersial 79jt, dan opsi sistem bagi hasil profit sharing.',
    coverImage: '/booth/3.png',
    sections: [
      {
        heading: 'Mengapa Bisnis Photobooth Sangat Menguntungkan di 2026?',
        body: [
          'Tren photobox dan photo strip mandiri terus meledak di kalangan Gen Z dan milenial. Mall, kafe, bioskop, hingga acara privat selalu dipadati antrean orang yang ingin berfoto ria.',
          'Margin keuntungan bisnis ini sangat tebal: Biaya bahan habis pakai (kertas thermal atau foto) per cetak hanya ratusan perak hingga beberapa ribu rupiah, sementara tarif per sesi foto umumnya berkisar antara Rp 25.000 hingga Rp 50.000.'
        ]
      },
      {
        heading: 'Simulasi Keuangan & Potensi Pendapatan 30 Juta per Bulan',
        body: [
          'Mari kita hitung potensi pendapatan riil dari sebuah unit photobooth yang ditempatkan di lokasi strategis (seperti mall, kafe hits, atau event weekend):',
          'Jika dalam sehari rata-rata ada 35 transaksi dengan harga tiket foto Rp 35.000, maka omzet harian mencapai Rp 1.225.000. Dalam 30 hari, pendapatan kotor menembus Rp 36.750.000!',
          'Setelah dikurangi sewa tempat dan biaya operasional, laba bersih yang dapat dikantongi mencapai Rp 20.000.000 hingga Rp 30.000.000 per bulan.'
        ],
        bulletPoints: [
          'Estimasi transaksi harian: 25 - 50 sesi foto per booth',
          'Margin laba kotor per sesi: Lebih dari 80%',
          'Estimasi waktu balik modal (BEP): 3 hingga 6 bulan operasional'
        ]
      },
      {
        heading: 'Paket Usaha Mesin Komersial Pico Booth: All-in Siap Operasi',
        body: [
          'Pico Booth menyediakan paket manufaktur mesin photobooth komersial mulai dari Rp 79.000.000 (diskon dari harga normal 90jt). Anda mendapatkan perangkat keras kokoh berbahan aluminium industri, kamera high-definition, layar sentuh responsif, printer profesional, dan lisensi software bawaan.',
          'Semua unit didukung garansi, pelatihan operasional, dan pendampingan teknis agar bisnis Anda langsung bisa berjalan sejak hari pertama pengiriman unit.'
        ]
      },
      {
        heading: 'Belum Cukup Modal? Tersedia Program Kemitraan Profit Sharing',
        body: [
          'Kami percaya setiap orang berhak memulai peluang bisnis ini. Jika Anda belum memiliki modal awal 79jt untuk membeli unit mesin penuh, Pico Booth membuka program kemitraan bagi hasil (profit sharing hingga 30%).',
          'Anda cukup menyediakan tempat atau koneksi event, dan kami siap berkolaborasi menghadirkan booth untuk kesuksesan bersama.'
        ]
      }
    ],
    ctaText: 'Konsultasi Paket Usaha via WhatsApp',
    ctaLink: 'https://wa.me/6287779511667?text=Halo%20Pico%20Strips,%20saya%20tertarik%20diskusi%20Paket%20Usaha%20Photobooth%20/%20Kemitraan'
  }
];
