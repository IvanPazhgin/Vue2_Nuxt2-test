<template>
  <v-container>
    <h2>Список товаров</h2>
      <v-row>
        <product-page
          v-for="product of taoBaoList"
          :product="product">
<!--          <a href="#" @click.prevent="openProduct(product.id)">Подробнее: id #{{product.id}}</a>-->
        </product-page>
      </v-row>
<!--    <product-dialog />-->
  </v-container>
</template>

<script>
export default {
  name: "productList",

  async asyncData({$axios}) {
    const taoBaoList = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=11')
    return { taoBaoList }
  },
  data: () => ({
    // taoBaoList: [],
    // dialogVisible: false,
  }),

  async mounted() {
    // this.fetchProducts()

    // this.taoBaoList2 = await this.$axios.$get('https://ali-express1.p.rapidapi.com/categories')
    // this.taoBaoList2 = this.taobao()
  },
  methods: {
    fetchProducts() {
      this.axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => this.taoBaoList = response.data)
    },
    // openProduct(product) {
    //   this.$router.push('products/' + product)
    // }
  },
}
</script>

<style scoped></style>
