<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable no-var -->
<!-- eslint-disable prefer-const -->

<template>
  <!-- <div>
    <div class="relative slide">
      
      <div class="carousel-inner relative overflow-hidden w-full bg-blue-50 rounded-xl p-5 text-sm sm:text-normal">
        <div
          v-for="(item, i) in data"
          :id="`slide-${i}`"
          :key="i"
          :class="`${active === i ? 'active' : 'left-full'}`"
          class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out "
        >

          <div v-for="(text, j) in item" :key="j" class="block w-full">
            {{text}}
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-indicators absolute bottom-0 flex h-24 w-full justify-center items-center">
        <ol class="z-50 flex w-4/12 justify-center">
          <li
            v-for="(item, k) in data"
            :key="k"
            class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"
          ></li>
        </ol>
      </div>
    <div>
    </div>
  </div> -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div v-for="(item, i) in data" :key="i" class="swiper-slide px-2 py-2" >
        <div class="w-full">
            <div v-for="(text, j) in item" :key="j" class="block w-full sm:text-base text-sm ">
            {{text}}
          </div>

        </div>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'PromoCarousel',
  data: () => ({
    data: '',
    images: [
      'https://picsum.photos/id/237/1024/800',
      'https://picsum.photos/id/238/1024/800',
      'https://picsum.photos/id/239/1024/800',
    ],
    active: 0,
  }),
  fetch() {
    this.$axios
      .$get(
        `https://sheets.googleapis.com/v4/spreadsheets/1SWikQcKkDgSTXOUW8JD2b4qcOSTlkEGYh6XE9fS7aL8/values/Promo?key=AIzaSyBSWyF6kNY2qB4KklKubjos4u_hNIOFx_I`
      )
      .then((resp) => {
        const promoText = resp.values
        // eslint-disable-next-line prefer-const
        const textFormated = []
        // eslint-disable-next-line prefer-const
        let tempText = []

        for (let i = 0; i < promoText.length; i++) {
          if (promoText[i][0] !== '-DONE-') {
            if (promoText[i].length !== 0) {
              tempText.push(promoText[i][0])
            }
          } else {
            textFormated.push(tempText)
            tempText = []
          }
        }
        this.data = textFormated
        // eslint-disable-next-line no-console
        console.log(this.data)
      })
      .catch((errors) => {
        // eslint-disable-next-line no-console
        console.dir(errors)
      })
  },
  mounted() {
    let i = 0
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0
      }
      this.active = i
      i++
    }, 3000)

    Swiper.use([Navigation, Pagination, Autoplay])
    
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      loop: true,
      // remove unused modules if needed
      modules: [Navigation, Pagination, Autoplay],
      // Pagination if needed
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // Autoplay if needed
      autoplay: {
        delay: 3000
      },
      // Navigation arrows if needed
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
      // Configure other options. Not tested
    })
  },

}
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
.swiper {
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}
.slider-content {
  color: #000;
}
.slide--1 {
  background-color: #f1c40f;
}
.slide--2 {
  background-color: #e67e22;
}
.slide--3 {
  background-color: #e74c3c;
}
.slide--4 {
  background-color: #9b59b6;
}
.slide--5 {
  background-color: #3498db;
}
.slide--6 {
  background-color: #2ecc71;
}   
</style>
