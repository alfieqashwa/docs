# Documentation

## About Qozy Cue

1. What is it?
2. Why build it?
3. What features in it?

##### Table Page (for Cashier):

1. Customer sewa loss (rate: minute)
2. Customer sewa per jam (rate: hourly)
3. Order Menu & Detail Button
4. Transfer Table
5. Customer stop loss (rate: minute)
6. Automatically Stop (rate: hourly)
7. Make a payment (disc, tax, cash | debit | credit) & Printed
8. Pending Payment and use-case explanation
9. Cafe-Only feature

##### Dashboard Page (for Owner):

1. Explain all Revenue, Profit, Total Transaction
2. Download transactions by specific date range
3. Show theming options

##### Transaction Page (for Cashier):

1. Sorting, Filtering, and Searching Data
2. Dropdown Button feature explanation
3. Send order -> Archived Page

##### Archived Page (for Manager):

1. Sorting, Filtering, and Searching Data
2. Dropdown Button explanation
3. Send back archived-order -> Transaction Page
4. Delete archived-order permanently

##### Products Page (for Manager):

1. Products (CRUD & Activated) -> explain the restricted salePrice must be greater than costPrice
2. Sorting, Filtering, and Searching Products
3. Packets (CRUD & Activated)
4. Sorting, Filtering, and Searching Packets

##### Profile Page (for All) [ On Progress ]:

### Story Board Video Presentation

1. Memperlihatkan fresh store dimana belum ada transaksi apapun pada Page Dashboard, Tables, maupun Transactions.

## As Manager:

1. Pada Page Settings, memperlihatkan cara setup Pool Table, UoM, Discount, dan Tax.
2. Kemudian meng-aktivasikan Table sehingga muncul di Page Tables.

3. Pada Page Products, setup satu product (CRUD), lalu jelaskan ttg fitur salePrice >= costPrice.
4. Kemudian click Packet Tab, setup beberapa packet (CRUD), termasuk packet free.
5. Aktivasi masing2 product & packet sehingga dapat digunakan.

## As Cashier:

6. Klik Page Tables, dan mulai mempresentasikan case packet loss maupun hourly.
7. Mempresentasikan cara memesan order (gunakan fitur search), menambah, maupun menghapus makanan & minuman.
8. Menjelaskan fitur animasi untuk product yg pernah di pesan dengan yang belum.
9. Menjelaskan warna pada icon Cafe, yang merupakan indikator bahwa table tsb order menu.
10. Klik Detail Button untuk memberikan penjelasan mengenai informasi detail.
11. Jelaskan tentang perubahan menit dan harga pada Packet Loss.
12. Jelaskan tentang percentage animation Countdown Timer pada Packet Hourly (termasuk warna merah pada menit2 terakhir).
13. Presentasikan proses dari Stop Timer hingga melakukan Payment (case: method-payment as Cash) pada Packet Loss.
14. Buat lebih banyak lagi Transaksi masing-masing 2 pada random waktu per 5 menit.
15. Presentasikan fitur Cafe-Only (buat beberapa), lalu lakukan proses order menu hingga payment.
16. Presentasikan fitur Transfer Table kemudian cek Detail Button bahwa order tidak berubah.
17. Presentasikan fitur Pending Payment sambil menjelaskan use-case nya.
18. Script use-case Pending-Payment:
    - Setelah selesai bermain, umumnya customer tidak serta-merta langsung melakukan pembayaran.
    - Mereka biasanya duduk rehat sejenak sambil menghabiskan sisa makanan & minuman yang telah mereka pesan.
    - Bersamaan dengan itu, pool table tidak aktif dan dapat digunakan oleh customer baru,
    - meskipun customer sebelumnya yg telah selesai bermain belum melakukan pembayaran.
    - Untuk itu fitur Pending Payment digunakan agar meja tsb dapat digunakan kembali secara optimal.
19. Perlihatkan fitur Automaticallly Stop Timer pada Packet Jam.
20. Selesaikan proses payment hingga meja kembali kosong.
21. Pergi ke Page Transactions, presentasikan fitur filtering, sorting, search, pagination.
22. Menginfokan fitur dashboard yang hanya dapat dilihat oleh Owner yang akan dipresentasikan sebentar lagi.

## As Owner:

23. Pada Page Dashboard, berikan penjelasan tentang Revenue, total transaksi, Pie Chart, Bar Chart, serta Date Range Picker.
24. Mempresentasikan Tab Download untuk mengunduh semua transaksi.

## As Manager:

25. Pada Page Transactions dan Page Archives, memberikan transaksi semua fitur:
    - Search, Filtering, Sorting, Pagination, Delete, Delete Selection, Paid -> Archived & vise-verca.

Example Name of Customer List:

1. Thom Yorke
2. Jonny Greenwood
3. Colin Greenwood
4. Edward O'Brien
5. Phil Selway
6. Kurt D Cobain
7. Krist Novoselic
8. Dave Grohl

### INFO

- Revenue: The amount received from the customer after discounts, excluding the tax.
- Profit: Revenue minus the cost of goods sold (COGS).

====

PC 2:
Cashier & Self-Order.
3 Printer Thermal ESC/POS (ethernet).

Manager.
Supervisor.
Order maker / (e.g wasit, LC)

2 System.
Jika dua System, tambahan satu Device (Tablet).
Control Box.
