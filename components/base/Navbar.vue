<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="w-full flex flex-row items-center justify-between py-6">
        <div>
          <a href="/">
            <img
              :src="require('~/assets/img/logo/Bank_Mandiri_logo_2016.png')"
              class="w-32 xl:w-44"
              alt="Mandiri Logo"
            />
          </a>
        </div>
        <div>
          <base-button
            class="px-5 py-3 bg-inherit text-gradient border border-[#0c66ee] flex sm:text-base text-sm"
            @click="showModal = true"
          >
            <img class="fill-current w-6 h-6" :src="require('~/assets/img/qr-code.png')" alt="" />
            <span class="hidden ml-2 sm:flex">Livin' by Mandiri</span>
          </base-button>
        </div>
      </div>
    </div>
    <!-- <modal v-if="isShowQR" title="This is a test!" @close="showQR = false" class="animated fadeIn">
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </modal> -->
    <SavedModal v-show="showModal" @close-modal="showModal = false"/>
  </nav>
</template>
<script>
import SavedModal from './Modal'
export default {
  name: 'BaseNavbar',
  components: { SavedModal },
  data() {
    return {
      open: false,
      dropdownNavbar: false,
      showModal: false,
    }
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar
    },
    showQR() {
      this.showQR = !this.showQR
    },
  },
}
</script>
