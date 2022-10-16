<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <InfoKMK />
    <!-- <div>
      <TableKMK />
    </div> -->
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'628976634788'" :jenisKredit="'KMK'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
// import TableKUM from './TableKUM'
import InfoKMK from './Info'
export default {
  name: 'ContentKMK',
  components: { InfoKMK, ButtonPengajuan },
}
</script>
