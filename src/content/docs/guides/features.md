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

Transaksi dapat terdiri dari pemesanan F&B (_Food & Beverage_) -- baik digabung dengan Pool Rental (sewa meja billiard) atau tidak.

### Pool Rental

1. Sewa meja terdiri dari dua _packets_ berdasarkan _rate_:

   1. Loss (Open) / menit:

      - _Customer_ tidak menentukan kapan waktu selesai bermain di awal penyewaan.
      - Batas maksimal 6 jam (_automatically_).
      - Rate / tarif di hitung dalam durasi menit secara default.
      - Client dapat request fitur `Custom Loss Minute`, yakni jika customer bermain kurang dari satu jam, tarif di hitung dengan rate total/hr -> menit x 60 menit.
      - Meja/Table tidak dapat di booking selama penyewaan.

   2. Packet (Hourly) / jam:
      - Waktu selesai bermain ditentukan di awal penyewaan.
      - Batas maksimal penyewaan 6 jam (_automatically_).
      - Rate / tarif di hitung dalam durasi jam.
      - Meja/Table dapat di booking dan di _schedule_ (di atur jadwalnya).

---

2. Fitur **Transfer Table** dimana _customer_ dapat berpindah _table_ bila diperlukan.

---

3. Fitur **Tambah Durasi** dimana _customer_ dapat menambah durasi penyewaan (hanya berlaku pada _Packet Hourly_)

---

4. Fitur **Pending Payment** dimana _table_ dapat digunakan kembali oleh _customer_ baru meskipun _customer_ sebelumnya yang telah selesai bermain belum melakukan _payment_, atau _customer_ masih ingin memesan makanan atau minuman.

---

### Booking & Scheduling

- Calon _customer_ dapat melakukan pemesanan di awal dengan chat _via whatsapp_ atau telepon langsung.
- Setelah _customer_ melakukan pelunasan, maka _cashier_ segera mencatat waktu mulai (_start-time_) serta durasi lamanya penyewaan.
- Hanya terdapat tarif _Packet Per Jam/Hourly_ saja, sedangkan Packet Loss/Open tidak dimungkinkan dilakukan.
- Nama _customer_ serta nomor telepon wajib diisi, digunakan sebagai validasi pelanggan pada saat telah berada di lokasi.
- _Scheduling_ akan dijalankan oleh sistem secara otomatis.
- _Booking_ dapat dilakukan berkali-kali dalam satu hari.
- Masing-masing _scheduling_ memiliki selisih dengan jarak-waktu minimal 5 menit dan maksimal 15 menit.
- Selisih jarak-waktu (_gap-time_) dapat disetting oleh user/pengguna (cashier).
- Secara _default_ selisih jarak-waktu (_gap-time_) adalah 10 menit.
