<template>
  <div class="p-1.5 border rounded-lg overflow-x-auto md:overflow-hidden w-full mt-8">
    <h1 class="font-bold p-2 text-xl text-center">Perhitungan Multiguna</h1>
    <table class="table-auto md:table-fixed w-full text-center p-2 m-1 divide-y divide-gray-200">
      <thead class="bg-gray-50 text-center">
        <tr>
          <th
            v-for="(item, idx) in data[1]"
            :key="idx"
            scope="col"
            class="sm:px-4 px-1 text-xs sm:text-sm font-bold text-gray-500 uppercase"
          >
            {{ item }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <tr v-for="(row, i) in data.slice(2)" :key="i">
          <td
            v-for="(item, idx) in row"
            :key="idx"
            class="sm:px-4 px-1 py-4 sm:text-sm text-xs font-bold text-gray-800 whitespace-nowrap"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TableMultiguna',
  data: () => ({
    data: '',
    title: '',
  }),

  fetch() {
    this.$axios
      .$get(
        `https://sheets.googleapis.com/v4/spreadsheets/1SWikQcKkDgSTXOUW8JD2b4qcOSTlkEGYh6XE9fS7aL8/values/SukuBunga!A14:E25?key=AIzaSyBSWyF6kNY2qB4KklKubjos4u_hNIOFx_I`
      )
      .then((resp) => {
        this.title = resp.values[0][0]
        this.data = resp.values
      })
      .catch((errors) => {
        // eslint-disable-next-line no-console
        console.dir(errors)
      })
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch() // this.$destroy()
    }
  },
  methods: {},
}
</script>
