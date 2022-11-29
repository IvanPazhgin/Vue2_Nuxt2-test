<template>
  <section>
    <h3> Товар: #{{product.id}} </h3>
    <h4>Наимернование: {{ product.title }}</h4>
    <h5>Стоимость: {{product.title.length}} usd </h5>

    <v-card>
      <v-card-title> Подробное описание: {{ product.title }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <strong>Характеристики:</strong>
            <ul>
              <li>полезное свойство №1</li>
              <li>полезное свойство №2</li>
              <li>полезное свойство №3</li>
              <li>полезное свойство №4</li>
            </ul>
          </v-col>

          <v-col>
            <v-img
              width="200"
              height="200"
              :src="product.url"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

  </section>
</template>

<script>
export default {
  name: "_id",
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({$axios, params}) {
    const product = await $axios.$get('https://jsonplaceholder.typicode.com/photos/' + params.id)
    return { product }
  },
}
</script>

<style scoped></style>
