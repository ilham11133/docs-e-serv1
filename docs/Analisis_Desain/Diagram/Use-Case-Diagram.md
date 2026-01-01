### Penjelasan Mendalam Use Case Utama
![Diagram](/img/Usecase-diagram.png)

Setiap *Use Case* di bawah ini dirancang untuk memastikan integritas data pada basis data MySQL dan efisiensi alur kerja operasional antara Admin dan Teknisi.

#### **UC-01: Login & Autentikasi**
* **Aktor**: Admin & Teknisi.
* **Deskripsi**: Merupakan gerbang utama untuk memastikan keamanan data perusahaan. Sistem menerapkan *Role-Based Access Control* (RBAC) untuk membedakan hak akses dan tampilan antarmuka antara Admin dan Teknisi.
* **Alur Normal**:
    1. Pengguna memasukkan *username* dan *password* pada halaman login.
    2. Sistem melakukan validasi kredensial terhadap tabel `users` di database MySQL.
    3. Jika valid, sistem memeriksa peran (*role*) pengguna.
    4. Admin diarahkan ke halaman Dashboard Utama, sedangkan Teknisi diarahkan ke halaman daftar *Service Active*.
* **Alur Alternatif**:
    1. Jika kredensial tidak cocok, sistem menampilkan pesan kesalahan "Akses Ditolak: Username atau Password Salah".
    2. Sistem membatasi percobaan login hingga 3 kali untuk mencegah serangan *brute force*.

#### **UC-02: Input & Alokasi Pekerjaan (Admin)**
* **Aktor**: Admin.
* **Deskripsi**: Admin bertindak sebagai operator pusat yang menerima permintaan servis dari pelanggan dan mendistribusikannya kepada teknisi yang tersedia.
* **Alur Normal**:
    1. Admin mengakses formulir "Tambah Pekerjaan Baru".
    2. Admin mengisi detail pelanggan (Nama, No. Telepon, Alamat).
    3. Admin memilih kategori layanan: **Home Service** (kunjungan) atau **Office Service** (servis di tempat).
    4. Admin menentukan tingkat **Prioritas** (Low, Medium, High) dan menyimpan data ke tabel `jobs`.
* **Alur Alternatif**:
    1. Jika deskripsi barang rusak tidak sesuai dengan kategori spesialisasi teknisi yang ada, sistem akan memberikan notifikasi saran untuk memperbarui data keahlian teknisi terlebih dahulu sebelum tugas diberikan.

#### **UC-03: Update Status Pengerjaan (Teknisi)**
* **Aktor**: Teknisi.
* **Deskripsi**: Fitur krusial bagi transparansi operasional. Memungkinkan teknisi memberikan laporan progres perbaikan secara *real-time* kepada Admin.
* **Alur Normal**:
    1. Teknisi masuk ke menu "Service Active" dan memilih pekerjaan yang sedang ditangani.
    2. Teknisi memilih salah satu status pengerjaan: **Proses**, **Pending**, atau **Selesai**.
    3. Sistem melakukan pembaruan otomatis pada kolom `status` di tabel `jobs` secara *real-time*.
* **Alur Alternatif**:
    1. Jika status diubah menjadi **Selesai**, sistem akan menampilkan *pop-up* konfirmasi akhir.
    2. Sistem secara otomatis mencatat waktu selesai untuk mengkalkulasi durasi pengerjaan yang akan digunakan pada laporan performa teknisi.

#### **UC-04: Monitoring Laporan & Performa (Admin)**
* **Aktor**: Admin.
* **Deskripsi**: Fungsi manajemen strategis untuk memantau kesehatan finansial bisnis dan produktivitas tim teknisi.
* **Alur Normal**:
    1. Admin mengakses dashboard "Laporan & Performa".
    2. Sistem menarik data agregat dari tabel transaksi dan tabel pengerjaan teknisi.
    3. Sistem menampilkan visualisasi grafik penghasilan bulanan serta tabel **Leaderboard Teknisi** berdasarkan jumlah servis yang berhasil diselesaikan.
* **Alur Alternatif**:
    1. Admin dapat melakukan filter data laporan berdasarkan rentang tanggal tertentu atau spesialisasi keahlian teknisi untuk analisis yang lebih spesifik.