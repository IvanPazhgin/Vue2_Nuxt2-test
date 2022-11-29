<template>
  <div>
    <input
      class="input"
      v-model="searchQuery"
      placeholder="Поиск..."
    >
    <h2>Список товаров</h2>
    <input
      type="checkbox"
      @input="changeView"
      :value="$store.state.goods.isTile"
    > Вид элементов: плиточный / горизонтальный

    <div :class="{ container: $store.state.goods.isTile}">
        <product-page
          :class="{ item: $store.state.goods.isTile}"
          v-for="product of searchedGoods"
          :product="product">
        </product-page>
    </div>

    <Pagination></Pagination>

<!--    <div class="page__wrapper">-->
<!--      <div-->
<!--        v-for="pageNumber in $store.getters['goods/totalPages']"-->
<!--        :key="pageNumber"-->
<!--        class="page"-->
<!--        :class="{'current-page': pageNumber === $store.state.goods.currentPage}"-->
<!--        @click="changePage(pageNumber)"-->
<!--      >-->
<!--        {{ pageNumber }}-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "productList",

  async fetch({store}) {
    if (store.getters["goods/goods"].length === 0) {
      await store.dispatch('goods/fetch')
    }
  },
  // async asyncData({$axios}) {
  //   const taoBaoList = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=11')
  //   return { taoBaoList }
  // },

  data: () => ({
    searchQuery: '',
  }),

  computed: {
    goods() {
      return this.$store.getters["goods/goods"]
    },
    searchedGoods() {
      return this.goods.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  methods: {
    async changePage(pageNumber) {
      this.$store.commit('goods/setCurrentPage', pageNumber)
      await this.$store.dispatch('goods/fetch')
    },
    changeView() {
      this.$store.dispatch('goods/changeView')
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  /*margin-top: 15px;*/
  margin-bottom: 10px;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
  flex-wrap: wrap;
}
.page {
  border: 1px solid black;
  color: blue;
  padding: 10px;
  cursor: pointer;
  margin: 0.3%;
  justify-content: space-between;
}
.current-page {
  border: 1px solid teal;
  color: red;
  opacity: 0.7;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  /*flex-flow: row wrap;*/
  /*align-content: space-between;*/
  /*height: 960px;*/
}
.item {
  width: 24%;
  margin-bottom: 5px;
  /*border: 1px solid #4290e2;*/
  box-sizing: border-box;
}
</style>
