import React, { Component } from "react";

export default class Faq extends Component {
    render(){
        return(
            <div className="row">
                <div className="margin-body">
                    <header className="entry-title">
                        <h2>FAQs</h2>
                    </header>
                    <div className="post-content">
                        <p>
                            <span><strong>A. Berapa Lama Waktu Pengiriman?</strong></span>
                        </p>
                        <p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Berikut adalah informasi mengenai waktu pengiriman pesanan anda :</span>
                            <ol>
                                <li><span>Status Pesanan Dikemas</span></li>
                                    <span> Masa pengemasan pesanan anda adalah paling lama 2 (dua) hari kalender.
                                    Jangan khawatir apabila penjual belum merespon pesanan anda. Pesanan akan dibatalkan 
                                    otomatis apabila melebihi waktu 2 (dua) hari kalender oleh sistem JastipinAja! dan dana 
                                    akan dikembalikan segera ke rekening milik Pembeli.</span>
                                <li><span>Status Pesanan Dikirim</span></li>
                                    <span> Lama waktu pengiriman bergantung pada jasa kirim rekanan JastipinAja!. 
                                        <br></br>
                                        Berikut estimasi proses pengiriman pesanan dalam kondisi normal :</span>
                                    <table border="1" cellPadding="10">
                                        <tr bgcolor = "#45b6fe">
                                            <td className="tdku">Jasa Kirim</td>
                                            <td className="tdku">Lama Pengiriman</td>
                                            <td className="tdku">Hari Operasional</td>
                                            <td className="tdku">Kontak dan situs Pelacakan Pesanan</td>
                                        </tr>
                                        <tr>
                                            <td className="tdku">PAXEL</td>
                                            <td className="tdku">Sameday Delivery</td>
                                            <td className="tdku">Senin s/d Jumat pukul 9.00 WIB s/d pukul 18.00 WIB 
                                                <br></br>
                                                (Sabtu, Minggu, dan Hari 
                                                Libur Nasional tutup)
                                            </td >
                                            <td className="tdku"> Email : wehearyou@paxel.co
                                                <br></br>
                                                Whatsapp : 085574670318
                                                <br></br>
                                                <a href="https://paxel.co/id/track-shipments">https://paxel.co/id/track-shipments</a>
                                            </td>
                                        </tr>
                                    </table>
                                    <span>Anda bisa melacak pesanan dengan cara meng “copy paste” nomor 
                                        resi yang diberikan oleh Penjual pada situs web pelacakan jasa kirim rekanan JastipinAja!.</span>
                            </ol>
                        </p>
                        <hr />

                        <p>
                            <span><strong>B. Bagaimana Cara Menghubungi Pusat Bantuan JastipinAja! ?</strong></span>
                        </p>
                        <p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anda dapat menghubungi kami melalui email : jastipinaja@aldeoz.com</span>
                            <br></br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Waktu operasional Pusat Bantuan adalah Hari Senin s/d Jumat pukul 8.00 WIB s/d pukul 
                                16.00 WIB (Hari Libur Nasional, Sabtu dan Minggu tutup).</span>
                            <br></br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Berikut ini adalah beberapa topik yang sering ditanya, silakan memahami seputar 
                                topik berikut sebelum menghubungi Pusat Bantuan JastipinAja! :
                                <br></br>
                            </span>

                            <ol>
                                <li><span>Apa yang harus saya lakukan jika saya lupa password akun saya?</span></li>
                                <span>Pada halaman login, klik Lupa Password? Selanjutnya notifikasi mengenai prosedur 
                                    penggantian password akan dikirimkan ke email yang digunakan pada saat membuat akun</span>
                                
                                <li><span>Apakah pengguna dapat mendaftar sebagai penjual dan pembeli dengan email yang sama?</span></li>
                                <span>Untuk saat ini, pengguna dapat mendaftar sebagai penjual dan pembeli namun
                                    dengan alamat email yang berbeda.</span>

                                <li><span>Bagaimana cara melihat performa dari Toko Penjual?</span></li>
                                <span>JastipinAja! menilai performa Toko dari jumlah produk terjual yang ditampilkan di
                                    setiap deskripsi produk.</span>
                                
                                <li><span> Mengapa Saya tidak bisa menyelesaikan pembayaran untuk transaksi pembelian
                                    Barang di lebih dari 1 (satu) Toko?</span></li>
                                <span> Saat ini setiap proses pembayaran hanya berlaku untuk transaksi di 1 (satu) Toko saja. Apabila Pembeli ingin melakukan 
                                    transaksi di lebih dari 1 (satu) Toko, maka harus melakukan proses pembayaran lebih dari satu kali.</span>

                                <li><span> Apakah Saya dapat mengirim barang untuk orang lain?</span></li>
                                <span>Pembeli dapat membeli Barang dan mengirimkan barang tersebut untuk orang lain dengan cara klik Ganti Detail Pengiriman untuk memasukkan detail data pengirim dan penerima 
                                    (nama, no telepon pengirim dan nama, no telepon penerima di kolom Catatan, serta mengganti alamat menjadi alamat penerima). </span>

                                <li><span> Bagaimana cara merubah nomor rekening Penjual yang sudah terdaftar di Aplikasi JastipinAja! ?</span></li>
                                <span> Penjual dapat merubah nomor rekeningnya dengan cara mengirimkan email ke alamat : JastipinAja@aldeoz.com.</span>
                            </ol>
                        </p>
                        <hr />

                        <p><span><strong>C. Proses Pembatalan dan Pengembalian Dana</strong></span></p>
                        <p>
                            <ol>
                                <li><span>[Pembeli] Proses Pembatalan dan Pengembalian Dana</span></li>
                                <ul>
                                    <li><span>Pembeli tidak dapat melakukan pembatalan atas transaksi yang telah berhasil
                                            dibayar. Oleh karena itu, pembeli diharapkan benar-benar mengecek kembali
                                            pesanannya sebelum melakukan pembayaran.</span></li>
                                    <li><span> Pembeli dapat mengajukan komplain atas barang pesanannya (meliputi, namun
                                            tidak terbatas pada : kesalahan nomor resi yang diinput oleh Penjual sehingga tidak 
                                            dapat dilacak pada situs web jasa pengiriman, barang tidak diterima Pembeli dalam waktu 2 (dua) 
                                            hari sejak dikirim, atau barang yang diterima 
                                            tidak sesuai dengan pesanan) dengan cara mengirimkan email ke alamat : JastipinAja@aldeoz.com.</span></li>
                                    <li><span> Selanjutnya email akan diproses oleh pihak JastipinAja! paling lambat 2x24jam pada jam kerja customer service.</span></li>
                                    <li><span> Apabila dirasa perlu, maka pihak JastipinAja! akan membuat diskusi chat 
                                        antara Penjual dan Pembeli untuk mencari kesepakatan atas solusi masalah tersebut.</span></li>
                                    <li><span> Apabila hasil keputusan adalah pengembalian dana ke pembeli, maka JastipinAja! akan meminta nomor rekening pembeli dan dana akan ditransfer 
                                            paling lambat 2 (dua) hari kerja setelah diterimanya nomor rekening pembeli.</span></li>
                                </ul>

                                <li><span>[Penjual] Proses Pembatalan dan Pengembalian Dana</span></li>
                                <ul>
                                    <li><span> Penjual dapat melakukan pembatalan order dari Pembeli dengan cara tidak
                                            memprosesnya selama 2 (dua) hari, sehingga pesanan otomatis akan dibatalkan
                                            oleh sistem JastipinAja!.</span></li>
                                    <li><span> Apabila pembeli mengajukan komplain karena barang tidak diterima maka pihak
                                            JastipinAja! akan menghubungi penjual dan penjual harus mengirimkan beberapa dokumen dan
                                             bukti bahwa penjual telah mengirimkan pesanan. Jika penjual tidak bisa memberikan bukti, 
                                             maka JastipinAja! akan mengembalikan dana sepenuhnya kepada pembeli. Dokumen dan bukti yang 
                                             dibutuhkan adalah : (i) Bukti pengiriman barang resmi-kwitansi pengiriman barang; (ii) Foto 
                                             bungkus/informasi paket, termasuk informasi jasa kirim yang bersangkutan, nomor resi, nama 
                                             penjual dan pembeli, nomor kontak dan alamat tujuan pengiriman. Mohon diperhatikan bahwa dana 
                                             yang bersangkutan akan secara otomatis dikirimkan kepada Pembeli apabila anda tidak menjawab 
                                             permintaan dokumen oleh JastipinAja! dalam 2 (dua) hari dari tanggal JastipinAja! menghubungi 
                                             penjual.</span></li>
                                    <li><span> JastipinAja! menyarankan penjual untuk berkomunikasi dengan pembeli lebih lanjut apabila 
                                        terdapat pengaduan komplain dari pembeli. Terdapat 2 pilihan apabila ada pengaduan dari pembeli yaitu : 
                                        (i) Penjual menerima komplain dari pembeli dan menyetujui pengembalian dana kepada pembeli; (2) Mengajukan 
                                        keberatan kepada JastipinAja! jika penjual tidak menyetujui permintaan pembeli, sehingga JastipinAja! melakukan 
                                        mediasi atas masalah tersebut. Penjual disarankan untuk menyiapkan dokumen pendukung alas an penolakan sehingga 
                                        proses mediasi dapat berjalan dengan lancar.</span></li>
                                </ul>
                            </ol>
                        </p>
                        <hr/>

                        <p><span><strong>D. Bagaimana Cara Mengelola Toko</strong></span></p>
                        <p>
                            <ol>
                                <li><span>Harga yang tercantum pada deskripsi produk adalah harga yang belum termasuk ongkos kirim. Ongkos kirim ini akan 
                                    terlihat saat checkout beserta jumlah total pesanan yang harus dibayar.</span></li>
                                <li><span>Anda dapat mengubah harga produk anda kapan pun, tetapi apabila pembeli telah memesan suatu produk, 
                                    harga produk atas pesanan tersebut tidak dapat diubah.</span></li>
                                <li><span>Harga barang sudah termasuk harga packaging.</span></li>
                            </ol>
                        </p>
                        <hr/>

                        <p><span><strong>E. Mengapa Alamat Pengiriman Saya Tidak Didukung Oleh Jasa Kirim?</strong></span></p>
                        <p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Saat ini JastipinAja! bekerjasama dengan Jasa Kirim Paxel dimana belum semua wilayah di Indonesia tercover oleh Paxel.
                           Untuk memastikan apakah alamat anda sudah tercover oleh layanan jasa kirim Paxel dapat klik <a href="https://paxel.co/">DISINI.</a></span>
                        </p>
                        <hr/>

                        <p><span><strong>F. Apakah yang dimaksud dengan Request Produk?</strong></span></p>
                        <p>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Request Produk adalah layanan yang diberikan oleh JastipinAja! untuk memberikan kesempatan bagi Pembeli yang ingin 
                                membeli suatu Barang namun belum tersedia di aplikasi JastipinAja!. Pembeli cukup menuliskan detail mengenai Barang yang diinginkan di halaman Request 
                                Produk, maka selanjutnya akan ada Penjual di aplikasi JastipinAja! yang mengambil Request tersebut.</span>
                        </p>

                    </div>
                </div>
            </div>
        )
    }
}