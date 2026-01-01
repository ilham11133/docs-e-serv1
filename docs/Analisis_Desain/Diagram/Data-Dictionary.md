###  Data Dictionary 

Dokumen ini mendefinisikan struktur penyimpanan data pada database MySQL untuk memastikan integritas dan konsistensi informasi di seluruh sistem E-Service.

#### **Tabel 1: users**
Menyimpan data akun untuk proses login Admin dan Teknisi.

| Nama Kolom | Tipe Data | Key | Null | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `id` | INT (11) | PK | No | ID unik pengguna (Auto Increment). |
| `username` | VARCHAR (50) | Unique | No | Nama pengguna untuk login. |
| `password` | VARCHAR (255) | - | No | Kata sandi terenkripsi (Hash). |
| `role` | ENUM ('Admin', 'Teknisi') | - | No | Tingkat otoritas akses pengguna. |

#### **Tabel 2: technicians**
Menyimpan informasi profil mendalam mengenai teknisi.

| Nama Kolom | Tipe Data | Key | Null | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `id_teknisi` | INT (11) | PK | No | ID unik teknisi. |
| `user_id` | INT (11) | FK | No | Referensi ke tabel `users`. |
| `nama` | VARCHAR (100) | - | No | Nama lengkap teknisi. |
| `no_hp` | VARCHAR (15) | - | No | Nomor telepon aktif. |
| `email` | VARCHAR (100) | Unique | No | Alamat email resmi. |
| `keahlian` | TEXT | - | No | Deskripsi spesialisasi (misal: TV, Kulkas). |

#### **Tabel 3: jobs**
Menyimpan detail pekerjaan/servis yang diinput oleh Admin dan dikerjakan Teknisi.

| Nama Kolom | Tipe Data | Key | Null | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `id_job` | INT (11) | PK | No | ID unik pekerjaan. |
| `admin_id` | INT (11) | FK | No | ID Admin yang menginput pekerjaan. |
| `teknisi_id` | INT (11) | FK | Yes | ID Teknisi yang ditugaskan. |
| `nama_pelanggan`| VARCHAR (100) | - | No | Nama lengkap pelanggan. |
| `no_pelanggan` | VARCHAR (15) | - | No | Nomor kontak pelanggan. |
| `alamat` | TEXT | - | Yes | Alamat lengkap (Wajib untuk Home Service). |
| `prioritas` | ENUM ('Low', 'Medium', 'High') | - | No | Tingkat urgensi pekerjaan. |
| `harga` | DECIMAL (10,2) | - | No | Estimasi harga biaya servis. |
| `deskripsi_masalah`| TEXT | - | No | Detail kerusakan barang. |
| `jenis_barang` | VARCHAR (50) | - | No | Kategori barang (TV, AC, dll). |
| `jenis_layanan` | ENUM ('Office', 'Home') | - | No | Lokasi pengerjaan servis. |
| `status` | ENUM ('Pending', 'Proses', 'Selesai') | - | No | Progres terkini pekerjaan. |
| `created_at` | TIMESTAMP | - | No | Waktu pembuatan order. |

#### **Tabel 4: monthly_reports**
Menyimpan ringkasan laporan bulanan untuk monitoring performa.

| Nama Kolom | Tipe Data | Key | Null | Deskripsi |
| :--- | :--- | :--- | :--- | :--- |
| `id_report` | INT (11) | PK | No | ID unik laporan. |
| `periode` | VARCHAR (20) | - | No | Bulan dan tahun laporan (misal: Jan 2024). |
| `total_pendapatan`| DECIMAL (15,2) | - | No | Akumulasi harga dari job 'Selesai'. |
| `total_pengeluaran`| DECIMAL (15,2) | - | No | Total biaya operasional/suku cadang. |
| `teknisi_terbaik` | VARCHAR (100) | - | No | Nama teknisi dengan penyelesaian terbanyak. |
| `kepuasan_avg` | DECIMAL (3,2) | - | Yes | Rata-rata rating dari pelanggan. |

---

### **Hubungan Antar Tabel (Relational Logic):**
1.  **Users to Technicians:** Relasi *One-to-One* (Satu user login memiliki satu profil teknisi).
2.  **Admin to Jobs:** Relasi *One-to-Many* (Satu Admin dapat menginput banyak pekerjaan).
3.  **Technicians to Jobs:** Relasi *One-to-Many* (Satu teknisi dapat menangani banyak tugas).
4.  **Jobs to Reports:** Data dari tabel `jobs` dikumpulkan secara periodik untuk mengisi tabel `monthly_reports`.