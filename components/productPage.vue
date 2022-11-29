<template>
      <v-card @click="openProduct(product)">
        <v-card-title>id #{{product.id}}: {{ product.title }}</v-card-title>
        <v-card-text>
          <v-img
            width="200"
            height="200"
            :src="product.url"
          />
        </v-card-text>
      </v-card>
</template>

<script>
export default {
  name: "productPage",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openProduct(product) {
      this.$router.push('products/' + product.id)
    }
  },
}
</script>

<style scoped>

</style>
