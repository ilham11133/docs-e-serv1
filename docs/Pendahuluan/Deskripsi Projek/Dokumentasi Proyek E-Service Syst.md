---
sidebar_position: 1
---
# Dokumentasi Proyek: E-Service System

---

## 1. Beranda / Overview Proyek

### Nama Sistem / Aplikasi
**E-Service** – Platform Manajemen Layanan Perbaikan Elektronik Terintegrasi.

### Latar Belakang Singkat
Dalam industri jasa perbaikan elektronik, koordinasi antara administrasi dan teknisi seringkali mengalami kendala dalam pembaruan status pekerjaan secara real-time. **E-Service** hadir sebagai solusi digital untuk menjembatani komunikasi antara Admin (pengelola order) dan Teknisi (eksekutor lapangan) guna meningkatkan efisiensi operasional dan transparansi layanan.

### Tujuan Sistem
* Digitalisasi pencatatan pesanan jasa servis elektronik.
* Mempermudah teknisi dalam memantau dan memperbarui status pekerjaan (Pending, Proses, Selesai).
* Memberikan kendali penuh kepada Admin untuk memonitor performa teknisi dan laporan keuangan bulanan.

### Target Pengguna
1.  **Admin:** Pengelola operasional, keuangan, dan sumber daya manusia (teknisi).
2.  **Teknisi:** Petugas lapangan atau bengkel yang melakukan perbaikan barang elektronik.

---

## 2. Konteks & Kebutuhan Sistem

### Latar Belakang dan Konteks Bisnis
E-Service dirancang untuk bisnis penyedia jasa servis (seperti servis TV, AC, kulkas, dll) yang memerlukan mobilitas tinggi. Bisnis ini membutuhkan sistem yang dapat membedakan antara layanan di kantor (*Office Service*) dan layanan kunjungan ke rumah (*Home Service*).

### Profil Organisasi Pengguna
Organisasi pengguna adalah penyedia layanan purna jual atau bengkel elektronik mandiri yang memiliki tim teknisi dengan berbagai keahlian dan melayani pelanggan secara harian dengan skala prioritas tertentu.

### Stakeholder Utama
* **Pemilik Bisnis:** Mengawasi laporan laba rugi dan kepuasan pelanggan.
* **Manajer Operasional (Admin):** Mengatur alokasi pekerjaan dan data master teknisi.
* **Teknisi:** Melakukan update teknis pengerjaan di lokasi.

### Batasan Sistem (Scope)
Sistem mencakup manajemen alur kerja internal mulai dari input data pelanggan, penugasan teknisi, hingga pelaporan akhir. 

**Fitur Utama Teknisi:**
* Dashboard Service Active (Update Status: Selesai, Proses, Pending).
* Manajemen New Job (Detail Masalah, Lokasi Service, Data Pelanggan).

**Fitur Utama Admin:**
* Dashboard Monitoring & Leaderboard Teknisi Terbaik.
* Manajemen Database Teknisi (CRUD Data & Keahlian).
* Manajemen Order/Pekerjaan (Input Prioritas, Harga, & Jenis Barang).
* Reporting (Laporan Keuangan, Performa, & Kepuasan Pelanggan).