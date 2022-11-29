<template>

  <div class="overflow-auto">
<!--    <b-table-->
<!--      id="my-table"-->
<!--      :items="items"-->
<!--      :per-page="perPage"-->
<!--      :current-page="currentPage"-->
<!--      small-->
<!--    ></b-table>-->


<!--    <b-pagination-->
<!--      pills-->
<!--      align="center"-->
<!--      v-model="$store.state.goods.currentPage"-->
<!--      :total-rows="$store.state.goods.amountOfGoods"-->
<!--      :per-page="$store.state.goods.limitOnPage"-->
<!--    />-->

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
      // console.log(event)
    },
  }
}
</script>

<style scoped>

</style>
