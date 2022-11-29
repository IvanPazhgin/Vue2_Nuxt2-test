<template>
  <div>
    <b-pagination
      pills
      align="center"
      :value="$store.state.goods.currentPage"
      :total-rows="$store.state.goods.amountOfGoods"
      :per-page="$store.state.goods.limitOnPage"
      @input="changePage"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  methods: {
    async changePage(event) {
      this.$store.commit('goods/setCurrentPage', event)
      await this.$store.dispatch('goods/fetch')
    },
  }
}
</script>

<style scoped>

</style>
