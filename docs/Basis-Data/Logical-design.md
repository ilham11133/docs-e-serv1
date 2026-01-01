

![Logical](Logical%20Design.png)

#  Logical Database Design - Sistem Informasi E-Service

Dokumentasi ini merinci struktur logika database `eservice_db` yang dirancang untuk menjamin integritas data, efisiensi penyimpanan, dan akurasi pelaporan pada DBMS MariaDB.

---

### A. Daftar Tabel dan Spesifikasi Teknis

#### **1. Tabel: `users` (Manajemen Autentikasi)**
Digunakan untuk menyimpan kredensial login seluruh pengguna sistem.
| Atribut | Tipe Data | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| **id_user** | INT | PK, AI | Primary Key, Auto Increment. |
| **username** | VARCHAR(50) | UNIQUE, NOT NULL | Nama unik untuk identitas login. |
| **password** | VARCHAR(255) | NOT NULL | Hash kata sandi untuk keamanan. |
| **role** | ENUM | NOT NULL | Level akses: 'Admin' atau 'Teknisi'. |
| **created_at** | TIMESTAMP | DEFAULT NOW() | Waktu pendaftaran akun. |

#### **2. Tabel: `admins` (Profil Administrator)**
Menyimpan data detail personil admin yang mengelola pesanan.
| Atribut | Tipe Data | Constraint | Relasi / Aturan |
| :--- | :--- | :--- | :--- |
| **id_admin** | INT | PK, AI | Primary Key. |
| **user_id** | INT | FK, NOT NULL | Referensi ke `users(id_user)` ON DELETE CASCADE. |
| **nama_admin** | VARCHAR(100) | NOT NULL | Nama lengkap administrator. |

#### **3. Tabel: `technicians` (Profil Teknisi Lapangan)**
Menyimpan spesialisasi dan kontak teknisi yang melakukan perbaikan.
| Atribut | Tipe Data | Constraint | Relasi / Aturan |
| :--- | :--- | :--- | :--- |
| **id_teknisi** | INT | PK, AI | Primary Key. |
| **user_id** | INT | FK, NOT NULL | Referensi ke `users(id_user)` ON DELETE CASCADE. |
| **nama** | VARCHAR(100) | NOT NULL | Nama lengkap teknisi. |
| **no_hp** | VARCHAR(15) | NOT NULL | Nomor telepon aktif teknisi. |
| **email** | VARCHAR(100) | UNIQUE | Alamat email teknisi. |
| **keahlian** | TEXT | NOT NULL | Deskripsi kemampuan (e.g., Spesialis AC). |

#### **4. Tabel: `jobs` (Data Transaksi Utama)**
Tabel pusat yang mencatat pendaftaran servis dan penugasan teknisi.
| Atribut | Tipe Data | Constraint | Relasi / Aturan |
| :--- | :--- | :--- | :--- |
| **id_job** | INT | PK, AI | Primary Key. |
| **admin_id** | INT | FK, NOT NULL | Admin yang meregistrasi pekerjaan. |
| **teknisi_id** | INT | FK, NULLABLE | Ditugaskan ke teknisi (ON DELETE SET NULL). |
| **nama_pelanggan**| VARCHAR(100) | NOT NULL | Nama customer. |
| **no_pelanggan** | VARCHAR(15) | NOT NULL | Nomor WhatsApp/Telepon customer. |
| **alamat** | TEXT | NULLABLE | Alamat pengerjaan (Home Service). |
| **prioritas** | ENUM | DEFAULT 'Medium'| Tingkat urgensi: 'Low', 'Medium', 'High'. |
| **harga** | DECIMAL(10,2) | NOT NULL | Nilai transaksi (Presisi Finansial). |
| **status** | ENUM | DEFAULT 'Pending'| Status: 'Pending', 'Proses', 'Selesai'. |
| **jenis_layanan** | ENUM | NOT NULL | Lokasi: 'Office' atau 'Home'. |
| **created_at** | TIMESTAMP | DEFAULT NOW() | Waktu pekerjaan didaftarkan. |

#### **5. Tabel: `monthly_reports` (Agregasi Laporan)**
Tabel pendukung untuk menyimpan ringkasan data bulanan.
| Atribut | Tipe Data | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| **id_report** | INT | PK, AI | Primary Key. |
| **periode** | VARCHAR(20) | NOT NULL | Format: YYYY-MM (e.g., 2026-01). |
| **total_pendapatan**| DECIMAL(15,2) | DEFAULT 0.00 | Total omzet bulanan. |
| **teknisi_terbaik** | VARCHAR(100) | - | Nama teknisi dengan performa tertinggi. |
| **kepuasan_avg** | DECIMAL(3,2) | DEFAULT 0.00 | Rata-rata rating kepuasan pelanggan. |

---

### B. Aturan Integritas Data (Relational Constraints)

1.  **Parent-Child Cascade**: Penghapusan data pada tabel `users` akan otomatis menghapus profil di tabel `admins` atau `technicians` (`ON DELETE CASCADE`) untuk mencegah data yatim.
2.  **Historical Safety**: Penghapusan data pada tabel `technicians` tidak akan menghapus riwayat pekerjaan di tabel `jobs`, melainkan mengubah kolom `teknisi_id` menjadi NULL (`ON DELETE SET NULL`) agar laporan keuangan tetap akurat.
3.  **Financial Accuracy**: Penggunaan tipe data `DECIMAL` menjamin tidak ada pembulatan nilai uang yang salah saat melakukan agregasi data bulanan.
4.  **Logical Consistency**: Kolom `periode` pada laporan bulanan disinkronkan secara logis dengan fungsi `DATE_FORMAT` pada kolom `created_at` di tabel `jobs`.

---