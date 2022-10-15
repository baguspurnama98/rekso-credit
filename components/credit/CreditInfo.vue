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
      <ContentKSM />
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
  </div>
</template>

<script>
import ContentKSM from './ContentKSM'
import ContentKPR from './ContentKPR'
import ContentCC from './ContentCC'
export default {
  name: 'CreditInfo',
  components: { ContentKSM, ContentKPR, ContentCC },
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
