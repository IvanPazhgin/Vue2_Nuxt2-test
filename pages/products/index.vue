<template>
  <v-container>
    <input
      class="input"
      v-model="searchQuery"
      placeholder="Поиск..."
    >
    <h2>Список товаров</h2>
      <v-row>
        <product-page
          v-for="product of searchedGoods"
          :product="product">
        </product-page>
      </v-row>
<!--    <product-dialog />-->
  </v-container>
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
    // dialogVisible: false,
  }),

  computed: {
    goods() {
      return this.$store.getters["goods/goods"]
    },
    searchedGoods() {
      return this.goods.filter(product => product.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>
