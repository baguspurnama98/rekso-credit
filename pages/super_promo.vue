<template>
     <!-- Promo -->
     <div class="mt-15 pt-14">
     <section id="promo" class="max-w-screen-xl sm:mx-auto sm:px-6 lg:px-0 py-5 rounded-[2.25rem] sm:rounded-xl  bg-yellow-50 transform lg:-translate-y-12">
      <h2 class="sm:text-6xl text-2xl text-center font-bold pb-10 ">Promo <span class="text-header-gradient">Terbaru</span> </h2>

      <PromoCarousel />
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>