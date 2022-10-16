<template>
  <div class="text-gray-800 px-3 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri KPR</b> adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk
      membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak. Terdapat beberapa pilihan Mandiri
      KPR, diantaranya adalah Mandiri KPR Take Over, Mandiri KPR Top Up, Mandiri KPR Flexible, dan Mandiri KPR Angsuran
      Berjenjang
    </p>
    <p class="font-bold">Syarat Pengajuan:</p>
    <ul class="list-disc px-4">
      <li>Warga Negara Indonesia (WNI) dan berdomisili di Indonesia.</li>
      <li>
        Umur minimal 21 tahun, maksimal 55 tahun (pegawai) dan 60 tahun (profesional/wiraswasta) saat masa kredit
        berakhir.
      </li>
      <li>
        Memiliki pekerjaan dan penghasilan tetap, dengan masa kerja/usaha minimal 1 (satu) tahun (pegawai) atau 2 (dua)
        tahun (profesional/wiraswasta).
      </li>
      <li>Dokumen yang harus di penuhi, meliputi:</li>
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
            <td class="py-2 px-3">Fotokopi KTP Pemohon & suami/istri</td>
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
            <td class="py-2 px-3">Fotokopi Surat Nikah/Cerai (bagi yg telah menikah/cerai)</td>
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
            <td class="py-2 px-3">Fotokopi NPWP Pribadi</td>
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
            <td class="py-2 px-3">
              Dokumen asli slip gaji terakhir/ surat keterangan penghasilan dan surat keterangan jabatan
            </td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">8</th>
            <td class="py-2 px-3">Fotokopi neraca laba rugi/informasi keuangan terakhir</td>
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
            <td class="py-2 px-3">Fotokopi Akte Pendirian Perusahaan dan izin-izin usaha</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">10</th>
            <td class="py-2 px-3">Fotokopi izin praktek profesi</td>
            <td class="py-2 px-3"></td>
            <td class="py-2 px-3">
              <CorrectIcon />
            </td>
            <td class="py-2 px-3"></td>
          </tr>
          <tr class="bg-white hover:bg-gray-50 border-b">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">11</th>
            <td class="py-2 px-3">Fotokopi dokumen kepemilikan agunan : SHM/SHGB, IMB & PBB</td>
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
    <div class="">
      <p class="mt-5 font-semibold">Biaya yang harus dipenuhi</p>
      <div class="grid sm:grid-cols-2 grid-cols-1 sm:gap-4">
        <ul class="list-disc px-4">
          <li>Provisi</li>
          <li>Administrasi</li>
          <li>Premi asuransi (jiwa dan kerugian)</li>
          <li>Pengikatan Agunan</li>
        </ul>
        <ul class="list-disc px-4 sm:px-0">
          <li>Taksasi Agunan</li>
          <li>Notaris</li>
          <li>Balik Nama</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import CorrectIcon from '../../base/CorrectIcon'
export default {
  name: 'InfoKPR',
  components: { CorrectIcon },
}
</script>
