### 3.3 System Requirements (SYR)

System Requirements merinci spesifikasi teknis perangkat keras dan perangkat lunak yang diperlukan untuk mengembangkan, menjalankan, dan mengelola aplikasi E-Service.

#### 1. Perangkat Lunak (Software Requirements)

Sistem harus didukung oleh perangkat lunak yang memungkinkan kolaborasi desain, pengembangan basis data, dan dokumentasi teknis.

* **Sistem Operasi**
    * **Windows**: Windows 10/11 Pro sangat disarankan untuk menjalankan MySQL Workbench dan tools pengembangan lokal secara stabil.
    * **macOS**: Versi Monterey atau lebih baru untuk fleksibilitas desain di Figma Desktop dan manajemen repositori via Terminal.
    * **Linux**: Ubuntu 22.04 LTS direkomendasikan jika ingin melakukan simulasi deployment server menggunakan Docker sebelum ke Vercel.
* **Basis Data (Database)**
    * **MySQL 8.0**: Digunakan sebagai mesin utama untuk menyimpan data relasional seperti tabel teknisi, detail pekerjaan, dan laporan keuangan. MySQL dipilih karena keandalannya dalam menangani transaksi data yang terstruktur.
* **Alat Desain & Dokumentasi**
    * **Figma**: Platform utama untuk menghasilkan output High-Fidelity UI/UX dengan standar warna gelap `#242C3B` dan gradasi linear.
    * **Docusaurus**: Framework berbasis React yang digunakan untuk membangun situs dokumentasi teknis yang statis dan cepat.
* **Version Control & Deployment**
    * **GitHub**: Digunakan sebagai sistem kendali versi (Version Control System) untuk menyimpan *source code* dan manajemen proyek.
    * **Vercel**: Platform *cloud* yang digunakan untuk men-deploy dokumentasi Docusaurus agar dapat diakses secara online oleh stakeholder.

#### 2. Perangkat Keras (Hardware Requirements)

Spesifikasi ini memastikan proses desain di Figma dan pengelolaan database MySQL berjalan tanpa kendala performa (*lag*).

* **Prosesor (CPU)**: 
    * **Minimal**: Intel Core i5 generasi ke-8 atau AMD Ryzen 5 (2.4 GHz, Quad-core).
    * **Rekomendasi**: Intel Core i7 atau Apple M1/M2 untuk proses rendering desain High-Fidelity yang lebih cepat.
* **Memori (RAM)**:
    * **8GB**: Batas minimum untuk menjalankan browser (Figma), database MySQL, dan editor kode secara bersamaan.
    * **16GB**: Disarankan agar proses *multitasking* antara dokumentasi Docusaurus dan desain grafis tetap responsif.
* **Penyimpanan (Storage)**:
    * **256GB SSD (Minimum)**: Diperlukan untuk kecepatan pembacaan data sistem dan aplikasi pengembangan. SSD sangat krusial untuk performa query MySQL.
    * **500GB SSD (Disarankan)**: Memberikan ruang lebih untuk aset desain, log aktivitas, dan cadangan database.
* **Jaringan (Networking)**:
    * **Kecepatan**: Minimal 10 Mbps untuk sinkronisasi desain Figma secara real-time dan push/pull code ke GitHub.
    * **Konektivitas**: Koneksi internet stabil diperlukan karena Figma dan Vercel berbasis cloud.

#### 3. Tabel System Requirements
| ID | Kategori | Spesifikasi | Prioritas |
| :--- | :--- | :--- | :--- |
| **SYR-01** | Database | MySQL 8.0 dengan dukungan InnoDB Engine. | Must |
| **SYR-02** | Deployment | Vercel untuk hosting dokumentasi Docusaurus. | Must |
| **SYR-03** | Browser | Chrome/Edge/Safari versi terbaru untuk akses Figma & Web App. | Must |
| **SYR-04** | RAM | Minimal 8GB untuk lingkungan pengembangan. | Must |
| **SYR-05** | OS | Kompatibel dengan Windows, macOS, dan Linux. | Must |

---