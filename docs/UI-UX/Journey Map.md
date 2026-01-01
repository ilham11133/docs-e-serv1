---
sidebar_position: 2
---
# User Journey Map (Alur Penggunaan Sistem)

Alur ini menggambarkan langkah-demi-langkah interaksi persona dengan database dari awal hingga pelaporan akhir.

| Tahapan | Langkah Persona | Interaksi Database / Sistem |
| :--- | :--- | :--- |
| **1. Login** | Ridwan (Admin) masuk ke aplikasi. | Sistem memvalidasi akun pada tabel `users`. |
| **2. Registrasi Job** | Ridwan menginput data pelanggan dan estimasi harga awal. | Sistem menjalankan `INSERT` ke tabel `jobs` (harga sudah terisi/estimasi). |
| **3. Dispatching** | Ridwan memilih Budi sebagai teknisi. | Sistem mengupdate `teknisi_id` pada tabel `jobs`. |
| **4. Pengerjaan** | ilham melihat detail tugas di HP . | ilham melakukan `SELECT` pada `jobs` untuk melihat alamat dan masalah. |
| **5. Pelaporan** | ilham konfirmasi ke Siti bahwa tugas selesai via aplikasi. | ilham klik tombol "Selesai", memicu status `Proses` -> `Selesai`. |
| **6. Finalisasi** | Ridwan memverifikasi pekerjaan dan mengunci harga final di sistem. | Ridwan melakukan `UPDATE jobs SET harga = ...` jika ada perubahan biaya tambahan. |
| **7. Reporting** | Ridwan melihat total pendapatan yang sudah valid. | Sistem menjalankan query **Agregasi** untuk laporan bulanan. |

