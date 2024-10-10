---
title: Features
description: Features explanation.
---

Aplikasi [Qozy Cue](https://qozycue.com) terdiri dari tiga fitur utama yang akan dipaparkan lebih lanjut via video:

1. **Point of Sale (PoS)**
2. **Pool Rental**
3. **Booking & Scheduling**

### Point of Sale (PoS)

PoS atau _Pengkasiran_ memproses transaksi dengan pihak customer dari pemesanan hingga closing.

Fitur ini memungkinkan user (as cashier) untuk mencatat nama dan contact customer, melakukan pemesanan, mencetak pemesanan, menambahkan catatan jika diperlukan, mencetak bill, melakukan pembayaran (cash, debit, credit), dan mencetak receipt.

Transaksi dapat terdiri dari pemesanan F&B -- baik digabung dengan Pool Rental (sewa meja billiard) atau tidak.

### Pool Rental

1. Sewa meja terdiri dari dua _packets_:

   1. Loss (Open) / menit:

      - Tidak ditentukan kapan waktu selesai bermain di awal penyewaan.
      - Batas maksimal penyewaan 6 jam.
      - Rate / tarif di hitung per menit.
      - Jika bermain kurang dari satu jam, maka tarif di hitung dengan rate per menit x 60 menit.
      - Meja tidak dapat di booking.

   2. Packet (Hourly) / jam:
      - Waktu selesai bermain ditentukan di awal penyewaan.
      - Batas maksimal penyewaan 6 jam.
      - Rate / tarif di hitung per jam.
      - Meja dapat di booking dan di scheduling (di atur jadwalnya).

---

2. Fitur **Transfer Table** dimana customer dapat berpindah meja bila diperlukan.

---

3. Fitur **Pending Payment** dimana meja dapat digunakan kembali oleh customer baru meskipun customer sebelumnya yang telah selesai bermain belum melakukan _payment_ atau customer masih memesan makanan atau minuman baru.

---

### Booking & Scheduling

- Calon customer dapat melakukan pemesanan di awal dengan chat via whatsapp atau telepon langsung.
- Setelah customer melakukan pelunasan, maka cashier segera mencatat waktu mulai (start-time) serta durasi lamanya penyewaan.
- Hanya terdapat tarif _Packet Per Jam/Hourly_ saja, sedangkan Packet Loss/Open tidak dimungkinkan dilakukan.
- Nama customer serta nomor telepon wajib diisi, digunakan sebagai validasi pelanggan pada saat telah berada di lokasi.
- Scheduling akan dijalankan oleh system secara otomatis.
- Booking dapat dilakukan berkali-kali dalam satu hari.
- Gap antar masing-masing scheduling memiliki selisih dengan jarak-waktu minimal 5 menit dan maksimal 15 menit.
- Secara default jarak-waktu (gap) antar booking schedule adalah selisih 10 menit.
- Selisih jarak-waktu (gap) dapat disetting oleh user/pengguna (cashier).
