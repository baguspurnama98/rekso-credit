<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <!-- Deskripsi -->
    <InfoCC />

    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6281388870915'" :jenisKredit="'Kartu Kredit'" />

  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import InfoCC from './Info'

export default {
  name: 'ContentCC',
  components: { ButtonPengajuan, InfoCC },
}
</script>
