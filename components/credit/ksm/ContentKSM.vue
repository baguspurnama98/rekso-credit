<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <!-- Deskripsi -->
    <InfoKSM />

    <!-- Table -->
    <TableKSM />

    <!-- Kalkulator -->
    <Kalkulator :bunga="bunga" />

    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6281388870915'" :jenisKredit="'KSM'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
import TableKSM from './TableKSM'
import InfoKSM from './Info'
import Kalkulator from './Calculator'

export default {
  name: 'ContentKSM',
  components: { TableKSM, ButtonPengajuan, InfoKSM, Kalkulator },
  // eslint-disable-next-line vue/require-prop-types
  props: ['bunga'],
}
</script>
