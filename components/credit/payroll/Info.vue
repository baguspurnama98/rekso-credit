<template>
  <div class="text-gray-800 sm:text-base text-sm">
    <p class="mb-2 text-justify">
      <b>Mandiri Payroll</b> merupakan fasilitas penggajian di Bank Mandiri, serta dapatkan fasilitas keuangan yang
      bernilai lebih khusus untuk karyawan anda.
    </p>
    <p class="font-bold">Benefit:</p>
    <ul class="list-disc pl-4">
      <li>
        Setoran awal pembukaan rekening mulai Rp.10.000 atau disesuaikan dengan pengkreditan gaji pertama yang masuk
      </li>
      <li>Saldo minimum Rp. 10.000</li>
      <li>Biaya administrasi ringan</li>
      <li>
        Nikmati benefit khusus untuk fasilitas pinjaman, mulai dari mandiri kartu kredit, mandiri kredit pemilikan
        rumah, mandiri kredit serbaguna mikro, serta mandiri kredit kendaraan bermotor
      </li>
    </ul>

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
      <p class="font-bold">Syarat & Ketentuan:</p>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-blue-100 text-center font-bold">
          <th scope="col" class="py-3 px-3">Jenis Nasabah</th>
          <th scope="col" class="py-3 px-3">Perusahaan yang bekerja sama dengan BMRI</th>
          <th scope="col" class="py-3 px-3">Perusahaan yang tidak bekerja sama dengan BMRI</th>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">WNI</th>
            <td class="py-2 px-3">
              <ul class="list-none">
                <li>- E-KTP</li>
                <li>- NPWP</li>
              </ul>
            </td>
            <td class="py-2 px-3">
              <ul class="list-none">
                <li>- E-KTP</li>
                <li>- ID Card / Surat keterangan kerja</li>
              </ul>
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">WNA</th>
            <td class="py-2 px-3">
              <ul class="list-none">
                <li>- Passpor dan KIMS/KITAS/KITAP</li>
                <li>- NPWP / TIN (Tax Identification Number)</li>
              </ul>
            </td>
            <td class="py-2 px-3">
              <ul class="list-none">
                <li>- Passpor dan KIMS/KITAS/KITAP</li>
                <li>- NPWP / TIN (Tax Identification Number)</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoInvest',
}
</script>
