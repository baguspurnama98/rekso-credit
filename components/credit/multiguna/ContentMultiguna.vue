<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <!-- Deskripsi -->
    <Info />

    <!-- Table -->
    <div>
      <TableMultiguna />
    </div>

    <!-- Kalkulator -->
    <!-- <div class="rounded-lg shadow-lg sm:px-5 py-5 px-3 mt-8 bg-blue-50">
      <h2 class="font-bold text-2xl text-center px-4 mb-3">Simulasi Multiguna</h2>
      <h3 class="font-semibold text-base">
        Suku Bunga Kredit: <span class="font-extrabold">{{ bunga.ksm }}</span>
      </h3>
      <div class="flex flex-col my-2">
        <div class="-mx-3 md:flex mb-3">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
              Nominal
            </label>

            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">Rp.</div>
              <input
                v-model="nominal"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Masukan Nominal"
                @input="handleInput"
              />
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
              Jangka Waktu
            </label>

            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <input
                v-model="tenor"
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Masukan Lama Tenor (Tahun)"
                @input="resetOnChange"
              />
            </div>
            <p class="text-red text-xs italic pt-1">*Dalam satuan tahun</p>
          </div>
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-full px-3">
            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
              Suku Bunga
            </label>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">%</div>
              <input
                v-model="sukuBunga"
                type="number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Masukan Suku Bunga (Persen)"
                step=".01"
                @input="resetOnChange"
              />
            </div>
            <p class="text-grey-dark text-xs italic pt-1">*Bunga per Tahun</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button>
          <BaseButton
            class="w-full px-5 py-2 bg-blue-gradient text-white text-base font-medium disabled:opacity-50"
            :disabled="sukuBunga == '' || nominal == '' || tenor == ''"
            @click="onClickHitung"
            >Hitung</BaseButton
          >
        </button>
      </div>

      <div :class="{ hidden: isAnswerHidden }" class="mt-4">
        <h2 class="font-bold">Hasil Simulasi</h2>
        <table class="text-left sm:text-base text-sm w-full border-0">
          <tr class=" hover:bg-gray-100">
            <th scope="row" class="py-1 px-3 font-medium text-gray-900 whitespace-nowrap">Nominal</th>
            <td class="py-1 pr-3">: Rp. {{ nominal }}</td>
          </tr>
          <tr class=" hover:bg-gray-100">
            <th scope="row" class="py-1 px-3 font-medium text-gray-900 whitespace-nowrap">Jangka Waktu</th>
            <td class="py-1 pr-3">: {{ tenor }} Tahun</td>
          </tr>
          <tr class=" hover:bg-gray-100">
            <th scope="row" class="py-1 px-3 font-medium text-gray-900 whitespace-nowrap">Suku Bunga</th>
            <td class="py-1 pr-3">: {{ sukuBunga }}%</td>
          </tr>
          <tr class=" hover:bg-gray-100">
            <th scope="row" class="py-1 px-3 font-medium text-gray-900 whitespace-nowrap">Cicilan per Bulan</th>
            <td class="py-1 pr-3">: Rp. {{ cicilan }}</td>
          </tr>
        </table>
      </div>
    </div> -->

    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'628976634788'" :jenisKredit="'Mandiri Multiguna'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import TableMultiguna from './TableMultiguna'
import Info from './Info'

export default {
  name: 'ContentMultiguna',
  components: { ButtonPengajuan, Info, TableMultiguna },
  // eslint-disable-next-line vue/require-prop-types
  props: ['bunga'],
  data: () => ({
    sukuBunga: '',
    nominal: '',
    tenor: '',
    cicilan: 0,
    isAnswerHidden: true,
  }),
  watch: {
    value: {
      handler(after) {
        this.nominal = this.format(after)
      },
      immediate: true,
    },
  },
  methods: {
    onClickHitung() {
      const N = parseFloat(this.nominal.replace(/[.]/g, ''))
      const B = parseFloat(this.sukuBunga)
      const T = parseFloat(this.tenor)
      this.cicilan = parseFloat(((N * (B / 100)) / 360).toFixed(0)) + parseFloat((N / T / 12).toFixed(0))

      this.cicilan = this.format(this.cicilan)
      // eslint-disable-next-line no-console
      // console.log((this.bunga.ksm)
      this.isAnswerHidden = false
    },
    format: (value) => (value + '').replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.'),

    handleInput() {
      this.isAnswerHidden = true
      this.nominal = this.format(this.nominal)
      this.$emit('input', (this.nominal + '').replace(/[^0-9]/g, ''))
    },

    resetOnChange() {
      this.isAnswerHidden = true
    },
  },
}
</script>
