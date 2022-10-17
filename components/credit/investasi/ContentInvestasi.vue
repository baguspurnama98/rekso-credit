<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <Info />
    <!-- <div>
      <TableKUM />
    </div> -->
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6281388870915'" :jenisKredit="'Investasi'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
// import TableKUM from './TableInvest'
import Info from './Info'
export default {
  name: 'ContentInvest',
  components: { Info, ButtonPengajuan,  },
}
</script>
