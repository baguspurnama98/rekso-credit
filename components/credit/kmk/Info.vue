<template>
  <div class="text-gray-800 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri KreditModal Kerja (KMK)</b> adalah fasilitas kredit yang diberikan untuk memenuhi kebutuhan modal kerja
      yang habis dalam satu siklus usaha dan atau kebutuhan modal kerja yang bersifat khusus seperti untuk membiayai
      inventory / piutang / proyek atau kebutuhan khusus lainnya.
    </p>
    <p class="font-bold">Fitur Kredit:</p>

    <ul class="list-none pl-4">
      <li class="font-bold">a. Kredit Modal Kerja Revolving</li>
      <ul class="list-disc pl-7">
        <li>Limit kredit di atas Rp 500 Juta s.d Rp 25 Miliar</li>
        <li>Kredit diberikan dalam valuta Rupiah dan valuta asing</li>
        <li>Pencairan dilakukan kapan saja sesuai kebutuhan</li>
        <li>Bunga dibayar tiap bulan, pokok pinjaman dibayar kapan saja paling lambat pada saat jatuh tempo kredit</li>
        <li>Jangka waktu maksimal 1 tahun dan dapat diperpanjang</li>
      </ul>
      <li class="font-bold">b. Kredit Modal Kerja Non Revolving</li>
      <ul class="list-disc pl-7">
        <li>Limit kredit di atas Rp 500 Juta s.d Rp 25 Miliar</li>
        <li>Kredit diberikan dalam valuta Rupiah dan valuta asing</li>
        <li>Pencairan dilakukan sekaligus</li>
        <li>Bunga dibayar dan pokok dibayar tiap bulan untuk yang bersifat aflopend (angsuran)</li>
        <li>
          Bunga dibayar tiap bulan, pokok pinjaman dibayar kapan saja paling lambat pada saat jatuh tempo kredit untuk
          yang bersifat non aflopend (bukan angsuran)
        </li>
        <li>Jangka waktu maksimal 5 tahun dan tidak dapat diperpanjang</li>
      </ul>
    </ul>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <p class="font-bold">Persyaratan Kredit Berdasarkan Nasabah:</p>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center font-bold">
            <th scope="col" class="py-3 px-3">No.</th>
            <!-- <th scope="col" class="py-3 px-3">Nasabah</th> -->
            <th scope="col" class="py-3 px-3">Perseorangan</th>
            <th scope="col" class="py-3 px-3">Badan Usaha</th>
         
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">1</th>
            <td class="py-2 px-3">Formulir Aplikasi</td>
            <td class="py-2 px-3">Formulir aplikasi</td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">2</th>
            <td class="py-2 px-3">Copy KTP pemohon & suami/istri</td>
            <td class="py-2 px-3">Copy KTP seluruh pengurus dan pemegang saham perusahaan</td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
            <td class="py-2 px-3">Copy surat nikah / cerai</td>
            <td class="py-2 px-3">Copy rekening koran tabungan/giro minimal 6 bulan terakhir</td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">4</th>
            <td class="py-2 px-3">Copy kartu keluarga</td>
            <td class="py-2 px-3">Copy NPWP pribadi/perusahaan</td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">5</th>
            <td class="py-2 px-3">Copy rekening korang tabungan/giro minimal 6 bulan terakhir</td>
            <td class="py-2 px-3">Copy laporan keuangan</td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">6</th>
            <td class="py-2 px-3">Copy perizinan usaha (seperti SIUP, SITU, TDP/NIB dll)</td>
            <td class="py-2 px-3">Copy Akte Pendirian perusahaan dan akta perubahannya</td>
          </tr>

          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">7</th>
            <td class="py-2 px-3">Copy dokumen kepemilikan agunan (seperti SHM, SHGB/SHMSRS dll)</td>
            <td class="py-2 px-3">Copy perizinan usaha (seperti SIUP, SITU, TDP/NIB dll)</td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">8</th>
            <td class="py-2 px-3">Kredit diberikan dalam valuta rupiah dan valuta asing</td>
            <td class="py-2 px-3">Copy dokumen kepemilikan agunan (seperti SHM/SHGB/SHMSRS dll)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoKMK',
}
</script>
