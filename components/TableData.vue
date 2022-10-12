<!-- eslint-disable no-console -->
<!-- eslint-disable no-console -->
<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="p-1.5 w-full inline-block align-middle">
        <div class="overflow-hidden border rounded-lg relative">
          <table class="table-fixed w-full divide-y divide-gray-200 text-center">
            <thead class="bg-gray-50 text-center">
              <tr>
                <th
                  v-for="(item, idx) in data"
                  :key="idx"
                  scope="col"
                  class="sm:px-6 px-1 text-xs sm:text-lg font-bold text-gray-500 uppercase "
                >
                  {{ item[0] }}
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr>
                <td
                  v-for="(item, idx) in data"
                  :key="idx" class="sm:px-6 px-1 py-4 sm:text-sm text-xs font-bold text-gray-800 whitespace-nowrap">{{item[1]}}%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TableData',
  data: () => ({
    data: '',
  }),

  fetch() {
    this.$axios
      .$get(
        `https://sheets.googleapis.com/v4/spreadsheets/1SWikQcKkDgSTXOUW8JD2b4qcOSTlkEGYh6XE9fS7aL8/values/Sheet1!A1:B5?key=AIzaSyBSWyF6kNY2qB4KklKubjos4u_hNIOFx_I`
      )
      .then((resp) => {
        this.data = resp.values

        // eslint-disable-next-line no-console
        console.log(this.data)
      })
      .catch((errors) => {
        // eslint-disable-next-line no-console
        console.dir(errors)
      })
  },
  activated() {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      // eslint-disable-next-line no-console
      console.log('refresh')
      this.$fetch() // this.$destroy()
    }
  },
  methods: {},
}
</script>
