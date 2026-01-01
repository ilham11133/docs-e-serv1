###  Deskripsi Class Diagram

![Class]()

Class diagram menggambarkan struktur sistem dari sisi objek, atribut, dan fungsi yang tersedia. Berikut adalah rincian kelas-kelas utama dalam E-Service:

#### **1. Class User (Parent Class)**
Merupakan kelas induk untuk mengatur autentikasi. 
* **Atribut:** `id`, `username`, `password`, dan `role` (Admin/Teknisi).
* **Metode:** `login()` dan `logout()` yang digunakan oleh semua aktor.

#### **2. Class Admin**
Turunan dari kelas User yang memiliki hak akses manajerial.
* **Fungsi Utama:** Memiliki metode `tambahTeknisi()` untuk mengelola SDM dan `inputPekerjaan()` untuk memasukkan data servis baru ke dalam sistem. Admin juga memiliki akses eksklusif ke `viewLaporan()`.

#### **3. Class Teknisi**
Turunan dari kelas User yang berfokus pada eksekusi lapangan.
* **Atribut Spesifik:** Menyimpan data profil seperti `no_hp`, `email`, dan `keahlian` (misal: TV, AC, atau Kulkas).
* **Metode:** `updateStatus()` adalah fungsi krusial untuk mengubah status pengerjaan (Selesai/Proses/Pending) dan `viewServiceActive()` untuk melihat daftar tugas.

#### **4. Class Job (Pekerjaan)**
Objek inti yang menyimpan seluruh informasi servis.
* **Detail Data:** Mencakup informasi pelanggan, alamat, harga, hingga jenis layanan (**Home Service** atau **Office Service**).
* **Status:** Atribut `status` secara dinamis berubah sesuai dengan input yang diberikan oleh teknisi.

#### **5. Class Laporan**
Kelas yang berfungsi untuk mengolah data (Data Processing).
* **Fungsi:** Mengambil data dari kelas `Job` untuk menghitung total pendapatan, pengeluaran, serta menentukan teknisi terbaik berdasarkan jumlah *job* yang diselesaikan melalui fungsi `getBestTechnician()`.

#### **Relasi Antar Kelas:**
* **Inheritance (Pewarisan):** Admin dan Teknisi mewarisi sifat dari User.
* **Association (Asosiasi):** * Satu Admin dapat mengelola banyak Teknisi dan membuat banyak Job (*One-to-Many*).
    * Satu Teknisi dapat menangani banyak Job (*One-to-Many*).
    * Banyak Job akan dikompilasi ke dalam satu Laporan bulanan (*Many-to-One*).