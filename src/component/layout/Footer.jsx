import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container w-75">
        <h2 className="font-light text-secondary my-3">
          BELANJA ONLINE FASHION PRIA TERBARU
        </h2>
        <p>
          ZALORA Indonesia adalah pusat tren fashion pria, mempunyai ribuan
          produk mulai dari kaos, celana jeans, sepatu kets hingga sepatu
          formal, dompet, dan ikat pinggang. Kami memiliki label desainer dan
          brand terbaru, mencakup beragam gaya mulai modern minimalis,
          professional, akhir pekan santai, dan banyak lagi. Pilihan Kami sangat
          bisa melengkapi gaya Anda dari atas ke bawah dimana Anda dapat
          menemukan kemeja dengan gaya klasik dan kontemporer, dan bahkan
          perlengkapan olahraga seperti sepatu lari, sepatu slip on, pakaian,
          kaos lengan pendek, kaos lengan panjang, kaos polo dan perlengkapan
          olahraga. Selain pakaian, ZALORA Indonesia juga menyediakan sejumlah
          aksesoris untuk melengkapi gayamu. Berbagai jenis jam tangan, seperti
          smart watch, jam tangan klasik, dan jam mewah. Koleksi tas lengkap:
          tas punggung, ransel, selempang, dan tas laptop. ZALORA Indonesia juga
          memenuhi kebutuhan perawatan pria, mulai dari perawatan kulit dan
          rambut, serta kebutuhan mencukur dan parfum. Kacamata pria juga
          tersedia dan Anda dapat memilih model yang trendi atau fungsional.
          Selain pakaian sehari-hari tersedia juga perlengakapan sholat dan baju
          koko untuk dikenakan saat beribadah serta masih banyak lagi. Teruntuk
          pria yang selalu ingin membuat kesan terbaik melalui penampilan,
          ZALORA Indonesia adalah pilihan tepat dan memiliki semua yang Anda
          butuhkan. Koleksi Lengkap Fashion Pria dari Brand-brand Terbaik
          Fashion tidak hanya bagi kaum wanita, fashion juga sangat erat
          hubungannya dengan para pria dan seolah sudah menjadi kebutuhan. Oleh
          sebab itu ZALORA Indonesia juga berupaya menjawab kebutuhan fashion
          pria ini dengan menawarkan berbagai macam produk fashion lengkap dari
          mulai pakaian pria, sepatu pria, aksesoris pria, dan juga baju muslim
          untuk pria dengan harga spesial. Brand-brand ternama lokal dan
          internasional dengan kualitas terbaik yang siap memberikan kepuasan
          akan trend fashion pria saat ini dapat Anda jumpai di ZALORA
          Indonesia. Untuk tampil menarik dan lebih baik selalu ikuti
          perkembangan fashion pria bersama ZALORA Indonesia. Kami juga
          memberikan layanan GRATIS pengembalian jika barang yang Anda pesan
          tidak sesuai. Disaat Anda mencari kebutuhan fashion pria, ZALORA
          Indonesia adalah toko{" "}
        </p>
      </div>
      <footer className="py-4 flex-shrink-0 bg-dark">
        <div className="container w-75 py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">ZALORA</h5>
              <p className="small text-light">
                Sebagai Pusat Fashion Online di Asia, kami menciptakan
                kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas
                jangkauan produk, mulai dari produk internasional hingga produk
                lokal dambaan. Kami menjadikan Anda sebagai pusatnya. Bersama
                ZALORA, You Own Now.
              </p>
              <h5 className="font-lightBold text-white">
                Layanan Pengaduan Konsumen ZALORA
              </h5>
              <p className="small text-light">
                E-mail: customer@id.zalora.com <br />{" "}
                <strong>
                  Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                  Kementerian Perdagangan RI
                </strong>{" "}
                <br /> WhatsApp: +62 853 1111 1010
              </p>
              <p className="small text-light mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <a className="text-primary" href="#">
                  Bootstrapious.com
                </a>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="font-bold text-white mb-3">LAYANAN</h5>
              <ul className="list-unstyled text-light">
                <li>
                  <a href="#">Bantuan</a>
                </li>
                <li>
                  <a href="#">Cara pengembalian</a>
                </li>
                <li>
                  <a href="#">Product Index</a>
                </li>
                <li>
                  <a href="#">Promo partner kami</a>
                </li>
                <li>
                  <a href="#">Konfirmasi Transfer</a>
                </li>
                <li>
                  <a href="#">Hubungi Kami</a>
                </li>
                <li>
                  <a href="#">Cara Berjualan</a>
                </li>
                <li>
                  <a href="#">Pengembalian Ongkir</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">TENTANG KAMI</h5>
              <ul className="list-unstyled text-muted">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
