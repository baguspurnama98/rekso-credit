<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-gray-200">
    <InfoKMK />
    <div>
      <TableKMK />
    </div>
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6281388870915'" :jenisKredit="'KMK'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import TableKMK from './TableKMK'
import InfoKMK from './Info'
export default {
  name: 'ContentKMK',
  components: { InfoKMK, ButtonPengajuan, TableKMK },
}
</script>
