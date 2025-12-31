### 3.4 Software Requirements (SWR)

Software Requirements merinci fitur-fitur spesifik dan standar kualitas yang harus dipenuhi oleh aplikasi E-Service untuk memastikan kebutuhan operasional Admin dan Teknisi terpenuhi.

#### 1. Functional Requirements (Kebutuhan Fungsional)

Kebutuhan ini mendefinisikan layanan atau fungsi spesifik yang harus disediakan oleh sistem E-Service.

| ID | Fitur | Deskripsi | Prioritas |
| :--- | :--- | :--- | :--- |
| **FR-01** | **Manajemen Teknisi (Admin)** | Admin dapat menambah, melihat, memperbarui, dan menghapus data teknisi yang mencakup Nama, No. HP, Email, dan Keahlian khusus. | Must |
| **FR-02** | **Manajemen Pekerjaan (Admin)** | Admin dapat menginput data pekerjaan baru yang berisi nama pelanggan, alamat, tingkat prioritas, estimasi harga, deskripsi kerusakan, serta jenis barang (TV, AC, dll). | Must |
| **FR-03** | **Alokasi Layanan** | Sistem mendukung pemilihan kategori layanan antara *Office Service* atau *Home Service* saat penginputan pekerjaan baru. | Must |
| **FR-04** | **Dashboard Pekerjaan Aktif (Teknisi)** | Sistem menampilkan daftar pekerjaan yang sedang berjalan di halaman beranda teknisi sebagai prioritas utama. | Must |
| **FR-05** | **Update Status Real-time (Teknisi)** | Teknisi dapat mengubah status pengerjaan secara instan melalui tombol aksi (Pending, Proses, Selesai). | Must |
| **FR-06** | **Notifikasi Job Baru** | Sistem menampilkan informasi pekerjaan baru secara detail (Data pelanggan dan deskripsi masalah) agar teknisi dapat melakukan persiapan sebelum bekerja. | Must |
| **FR-07** | **Reporting & Analytics (Admin)** | Admin dapat memantau laporan bulanan terkait pendapatan/pengeluaran, performa teknisi (total job selesai), dan rekapitulasi kepuasan pelanggan. | Should |
| **FR-08** | **Leaderboard Teknisi** | Sistem menampilkan tabel teknisi terbaik setiap bulannya pada dashboard admin berdasarkan jumlah penyelesaian pekerjaan. | Should |

#### 2. Non-Functional Requirements (Kebutuhan Non-Fungsional)

Kebutuhan ini mendefinisikan standar kualitas, batasan, dan atribut sistem di luar fungsi fitur.

| ID | Atribut | Deskripsi | Prioritas |
| :--- | :--- | :--- | :--- |
| **NFR-01** | **Performance** | Sistem harus memberikan respon transisi antar halaman kurang dari 3 detik untuk memastikan mobilitas teknisi di lapangan tidak terhambat. | Must |
| **NFR-02** | **Usability (Visual)** | Antarmuka pengguna harus menggunakan tema gelap (#242C3B) dengan aksen linear gradient (#37B6E9, #4B4CED) untuk mengurangi kelelahan mata teknisi. | Must |
| **NFR-03** | **Availability** | Sistem dokumentasi dan database harus dapat diakses 24/7 dengan uptime minimal 99% untuk mendukung pengerjaan darurat. | Must |
| **NFR-04** | **Security** | Akses ke dashboard admin harus dilindungi oleh mekanisme autentikasi dan otorisasi yang ketat agar data keuangan dan pelanggan tidak bocor. | Must |
| **NFR-05** | **Scalability** | Struktur database MySQL harus dirancang agar dapat menangani penambahan ribuan data riwayat perbaikan tanpa penurunan performa yang signifikan. | Should |
| **NFR-06** | **Maintainability** | Kode dokumentasi di Docusaurus harus terdokumentasi dengan baik di GitHub agar mudah diperbarui jika ada penambahan fitur di masa depan. | Should |
| **NFR-07** | **Compatibility** | Aplikasi harus responsif dan kompatibel saat dibuka melalui berbagai sistem operasi (Windows, macOS, Linux) dan perangkat (Smartphone/Tablet). | Must |
| **NFR-08** | **Data Integrity** | Sistem harus melakukan validasi input pada setiap form (seperti nomor telepon dan format email) sebelum data disimpan ke database MySQL. | Must |

---