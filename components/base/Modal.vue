<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal text-center px-10" @click.stop>
      <img class="check mx-auto" :src="require('~/assets/img/qrcode-livin.jpeg')" alt="" />
      <h3 class="text-header-gradient font-extrabold text-2xl">Livin' By Mandiri</h3>
      <p class="px-5 py-0">
        Nikmati gampangnya buka rekening online, transaksi, dan integrasi segala kebutuhan finansial kamu hanya dengan
        <b>Livin' by Mandiri</b>
      </p>
      <button @click="$emit('close-modal')">Close</button>
    </div>
    <!-- <div class="close" @click="$emit('close-modal')"> -->
      <!-- <img class="close-img" src="~/assets/close-icon.svg" alt="" /> -->
      <!-- <img class="close-img" :src="require('~/assets/img/qr-code.png')" alt="" /> -->
      <!-- X
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ModalLivin',
}
</script>
<style scoped>
.text-header-gradient {
  background: rgb(57, 132, 244);
  background: linear-gradient(169.4deg, #3984f4 -6.01%, #0cd3ff 36.87%, #2f7cf0 78.04%, #0e65e8 103.77%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 200px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
</style>
