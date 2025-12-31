---
sidebar_position: 2
---
### 3.2 Stakeholder Requirements (STR)

Bagian ini mengidentifikasi profil dan kebutuhan dari berbagai pihak yang berkepentingan dalam pengembangan dan penggunaan sistem E-Service.

#### 1. Pemilik Bisnis (Owner)
Pemilik bisnis adalah stakeholder utama yang menetapkan visi strategis. Mereka membutuhkan sistem yang dapat memberikan gambaran besar mengenai kesehatan bisnis, pertumbuhan jumlah pelanggan, serta efisiensi kinerja teknisi guna memastikan keberlanjutan usaha.

#### 2. Admin Aplikasi
Admin bertanggung jawab penuh atas manajemen operasional harian di *backend*. Kebutuhan utama mereka adalah kemudahan dalam mengelola data master teknisi, mengalokasikan pekerjaan (job dispatching), memantau arus kas perbaikan, serta menyusun laporan performa bulanan secara otomatis.

#### 3. Teknisi (Field Service)
Teknisi adalah pengguna yang mengeksekusi layanan di lapangan atau di kantor. Mereka membutuhkan antarmuka yang intuitif untuk melihat daftar pekerjaan baru, mengakses detail kerusakan barang, serta melakukan pembaruan status pengerjaan secara real-time tanpa prosedur yang rumit.

#### 4. Pengembang (Developer)
Developer bertanggung jawab untuk membangun arsitektur aplikasi menggunakan MySQL sebagai basis data dan mengimplementasikan desain Figma ke dalam kode fungsional. Mereka memerlukan dokumentasi yang jelas mengenai skema database dan alur logika bisnis untuk memastikan skalabilitas sistem.

#### 5. Desainer UI/UX
Desainer bertanggung jawab menciptakan pengalaman pengguna yang nyaman. Fokus mereka adalah mengimplementasikan identitas visual yang telah ditentukan (Warna `#242C3B` dan gradasi linear `#37B6E9`, `#4B4CED`) untuk memastikan antarmuka tetap profesional dan mudah dibaca oleh teknisi di berbagai kondisi cahaya.

#### 6. Pelanggan (Customer)
Meskipun dalam tahap ini pelanggan tidak memiliki akses login, mereka adalah stakeholder pasif yang kepuasannya diukur. Mereka membutuhkan kepastian waktu pengerjaan, transparansi harga, dan kualitas perbaikan yang terdokumentasi dengan baik dalam sistem.

#### 7. Tester / Quality Assurance (QA)
Tim tester memastikan bahwa fitur-fitur kritis seperti pengubahan status pekerjaan oleh teknisi dan kalkulasi laporan bulanan oleh admin berjalan tanpa *bug*. Mereka berfokus pada validasi input data dan integritas relasi tabel di MySQL.

#### 8. Regulator & Keamanan Data
Pihak yang memastikan bahwa data pelanggan (nama, nomor telepon, alamat) tersimpan dengan aman dalam database MySQL dan mematuhi standar perlindungan data pribadi guna menghindari penyalahgunaan informasi.

---

### Tabel Ringkasan Stakeholder Requirements
| ID | Stakeholder | Kebutuhan Utama | Prioritas |
| :--- | :--- | :--- | :--- |
| **STR-01** | Pemilik Bisnis | Laporan pendapatan, pengeluaran, dan tingkat kepuasan pelanggan. | Must |
| **STR-02** | Admin | Fitur manajemen teknisi (CRUD) dan input pekerjaan baru. | Must |
| **STR-03** | Teknisi | Akses daftar pekerjaan aktif dan tombol update status (Pending/Proses/Selesai). | Must |
| **STR-04** | Developer | Skema database MySQL yang terintegrasi dan terdokumentasi di GitHub. | Must |
| **STR-05** | UI/UX Designer | Konsistensi penggunaan warna gelap dan elemen gradasi biru-ungu pada High-Fidelity Figma. | Should |
| **STR-06** | Tester | Skenario uji untuk memastikan fitur laporan bulanan akurat. | Should |