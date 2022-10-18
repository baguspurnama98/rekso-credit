<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <InfoKUR />
    <div>
      <TableKUR />
    </div>
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6287876545796'" :jenisKredit="'KUR'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import TableKUR from './TableKUR'
import InfoKUR from './Info'
export default {
  name: 'ContentKUR',
  components: { InfoKUR, ButtonPengajuan, TableKUR },
}
</script>
