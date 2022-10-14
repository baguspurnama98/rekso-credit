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
                  <th scope="row" class=" py-2 px-3 font-medium text-gray-900 whitespace-nowrap">Biaya Administrasi</th>
                  <td class="py-2 px-3">Sampai dengan Rp 100 Ribu</td>
                </tr>
              </tbody>
            </table>
          </div>
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
    <!-- <h2 id="accordion-color-heading-2">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
        data-accordion-target="#accordion-color-body-2"
        aria-expanded="false"
        aria-controls="accordion-color-body-2"
      >
        <span>Is there a Figma file available?</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
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
    <div id="accordion-color-body-2" class="hidden" aria-labelledby="accordion-color-heading-2">
      <div class="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
          has a design equivalent in our Figma file.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out the
          <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline"
            >Figma design system</a
          >
          based on the utility classes from Tailwind CSS and components from Flowbite.
        </p>
      </div>
    </div>

 
    <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="false"
        aria-controls="accordion-color-body-3"
      >
        <span>What are the differences between Flowbite and Tailwind UI?</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
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
    <div id="accordion-color-body-3" class="hidden" aria-labelledby="accordion-color-heading-3">
      <div class="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          The main difference is that the core components from Flowbite are open source under the MIT license, whereas
          Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
          components, whereas Tailwind UI offers sections of pages.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
          technical reason stopping you from using the best of two worlds.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
        <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
          <li>
            <a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline"
              >Flowbite Pro</a
            >
          </li>
          <li>
            <a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline"
              >Tailwind UI</a
            >
          </li>
        </ul>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'CreditInformation',
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
