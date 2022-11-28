<template>
  <section>
    <h1>TaoBao List</h1>
    <ul>
      <li v-for="item of taoBaoList" :key="item">
        User {{ item }}
        <hr>
      </li>
    </ul>
    <h1>еще один запрос</h1>
<!--    <ul>-->
<!--      <li v-for="item of taoBaoList2" :key="item">-->
<!--        User ID = {{ item }}-->
<!--        <hr>-->
<!--      </li>-->
<!--    </ul>-->
  </section>
</template>

<script>
export default {
  name: "TaoBaoList",
  async asyncData({$axios}) {
    const urlTB = 'https://jsonplaceholder.typicode.com/users'
    const urlPhotos = 'https://jsonplaceholder.typicode.com/photos?_limit=11'
    const taoBaoList = await $axios.$get(urlPhotos)
    console.log(taoBaoList)
    return { taoBaoList }
  },
  data: () => ({
    // taoBaoList: [],
    taoBaoList2: [],
  }),

  async mounted() {
    // this.taoBaoList2 = await this.$axios.$get('https://ali-express1.p.rapidapi.com/categories')
    this.taoBaoList2 = this.taobao()
  },
  methods: {
    taobao() {
      // const axios = require("axios");

      const optionsAliExpress = {
        method: 'GET',
        url: 'https://ali-express1.p.rapidapi.com/categories',
        headers: {
          'X-RapidAPI-Key': 'ae8f8d3186msh68caa8eecc4b698p1e7798jsn01f552d32c44',
          'X-RapidAPI-Host': 'ali-express1.p.rapidapi.com'
        }
      };
      const optionsTaoBao = {
        method: 'GET',
        url: 'https://taobao-api.p.rapidapi.com/api',
        params: {api: 'item_search', page_size: '40', q: 'shoes'},
        headers: {
          'X-RapidAPI-Key': 'ae8f8d3186msh68caa8eecc4b698p1e7798jsn01f552d32c44',
          'X-RapidAPI-Host': 'taobao-api.p.rapidapi.com'
        }
      };
      const optionsMovies = {
        method: 'GET',
        url: 'https://movie-database-alternative.p.rapidapi.com/',
        params: {s: 'Avengers Endgame', r: 'json', page: '1'},
        headers: {
          'X-RapidAPI-Key': 'ae8f8d3186msh68caa8eecc4b698p1e7798jsn01f552d32c44',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      const optionsBloomberg  = {
        method: 'GET',
        url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete',
        params: {query: '<REQUIRED>'},
        headers: {
          'X-RapidAPI-Key': 'ae8f8d3186msh68caa8eecc4b698p1e7798jsn01f552d32c44',
          'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
        }
      };
      const optionsInstagram = {
        method: 'GET',
        url: 'https://instagram47.p.rapidapi.com/post_comments',
        params: {postid: '2435143128484144113'},
        headers: {
          'X-RapidAPI-Key': 'ae8f8d3186msh68caa8eecc4b698p1e7798jsn01f552d32c44',
          'X-RapidAPI-Host': 'instagram47.p.rapidapi.com'
        }
      };

      this.$axios.request(optionsMovies).then(function (response) {
        console.log(response.data);
        return response.data
      }).catch(function (error) {
        console.error(error);
        return error
      });
    },
  },
}
</script>

<style scoped>

</style>
