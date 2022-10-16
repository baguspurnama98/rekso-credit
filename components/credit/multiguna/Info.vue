<template>
  <div class="text-gray-800 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri Multiguna</b> kredit untuk membiayai berbagai keperluan konsumtif dengan jaminan berupa rumah
      tinggal/rumah toko (ruko)/rumah kantor (rukan)/rumah susun hunian (apartemen), termasuk untuk tujuan: Take Over
      (Pemindahan fasilitas kredit sejenis dari bank lain) atau pun Top Up (Penambahan limit atas fasilitas Multiguna
      Mandiri yang telah berjalan)
    </p>
    <p class="font-bold">Syarat Pengajuan:</p>

    <ul class="list-disc pl-4">
      <li>Warga Negara Indonesia (WNI) dan berdomisili di Indonesia.</li>
      <li>
        Berusia minimal 21 tahun dan saat kredit berakhir maksimal 55 tahun untuk pegawai; atau maksimal 60 tahun untuk
        professional/wiraswasta.
      </li>
      <li>Jenis Profesi:</li>
      <ul class="list-disc pl-4">
        <li class="font-bold">Pegawai:</li>
        <ul class="px-4">
          <li>- Pegawai tetap dengan masa kerja minimum 2 tahun</li>
          <li>- Pegawai kontrak dengan ketentuan:</li>
          <ul class="list-disc pl-10">
            <li>Minimum jabatan: manager/supervisor atau sebagai professional</li>
            <li>Minimum Income Rp. 5 juta</li>
          </ul>
        </ul>
        <li class="font-bold">Profesional atau Wiraswasta:</li>
        <ul class="pl-4">
          <li>
            - Memiliki pengalaman di bidang usahanya minimum 2 (dua) tahun berturut-turut (dibuktikan oleh ijin
            usaha/praktek)
          </li>
          <li>- Memilki NPWP atau SPT Tahunan PPh orang pribadi sesuai peraturan yang berlaku</li>
          <li>- Minimum penghasilan Rp 5.000.000 (lima juta rupiah) per-bulan</li>
          <li>- Memiliki agunan yang dapat diikat sempurna</li>
        </ul>
      </ul>
      <li>Dokumen yang dibutuhkan, meliputi:</li>
    </ul>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center">
          <tr>
            <th scope="col" class="py-3 px-3">No.</th>
            <th scope="col" class="py-3 px-3">Dokumen</th>
            <th scope="col" class="py-3 px-3">Pegawai</th>
            <th scope="col" class="py-3 px-3">Profesional</th>
            <th scope="col" class="py-3 px-3">Wiraswasta</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">1</th>
            <td class="py-2 px-3">Dokumen formulir aplikasi yang diisi lengkap dan benar</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">2</th>
            <td class="py-2 px-3">Fotokopi KTP Pemohon & pasangan (jika telah menikah/cerai)</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
            <td class="py-2 px-3">Fotokopi Surat Nikah/Cerai (jika telah menikah/cerai)</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">4</th>
            <td class="py-2 px-3">Fotokopi Kartu Keluarga</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">5</th>
            <td class="py-2 px-3">Fotokopi rekening koran/tabungan 3 bulan terakhir</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">6</th>
            <td class="py-2 px-3">Fotokopi NPWP Pribadi atau SPT Tahunan PPh</td>
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
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">7</th>
            <td class="py-2 px-3">Fotokopi Slip Gaji atau Surat Keterangan Penghasilan</td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">8</th>
            <td class="py-2 px-3">Fotokopi neraca dan laporan laba rugi terbaru</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">9</th>
            <td class="py-2 px-3">Fotokopi Akte Pendirian Perusahaan dan izin usaha</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">10</th>
            <td class="py-2 px-3">Fotokopi sertifikat praktik profesional</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">11</th>
            <td class="py-2 px-3">
              Fotokopi dokumen kepemilikan agunan berupa Sertipikat Agunan berupa Hak Milik (SHM); atau Sertipikat Hak
              Guna Bangunan (SHGB); atau Sertipikat Hal atas Satuan Rumah Susun (SHMSRS), dan IMB&PBB
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
    </div>
  </div>
</template>
<script>
import CorrectIcon from '../../base/CorrectIcon'

export default {
  name: 'InfoMultiguna',
  components: { CorrectIcon },
}
</script>
