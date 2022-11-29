<template>

  <div class="overflow-auto">
<!--    <b-table-->
<!--      id="my-table"-->
<!--      :items="items"-->
<!--      :per-page="perPage"-->
<!--      :current-page="currentPage"-->
<!--      small-->
<!--    ></b-table>-->


    <b-pagination
      pills
      align="center"
      v-model="$store.state.goods.currentPage"
      :total-rows="$store.state.goods.amountOfGoods"
      :per-page="$store.state.goods.limitOnPage"
    />

<!--    <b-pagination-->
<!--      pills-->
<!--      align="center"-->
<!--      :value="$store.state.goods.currentPage"-->
<!--      :total-rows="$store.state.goods.amountOfGoods"-->
<!--      :per-page="$store.state.goods.limitOnPage"-->
<!--      @click="changePage(label-page)"-->
<!--    ></b-pagination>-->

  </div>
</template>

<script>
export default {
  name: "Pagination",
  methods: {
    async changePage(pageNumber) {
      this.$store.commit('goods/setCurrentPage', pageNumber)
      await this.$store.dispatch('goods/fetch')
    },
  }
}
</script>

<style scoped>

</style>
