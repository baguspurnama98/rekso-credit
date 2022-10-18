<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <InfoKPR />

    <!-- Table -->
    <TableKPR />

    <!-- Kalkulator -->
    <Kalkulator :bunga="bunga" />

    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6281298981727'" :jenisKredit="'KPR'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import InfoKPR from './Info'
import TableKPR from './TableKPR'
import Kalkulator from './Calculator'

export default {
  name: 'ContentKPR',
  components: { InfoKPR, ButtonPengajuan, TableKPR, Kalkulator },
  // eslint-disable-next-line vue/require-prop-types
  props: ['bunga'],
}
</script>
