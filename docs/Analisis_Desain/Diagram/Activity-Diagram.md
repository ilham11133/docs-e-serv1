### Activity Diagram

![Activity](Activity%20Diagram%20.png)

###  Deskripsi Mendalam Activity Diagram

Activity Diagram di atas menggambarkan aliran kerja (workflow) sistem E-Service secara *end-to-end*, mulai dari proses autentikasi hingga pembuatan laporan akhir. Berikut adalah penjelasan detail dari setiap tahapan dan logika percabangan (*decision making*):

#### **A. Proses Autentikasi & Otorisasi**
Sistem dimulai dengan satu titik masuk yaitu halaman **Login**.
* **Kondisi (Auth):**
    * **IF (Valid):** Jika kredensial cocok dengan database MySQL, sistem akan masuk ke percabangan peran (*Role*).
    * **ELSE (Invalid):** Jika salah, sistem menjalankan alur alternatif dengan menampilkan pesan *error* dan mengembalikan pengguna ke halaman login (terjadi perulangan/looping hingga login berhasil).
* **Percabangan Peran (Role):** Sistem secara otomatis memfilter antarmuka. Admin diarahkan ke fungsi manajerial, sedangkan Teknisi diarahkan ke daftar pekerjaan lapangan.

#### **B. Alur Kerja Admin (Sisi Input & Pengelolaan)**
Admin bertanggung jawab dalam inisialisasi data pekerjaan.
* **Manajemen Data:** Admin dapat memilih untuk mengelola data teknisi atau menginput pekerjaan baru.
* **Logika Jenis Layanan (Service Type):**
    * **IF (Home Service):** Sistem mewajibkan input alamat pelanggan secara detail untuk memudahkan navigasi teknisi melalui integrasi maps/koordinat.
    * **ELSE (Office Service):** Sistem secara otomatis menggunakan alamat kantor sebagai titik pengerjaan, sehingga mempercepat proses input data.

#### **C. Alur Kerja Teknisi (Sisi Operasional)**
Teknisi bekerja berdasarkan data yang dikirimkan oleh Admin ke database.
* **Seleksi Pekerjaan:** Teknisi memilih tugas dari daftar *Service Active*.
* **Logika Status Perbaikan (Status Check):**
    * **Kondisi 'Proses':** Jika teknisi sedang mengerjakan, status diperbarui ke "Proses" agar Admin tahu barang sedang ditangani.
    * **Kondisi 'Pending' (Alur Alternatif):** Jika ditemukan kendala (misal: suku cadang kosong), teknisi memilih status "Pending". Sistem mewajibkan pengisian alasan agar Admin dapat menginformasikan hal ini kepada pelanggan.
    * **Kondisi 'Selesai' (Alur Sukses):** Jika perbaikan berhasil, teknisi menekan tombol "Selesai" dan sistem akan melakukan konfirmasi akhir.

#### **D. Sinkronisasi Data & Pelaporan (Output Sistem)**
Setelah teknisi menyelesaikan tugas, sistem melakukan pemrosesan data di latar belakang (*background processing*):
1.  **Update Database:** Tabel `jobs` diperbarui statusnya menjadi 'Completed'.
2.  **Kalkulasi Laporan:** Sistem mengambil data harga servis dan data teknisi untuk memperbarui laporan keuangan dan *leaderboard* performa teknisi secara otomatis.
3.  **Output Admin:** Admin menerima hasil akhir berupa visualisasi data yang siap ditinjau untuk pengambilan keputusan bisnis.