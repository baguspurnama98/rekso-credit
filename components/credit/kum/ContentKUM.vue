<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <InfoKUM />
    <div>
      <TableKUM />
    </div>
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6287876545796'" :jenisKredit="'KUM'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import TableKUM from './TableKUM'
import InfoKUM from './Info'
export default {
  name: 'ContentKUM',
  components: { InfoKUM, ButtonPengajuan, TableKUM },
}
</script>
