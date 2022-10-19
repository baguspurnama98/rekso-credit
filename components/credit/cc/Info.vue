<template>
  <div class="text-gray-800 px-3 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri Kartu Kredit</b> menyediakan berbagai ragam kartu kredit yang sesuai dengan kebutuhan dan gaya hidup
      Anda, terutama kenyamanan belanja kebutuhan sehari-hari, travel, otomotif, dan golf.
      <a href="https://www.mandirikartukredit.com/produk" target="_blank" class="text-blue-500 hover:underline">
        Cek Selengkapnya.</a
      >
    </p>
    <p class="font-bold">Syarat Pengajuan:</p>
    <ul class="list-disc px-4">
      <li>Foto asli KTP (harus jelas & tidak boleh fotokopi).</li>
      <li>Foto selfie/swafoto dengan memegang KTP asli (wajah aplikan dan KTP asli harus jelas).</li>
      <li>Foto Slip Gaji.</li>
      <li>Foto SPT Pajak.</li>
      <li>Foto NPWP.</li>
    </ul>

    <div>
      <p class="mt-5 font-bold sm:text-3xl text-2xl text-center mb-5">Daftar Produk</p>
      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">Traveling</p>
        <p class="mb-5 sm:text-center text-justify">
          Untuk Anda yang gemar travelling, rencanakan perjalanan Anda yang berikutnya dengan Mandiri Signature dan
          Mandiri Skyz Card. Dapatkan nilai tukar kurs yang kompetitif, asuransi perjalanan, dan khusus untuk Mandiri
          Signature, Anda akan mendapatkan 3 fiestapoin untuk setiap transaksi Rp 20.000,-serta dapat terbang lebih
          cepat dengan menukarkan 100 fiestapoin untuk 100 GarudaMiles.
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/signature">
              <p class="text-blue-800 text-center font-bold">Mandiri Signature</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/signature-contactless_1.png')"
                alt=""
              />
            </a>
          </div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/traveloka-mandiri">
              <p class="text-blue-800 text-center font-bold">Mandiri Traveloka</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/traveloka-front.png')"
                alt=""
              />
            </a>
          </div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/skyz-card">
              <p class="text-blue-800 text-center font-bold">Mandiri SKYZ</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/skyz-t01-contactless.png')"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">Automotives</p>
        <p class="mb-5 sm:text-center text-justify">
          Dipersembahkan khusus untuk Anda yang mementingkan kenyamanan berkendaraan atau kebutuhan otomotif lainnya.
          Dapatkan upgrade untuk pembelian BBM, perlindungan asuransi, dan 2x Fiestapoin untuk transaksi di SPBU
          Pertamina.
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div></div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/pertamina">
              <p class="text-blue-800 text-center font-bold">Mandiri Co Brand Pertamina</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/pertamina-contactless.png')"
                alt=""
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">Golf</p>
        <p class="mb-5 sm:text-center text-justify">
          Khusus bagi penggemar golf, gabungkan keuntungan kartu kredit Mandiri dengan akses ke fasilitas golf yang
          terbaik, termasuk rangkaian turnamen golf yang diselenggarakan oleh Bank Mandiri.
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/golf-signature">
              <p class="text-blue-800 text-center font-bold">Mandiri Golf Signature</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/golf-signature-contactless.png')"
                alt=""
              />
            </a>
          </div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/golf-platinum">
              <p class="text-blue-800 text-center font-bold">Mandiri Golf Platinum</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/golf-platinum-contactless_1.png')"
                alt=""
              />
            </a>
          </div>
          <div></div>
        </div>
      </div>
      <!--  -->
      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">Lifestyle</p>
        <p class="mb-5 sm:text-center text-justify">
          Sederhana itu indah. Kebutuhan sehari-hari Anda sudah tercakup dalam produk Mandiri kartu kredit Regular.
          Kumpulkan Fiestapoinnya dan tukarkan dengan berbagai penawaran menarik dari maskapai terkemuka, toko retail
          dan online, restoran, hotel, bahkan tempat rekreasi serta konser artis internasional di luar negeri.
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/platinum">
              <p class="text-blue-800 text-center font-bold">Mandiri Platinum</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/platinum-livin-contactless.png')"
                alt=""
              />
            </a>
          </div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/jcb">
              <p class="text-blue-800 text-center font-bold">Mandiri Precious</p>
              <img data-aos="fade-up" data-aos-once="true" :src="require('~/assets/img/cc/jcb-white.png')" alt="" />
            </a>
          </div>
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/mandiri-cobrand-shopee">
              <p class="text-blue-800 text-center font-bold">Mandiri Kartu Kredit Shopee</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/shopee-contactless_1.png')"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">World Elite</p>
        <p class="mb-5 sm:text-center text-justify">
          Mandiri World Elite merupakan kartu kredit level tertinggi yang diterbitkan oleh Bank Mandiri. Kartu ini
          eksklusif diperuntukkan bagi nasabah Private Banking Bank Mandiri (nasabah dengan total dana kelolaan ≥ Rp20
          Miliar).
        </p>
        <div class="grid sm:grid-cols-3 grid-cols-1 gap-8">
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/world-elite">
              <p class="text-blue-800 text-center font-bold">Mandiri World Elite</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/world-elite-contactless.png')"
                alt=""
              />
            </a>
          </div>

          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/prioritas">
              <p class="text-blue-800 text-center font-bold">Mandiri Prioritas</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/world-priority.png')"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <p class="text-header-gradient text-2xl font-semibold text-center">Corporate</p>
        <p class="mb-5 sm:text-center text-justify">
          Corporate Card merupakan kartu kredit yang diterbitkan untuk memenuhi kebutuhan transaksi dan perjalanan
          bisnis perusahaan dengan menyediakan kemudahan bagi perusahaan untuk mengontrol setiap transaksi yang
          dilakukan oleh pegawai.
        </p>
        <div class="grid sm:grid-cols-4 grid-cols-1 gap-8">
          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/corporate">
              <p class="text-blue-800 text-center font-bold">Mandiri Corporate Card</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/corporate-mastercard-contactless.png')"
                alt=""
              />
            </a>
          </div>

          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/smecard">
              <p class="text-blue-800 text-center font-bold">Mandiri SME Card</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/corporate-mastercard-contactless.png')"
                alt=""
              />
            </a>
          </div>

          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/kartu-kredit-pemerintah">
              <p class="text-blue-800 text-center font-bold">Kartu Kredit Pemerintah</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/kartu-kredit-pemerintah-platinum-contactless.png')"
                alt=""
              />
            </a>
          </div>

          <div class="hover:shadow-2xl">
            <a href="https://www.mandirikartukredit.com/produk/kartu-kredit-pemerintah-domestik">
              <p class="text-blue-800 text-center font-bold"> Mandiri Kartu Kredit Pemerintah Domestik</p>
              <img
                data-aos="fade-up"
                data-aos-once="true"
                :src="require('~/assets/img/cc/kkpd-depan-web_1.png')"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center">
          <tr>
            <th scope="col" class="py-3 px-3">Dokumen</th>
            <th scope="col" class="py-3 px-3">Pegawai</th>
            <th scope="col" class="py-3 px-3">Profesional</th>
            <th scope="col" class="py-3 px-3">Wiraswasta</th>
            <th scope="col" class="py-3 px-3">Lainnya</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <td class="py-2 px-3">Fotokopi KTP (WNI), Paspor dan KITAS/ KITAP (WNA)</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <td class="py-2 px-3">
              Surat keterangan pendapatan dari perusahaan/slip gaji/fotokopi bukti setoran pajak/ fotokopi mutasi
              rekening minimum 3 bulan terakhir/ dokumen lain yang menginformasikan pendapatan
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <td class="py-2 px-3">
              Fotokopi SPPT PPh 21 (form 1721-A1)/ fotokopi mutasi rekening minimum 3 bulan terakhir/ dokumen lain yang
              menginformasikan pendapatan
            </td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <td class="py-2 px-3">Fotokopi Surat Ijin Praktek</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <td class="py-2 px-3">Fotokopi SIUP/TDP dan/atau Akte Pendirian berikut perubahannya</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <td class="py-2 px-3">Aplikasi Mandiri Kartu Kredit yang telah diisi dan ditandatangani</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <td class="py-2 px-3">
              Fotokopi NPWP atau SPPT PPh 21 form 1721-A1 untuk pengajuan limit kredit (total eksposur) diatas Rp. 50
              juta
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <!-- <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-8 w-full">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center">
          <tr>
            <th scope="col" class="py-3 px-3">Biaya</th>
            <th scope="col" class="py-3 px-3">Deskripsi</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Cash Advance</th>
            <td class="py-2 px-3">6% dari jumlah pengambilan tunai/ Rp. 100.000,- mana yang lebih besar</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Keterlambatan Pembayaran</th>
            <td class="py-2 px-3">1% dari jumlah tagihan maksimum Rp 100.000,-**</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Pembayaran Minimum</th>
            <td class="py-2 px-3">5% dari jumlah tagihan/ Rp 50.000 mana yang lebih besar**</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Mandiri Protection</th>
            <td class="py-2 px-3">0,55% dari total tagihan</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Bunga Retail</th>
            <td class="py-2 px-3">1,75%*</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Bunga Cash Advance</th>
            <td class="py-2 px-3">1,75%*</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Membership Fee Kartu Utama</th>
            <td class="py-2 px-3">Rp. 900.000,-/ Tahun</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Membership Fee Kartu Tambahan</th>
            <td class="py-2 px-3">Rp. 450.000,-/ Tahun</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Pelampauan Batas Kredit</th>
            <td class="py-2 px-3">Rp. 150.000,-</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Ganti Kartu Hilang</th>
            <td class="py-2 px-3">Rp. 50.000,-</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Ganti Kartu Sebab Lain</th>
            <td class="py-2 px-3">Free</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Naik Limit</th>
            <td class="py-2 px-3">Free</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Copy Sales Draft</th>
            <td class="py-2 px-3">Rp. 30.000,-</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Copy Lembar Tagihan</th>
            <td class="py-2 px-3">Rp. 25.000,-</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Pembayaran Melalui Cabang</th>
            <td class="py-2 px-3">Rp. 25.000,-</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Pembayaran Melalui Direct Debit</th>
            <td class="py-2 px-3">Free</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Pembayaran Melalui ATM</th>
            <td class="py-2 px-3">Free</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Cetak Lembar Tagihan</th>
            <td class="py-2 px-3">Rp. 20.000,-</td>
          </tr>
         
        </tbody>
      </table>
    </div> -->
    <!-- <div class="">
      <p class="mt-5 font-semibold">Biaya & Bunga</p>
      <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
        <ul class="list-disc px-4">
          <li></li>
          <li></li>
          <li></li>
          <li>Mandiri Protection</li>
          <li>Bunga Retail</li>
          <li>Bunga Cash Advance</li>
          <li>Membership Fee Kartu Utama</li>
          <li>Membership Fee Kartu Tambahan</li>
          <li>Biaya Pelampauan Batas Kredit</li>
          <li>Biaya Ganti Kartu Hilang</li>
          <li>Biaya Ganti Kartu Sebab Lain</li>
          <li>Biaya Naik Limit</li>
          <li>Biaya Copy Sales Draft</li>
          <li>Biaya Copy Lembar Tagihan</li>
          <li>Pembayaran Melalui Cabang</li>
          <li>Pembayaran Melalui Direct Debit</li>
          <li>Pembayaran Melalui ATM</li>
          <li>Biaya Cetak Lembar Tagihan</li>
        </ul>
        <ul class="list-disc px-4 sm:px-0">
          <li>6% dari jumlah pengambilan tunai/ Rp. 100.000,- mana yang lebih besar</li>
          <li>1% dari jumlah tagihan maksimum Rp 100.000,-**</li>
          <li>5% dari jumlah tagihan/ Rp 50.000 mana yang lebih besar*</li>
          <li>0,55% dari total tagihan</li>
          <li>1,75%*</li>
          <li>1,75%*</li>
          <li>Rp. 900.000,-/ Tahun</li>
          <li>Rp. 450.000,-/ Tahun</li>
          <li>Rp. 150.000,-</li>
          <li>Rp. 50.000,-</li>
          <li>Free</li>
          <li>Free</li>
          <li>Rp. 30.000,-</li>
          <li>Rp. 25.000,-</li>
          <li>Rp. 25.000,-</li>
          <li>Free</li>
          <li>Free</li>
          <li>Rp. 20.000,-</li>
        </ul>
      </div>
    </div> -->
  </div>
</template>
<script>
// import CorrectIcon from '../../base/CorrectIcon'
export default {
  name: 'InfoKPR',
  // components: { CorrectIcon },
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
