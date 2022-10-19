<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="py-5 px-3 font-normal border border-b-0 border-gray-200">
    <Info />
    <!-- <div>
      <TableInvest />
    </div> -->
    <!-- Button Hubungi Kami -->
    <ButtonPengajuan :waNumber="'6282124900298'" :jenisKredit="'Payroll'" />
  </div>
</template>

<script>
import ButtonPengajuan from '../../base/ButtonPengajuan'
// import TableInvest from './TableInvest'
import Info from './Info'
export default {
  name: 'ContentPayroll',
  components: { Info, ButtonPengajuan },
}
</script>
