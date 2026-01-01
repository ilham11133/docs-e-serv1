###  Deskripsi Relasi Entitas (ERD)

![ERD](ERD%20diagram.png)

ERD di atas menggambarkan bagaimana data mengalir dan saling terikat di dalam database MySQL sistem E-Service:

#### **1. Relasi Users, Admins, & Technicians (Specialization)**
* Sistem menggunakan tabel `USERS` sebagai entitas induk untuk autentikasi.
* **Relasi One-to-One (1:1):** Setiap satu akun di tabel `USERS` hanya boleh memiliki satu profil tambahan, baik itu di tabel `ADMINS` atau `TECHNICIANS`. Ini memastikan pemisahan data pribadi dan hak akses.

#### **2. Relasi Admin ke Jobs (Ownership)**
* **Relasi One-to-Many (1:N):** Seorang Admin dapat membuat banyak entitas `JOBS` (pekerjaan baru), namun setiap satu pekerjaan hanya dicatat oleh satu Admin yang bertanggung jawab saat input data awal.

#### **3. Relasi Technicians ke Jobs (Assignment)**
* **Relasi One-to-Many (1:N):** Seorang Teknisi dapat ditugaskan untuk menangani banyak `JOBS` sekaligus dalam daftar *Service Active* mereka. 
* Kolom `teknisi_id` di tabel `JOBS` bersifat *nullable* pada awalnya (sebelum Admin menunjuk teknisi spesifik), kemudian akan terisi setelah tugas dialokasikan.

#### **4. Relasi Jobs ke Monthly Reports (Aggregation)**
* **Relasi Many-to-One (N:1):** Banyak data dari tabel `JOBS` yang memiliki status 'Selesai' akan dikumpulkan dan dihitung (*aggregate*) menjadi satu baris laporan di tabel `MONTHLY_REPORTS` berdasarkan periode bulan tertentu. 
* Hal ini mencakup penghitungan total pendapatan dari kolom `harga` dan penentuan `teknisi_terbaik` melalui jumlah kemunculan `teknisi_id` terbanyak.

#### **5. Integritas Data (Constraints)**
* **Foreign Key (FK):** Menjamin bahwa tidak ada pekerjaan yang ditugaskan kepada teknisi yang tidak terdaftar.
* **Cascade Delete:** Jika akun user dihapus, maka profil teknisi/admin yang bersangkutan akan otomatis terhapus untuk menjaga kebersihan database.