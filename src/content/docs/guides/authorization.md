---
title: Authorization
description: Authorization explanation.
---

Signed-in hanya dapat dilakukan oleh pemilik akun gmail karena kami mengandalkan protokol [Google OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) untuk autentikasi - yang bukan hanya aman bagi sistem kami, namun juga bagi para pengguna.

**So, we eliminate the need to store any passwords.**

Berikut adalah pemaparan teknis perihal otorisasi **user** atau pengguna:

### Owner

- Dapat melihat seluruh laman untuk memantau seluruh aktifitas dan data
- Tidak dapat melakukan transaksi, membuat, menyunting, atau menghapus data apapun
- Hanya _Owner & Admin_ yang dapat mengakses laman **Dashboard**

### Cashier:

- Otoritas utama melakukan transaksi _pool rental_ dan pemesanan F&B pada laman **Tables** termasuk transfer meja, booking, dan eksekusi pembayaran
- Tidak dapat akses ke laman **Dashboard**
- Tidak dapat konfigurasi _Products_ F&B dan _Packets_ (membuat, menyunting, atau menghapus)

### Manager:

- Otoritas utama mengkonfigurasi _Products_ F&B dan _Packets_ (membuat, menyunting, atau menghapus)
- Tidak dapat melakukan transaksi, kecuali beberapa fitur
- Tidak dapat mengakses laman **Dashboard**

### Admin:

- Fungsi utama adalah maintenance fitur-fitur
- Dapat melihat seluruh laman untuk memantau seluruh aktifitas dan data
- Memiliki akses semua fitur-fitur dan melakukan konfigurasi teknis
