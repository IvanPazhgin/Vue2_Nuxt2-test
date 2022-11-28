<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="600"
  >
    <v-card>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>
        <v-img
          :src="product.img"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "productDialog",
  // props: ['product'],
  props: {
   product: {
     type: Object,
     required: true
   },
    dialogVisible: {
     type: Boolean,
      default: false,
    }
  },
  data: () => ({
    dialogVisible: false,
  })
}
</script>

<style scoped>

</style>
