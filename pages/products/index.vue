<template>
  <v-container>
    <h2>Список товаров</h2>
      <v-row>
        <product-page
          v-for="product of goods"
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
    // dialogVisible: false,
  }),

  computed: {
    goods() {
      return this.$store.getters["goods/goods"]
    }
  },
}
</script>

<style scoped></style>
