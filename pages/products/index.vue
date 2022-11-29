<template>
  <div>
    <input
      class="find_box"
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
    changeView() {
      this.$store.dispatch('goods/changeView')
    }
  }
}
</script>

<style scoped>
.find_box {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  /*margin-top: 15px;*/
  margin-bottom: 10px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  /*justify-content: space-between;*/

  /*flex-flow: row wrap;*/
  /*align-content: space-between;*/
  /*height: 960px;*/
  margin-bottom: 1%;
}
.item {
  width: 24%;
  /*margin-bottom: 5px;*/
  margin-bottom: 1%;
  margin-right: 1%;
  /*border: 1px solid #4290e2;*/
  box-sizing: border-box;
}
</style>
