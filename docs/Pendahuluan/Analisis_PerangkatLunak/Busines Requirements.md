## 3. Requirement Engineering

### 3.1 Business Requirements (BR)

#### 1. Deskripsi Umum
**E-Service** adalah platform manajemen jasa perbaikan elektronik yang dirancang untuk mengoptimalkan alur kerja antara administrasi dan teknisi lapangan. Sistem ini bertujuan untuk menggantikan proses manual menjadi digital guna meningkatkan kecepatan respon layanan, akurasi data perbaikan, dan profesionalisme bisnis di mata pelanggan.

#### 2. Tujuan Bisnis
Tujuan utama dari implementasi sistem E-Service adalah:
1.  **Optimasi Operasional Teknisi:** Meningkatkan produktivitas teknisi hingga 40% dengan sistem penugasan yang real-time dan terstruktur.
2.  **Transparansi Layanan:** Memberikan kejelasan status perbaikan kepada pelanggan dan manajemen, mengurangi *miss-communication* terkait progres kerja.
3.  **Kendali Keuangan & Performa:** Memperoleh visibilitas penuh terhadap arus kas (pendapatan/pengeluaran) serta metrik kinerja teknisi untuk pengambilan keputusan berbasis data.
4.  **Skalabilitas Layanan:** Memungkinkan bisnis menangani volume order yang lebih besar tanpa menambah beban kerja administratif secara signifikan.

#### 3. Kebutuhan Bisnis Utama
Menjabarkan elemen krusial untuk mencapai tujuan bisnis:
1.  **Sistem Manajemen Penugasan (Job Dispatching):** Kemampuan untuk mendistribusikan pekerjaan berdasarkan lokasi (Home Service vs Office Service) secara otomatis dan cepat.
2.  **Dashboard Monitoring Real-time:** Dashboard bagi Admin untuk memantau beban kerja seluruh teknisi dan status setiap unit elektronik yang sedang diperbaiki.
3.  **Pelaporan Keuangan Otomatis:** Sistem yang mampu menghitung pendapatan bersih per pekerjaan setelah dikurangi estimasi pengeluaran suku cadang atau operasional.
4.  **Analitik Performa (Leaderboard):** Algoritma untuk menentukan teknisi terbaik berdasarkan kecepatan penyelesaian tugas dan tingkat kepuasan pelanggan.

#### 4. Manfaat Bisnis (Business Value)
* **Bagi Perusahaan:** Mengurangi biaya operasional administratif, memiliki basis data pelanggan yang rapi, dan meningkatkan reputasi brand melalui layanan yang profesional.
* **Bagi Teknisi:** Mempermudah pengaturan jadwal harian, akses informasi kerusakan barang yang jelas sebelum bekerja, dan transparansi bonus berdasarkan performa.
* **Bagi Pelanggan:** Mendapatkan estimasi waktu perbaikan yang lebih akurat dan layanan yang lebih responsif baik di rumah maupun di kantor.

#### 5. Indikator Keberhasilan (Key Performance Indicators - KPI)
| ID | Indikator Keberhasilan (KPI) | Target |
| :--- | :--- | :--- |
| **KPI-01** | Waktu Respon Penugasan | Teknisi menerima notifikasi pekerjaan < 5 menit setelah input Admin. |
| **KPI-02** | Efisiensi Status | 100% status pengerjaan diperbarui secara digital (tidak ada laporan manual). |
| **KPI-03** | Kepuasan Pelanggan | Mencapai rata-rata rating 4.7/5 dalam laporan bulanan. |
| **KPI-04** | Kapasitas Order | Mampu menangani kenaikan volume order hingga 50% tanpa menambah staf admin. |

#### 6. Batasan (Constraints)
* **Scope:** Sistem saat ini hanya fokus pada manajemen internal (Admin & Teknisi), belum mencakup portal khusus login untuk pelanggan luar.
* **Teknologi:** Output utama adalah prototipe High-Fidelity (Figma) dengan basis data MySQL yang terintegrasi sesuai skema bisnis.
* **Keamanan:** Data pelanggan dan teknisi harus terlindungi dan hanya dapat diakses berdasarkan level otoritas (Role Based Access Control).

#### 7. Tabel Business Requirements
| ID | Deskripsi Requirement | Prioritas |
| :--- | :--- | :--- |
| **BR-01** | Sistem wajib mendukung klasifikasi layanan: *Home Service* dan *Office Service*. | Must |
| **BR-02** | Sistem harus menyediakan laporan keuangan bulanan (pendapatan vs pengeluaran). | Must |
| **BR-03** | Sistem harus memiliki fitur pelacakan performa teknisi (total job selesai). | Must |
| **BR-04** | Sistem harus memiliki skema prioritas pekerjaan (Low, Medium, High). | Should |
| **BR-05** | Sistem harus dapat menyimpan histori perbaikan per pelanggan secara permanen. | Must |
---