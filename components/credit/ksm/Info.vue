<template>
  <div class="text-gray-800 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri KSM</b> adalah fasilitas kredit yang diberikan kepada pegawai yang memiliki penghasilan tetap atau
      profesi tetap, pensiunan atau kepada target market tertentu untuk membiayai berbagai macam kebutuhannya. Fasilitas
      kredit ini dapat digunakan untuk berbagai kebutuhan antara lain: pendidikan, pernikahan, kesehatan, renovasi rumah
      dan lainnya.
    </p>
    <p class="font-bold">Syarat Pengajuan:</p>

    <ul class="list-disc px-4">
      <li>Warga Negara Indonesia (WNI) & berdomisili di Indonesia.</li>
      <li>Minimal usia 21 tahun maksimum sebelum usia pensiun pada saat kredit lunas.</li>
      <li>Masa kerja pegawai tetap min. 1 tahun.</li>
      <li>Penghasilan minimum 3 juta.</li>
    </ul>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center">
          <tr>
            <th scope="col" class="py-3 px-3">No.</th>
            <th scope="col" class="py-3 px-3">Dokumen</th>
            <th scope="col" class="py-3 px-3">PNS/TNI/POLRI</th>
            <th scope="col" class="py-3 px-3">BUMN/BUMD/SWASTA</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">1</th>
            <td class="py-2 px-3">Asli Formulir Aplikasi diisi lengkap dan benar</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">2</th>
            <td class="py-2 px-3">Copy KTP Pemohon yang masih berlaku</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
            <td class="py-2 px-3">Copy NPWP (khusus limit >Rp 50 Juta)</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">4</th>
            <td class="py-2 px-3">Asli Slip gaji / Surat keterangan penghasilan terakhir (khusus Non Payroll)</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
            <td class="py-2 px-3">Asli SK Pengangkatan Pegawai dari Instansi (khusus TNI/POLRI)</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5 sm:w-1/2 w-full">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center">
          <tr>
            <th scope="col" class="py-3 px-3">Alokasi Biaya</th>
            <th scope="col" class="py-3 px-3">Biaya Kredit</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Premi Asuransi Jiwa</th>
            <td class="py-2 px-3">Sesuai Rate</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Provisi</th>
            <td class="py-2 px-3">Sampai dengan 1% dari limit kredit</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50 text-left">
            <th scope="row" class="py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Administrasi</th>
            <td class="py-2 px-3">Sampai dengan Rp 100 Ribu</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CorrectIcon from '../../base/CorrectIcon'

export default {
  name: 'InfoKSM',
  components: { CorrectIcon },
}
</script>
