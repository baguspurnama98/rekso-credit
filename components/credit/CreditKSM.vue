<template>
  <div
    id="accordion-color"
    data-accordion="collapse"
    data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
  >
    <!-- 1 -->
    <h2 id="accordion-color-heading-1">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 rounded-t-xl focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-1"
        aria-expanded="true"
        aria-controls="accordion-color-body-1"
        @click="toggleAccordion('ksm')"
      >
        <span>Pengajuan KSM</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': ksmIsOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </h2>
    <div
      id="accordion-color-body-1"
      :class="{
        hidden: !ksmIsOpen,
      }"
      aria-labelledby="accordion-color-heading-1"
    >
      <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
        <div class="text-gray-800 sm:text-base text-sm">
          <p class="mb-2 text-justify">
            <b>Mandiri KSM</b> adalah fasilitas kredit yang diberikan kepada pegawai yang memiliki penghasilan tetap
            atau profesi tetap, pensiunan atau kepada target market tertentu untuk membiayai berbagai macam
            kebutuhannya. Fasilitas kredit ini dapat digunakan untuk berbagai kebutuhan antara lain; pendidikan,
            pernikahan, kesehatan, renovasi rumah dan lainnya.
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
                  <th scope="col" class="py-3 px-3">Jenis Dokumen</th>
                  <th scope="col" class="py-3 px-3">PNS/TNI/POLRI</th>
                  <th scope="col" class="py-3 px-3">BUMN/BUMD/SWASTA</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">1</th>
                  <td class="py-2 px-3">Asli Formulir Aplikasi diisi lengkap dan benar</td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">2</th>
                  <td class="py-2 px-3">Copy KTP Pemohon yang masih berlaku</td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-50 border-b">
                  <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
                  <td class="py-2 px-3">Copy NPWP (khusus limit >Rp 50 Juta)</td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-50 border-b">
                  <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">4</th>
                  <td class="py-2 px-3">Asli Slip gaji / Surat keterangan penghasilan terakhir (khusus Non Payroll)</td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr class="bg-white hover:bg-gray-50 border-b">
                  <th scope="row" class="text-center py-2 px-3 font-medium text-gray-900 whitespace-nowrap">3</th>
                  <td class="py-2 px-3">Asli SK Pengangkatan Pegawai dari Instansi (khusus TNI/POLRI)</td>
                  <td class="py-2 px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 mx-auto"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
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
        <div class=" w-full flex items-cente">
         
          <a class="mx-auto" href="https://wa.me/628976634788?text=Hai,+saya+ingin+bertanya+terkait+Produk+KMS.+Terima+kasih." target="_blank">
          <button type="button" class="text-white mt-4 bg-green-400 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-full text-sm px-5 py-2 text-center inline-flex items-center">
  <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#fff"
              d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
            ></path>
            <path
              fill="#fff"
              d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
              clip-rule="evenodd"
            ></path>

          </svg>
  Hubungi Kami
</button></a>
        </div>
      </div>
    </div>

    <!-- 2 -->
    <h2 id="accordion-color-heading-2">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-2"
        aria-expanded="true"
        aria-controls="accordion-color-body-2"
        @click="toggleAccordion('kpr')"
      >
        <span>Pengajuan KPR</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': kprIsOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </h2>
    <div
      id="accordion-color-body-2"
      :class="{
        hidden: !kprIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <div class="p-5 font-normal">
        <div class="text-gray-800 px-3 sm:text-base text-sm">
          <ul class="list-disc">
            <li>Warga Negara Indonesia (WNI) dan berdomisili di Indonesia.</li>
            <li>
              Umur minimal 21 tahun, maksimal 55 tahun (pegawai) dan 60 tahun (profesional/wiraswasta) saat masa kredit
              berakhir.
            </li>
            <li>
              Memiliki pekerjaan dan penghasilan tetap, dengan masa kerja/usaha minimal 1 (satu) tahun (pegawai) atau 2
              (dua) tahun (profesional/wiraswasta).
            </li>
            <li>Dokumen yang harus di penuhi.</li>
          </ul>
          <h3 class="mt-3 font-semibold">Biaya yang harus dipenuhi</h3>
          <ul class="list-disc">
            <li>Provisi</li>
            <li>Administrasi</li>
            <li>Premi asuransi (jiwa dan kerugian)</li>
            <li>Pengikatan Agunan</li>
            <li>Taksasi Agunan</li>
            <li>Notaris</li>
            <li>Balik Nama</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('cc')"
      >
        <span>Pengajuan Kartu Kredit</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': ccIsOpen }"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </h2>
    <div
      id="accordion-color-body-3"
      :class="{
        hidden: !ccIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <div class="p-5 font-normal border border-gray-200">
        <div class="text-gray-800 px-3 sm:text-base text-sm">
          <ul class="list-disc">
            <li>Foto asli KTP (harus jelas & tidak boleh fotokopi).</li>
            <li>Foto selfie/swafoto dengan memegang KTP asli (wajah aplikan dan KTP asli harus jelas).</li>
            <li>Foto Slip Gaji.</li>
            <li>Foto SPT Pajak.</li>
            <li>Foto NPWP.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreditKSM',
  data: () => ({
    ccIsOpen: false,
    ksmIsOpen: false,
    kprIsOpen: false,
  }),
  methods: {
    toggleAccordion(x) {
      if (x === 'ksm') {
        this.ksmIsOpen = !this.ksmIsOpen
      }
      if (x === 'kpr') {
        this.kprIsOpen = !this.kprIsOpen
      }
      if (x === 'cc') {
        this.ccIsOpen = !this.ccIsOpen
      }
    },
  },
}
</script>
