<template>
  <div
    id="accordion-color"
    data-accordion="collapse"
    data-active-classes="bg-blue-100 text-blue-600"
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
        <span>Pengajuan Kredit Serbaguna Mandiri (KSM)</span>
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
      <ContentKSM :bunga="bunga" />
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
        <span>Pengajuan Kredit Pemilikan Rumah (KPR)</span>
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
      <ContentKPR />
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
      <ContentCC />
    </div>

    <!-- 4 -->
    <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('multiguna')"
      >
        <span>Pengajuan Mandiri Multiguna</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': multigunaIsOpen }"
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
        hidden: !multigunaIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <ContentMulti />
    </div>

     <!-- 5 -->
     <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('kum')"
      >
        <span>Pengajuan Kredit Usaha Mikro (KUM)</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': kumIsOpen }"
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
        hidden: !kumIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <ContentKUM />
    </div>

    <!-- 6 -->
    <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('kur')"
      >
        <span>Pengajuan Kredit Usaha Rakyat (KUR)</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': kurIsOpen }"
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
        hidden: !kurIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <ContentKUR />
    </div>


     <!-- 7 -->
     <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('kmk')"
      >
        <span>Pengajuan Kredit Modal Kerja (KMK)</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': kmkIsOpen }"
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
        hidden: !kmkIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <ContentKMK />
    </div>

    <!-- 8 -->
    <h2 id="accordion-color-heading-3">
      <button
        type="button"
        class="flex items-center justify-between w-full p-5 font-semibold text-lg text-left  text-gray-600 border border-b-0 border-gray-100 focus:ring-4 focus:ring-blue-200 bg-blue-100 hover:bg-blue-300"
        data-accordion-target="#accordion-color-body-3"
        aria-expanded="true"
        aria-controls="accordion-color-body-3"
        @click="toggleAccordion('invest')"
      >
        <span>Pengajuan Kredit Investasi</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0"
          :class="{ 'rotate-180': investIsOpen }"
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
        hidden: !investIsOpen,
      }"
      aria-labelledby="accordion-color-heading-2"
    >
      <ContentInvest />
    </div>
  </div>
</template>

<script>
import ContentKSM from './ksm/ContentKSM'
import ContentKPR from './kpr/ContentKPR'
import ContentCC from './cc/ContentCC'
import ContentMulti from './multiguna/ContentMultiguna'
import ContentKUR from './kur/ContentKUR'
import ContentKUM from './kum/ContentKUM'
import ContentKMK from './kmk/ContentKMK'
import ContentInvest from './investasi/ContentInvestasi'

export default {
  name: 'CreditInfo',
  components: { ContentKSM, ContentKPR, ContentCC, ContentMulti, ContentKUR, ContentKUM, ContentKMK, ContentInvest },
  data: () => ({
    ccIsOpen: false,
    ksmIsOpen: false,
    kprIsOpen: false,
    multigunaIsOpen: false,
    kumIsOpen: false,
    kurIsOpen:false,
    kmkIsOpen:false,
    investIsOpen: false,

    bunga: {
      ksm: 0,
      kpr:0,
      cc:0,
      multi:0,
      kum:0,
      kur:0,
      kmk:0,invest:0,
    },
  }),
  fetch() {
    this.$axios
      .$get(
        `https://sheets.googleapis.com/v4/spreadsheets/1SWikQcKkDgSTXOUW8JD2b4qcOSTlkEGYh6XE9fS7aL8/values/Sheet1!E1?key=AIzaSyBSWyF6kNY2qB4KklKubjos4u_hNIOFx_I`
      )
      .then((resp) => {
        this.bunga.ksm = resp.values[0][0]
        // this.bunga.multi = resp.values[0][0]
        // eslint-disable-next-line no-console
        // console.log(this.sukuBungaAll.ksm)
      })
      .catch((errors) => {
        // eslint-disable-next-line no-console
        console.dir(errors)
      })
  },
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
      if (x === 'multiguna') {
        this.multigunaIsOpen = !this.multigunaIsOpen
      }
      if (x === 'kum') {
        this.kumIsOpen = !this.kumIsOpen
      }
      if (x === 'kur') {
        this.kurIsOpen = !this.kurIsOpen
      }
      if (x === 'kmk') {
        this.kmkIsOpen = !this.kmkIsOpen
      }
      if (x === 'invest') {
        this.investIsOpen = !this.investIsOpen
      }
    },
  },
}
</script>
