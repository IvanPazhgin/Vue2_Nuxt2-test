// единственная константа, которая будет функцией, чтобы избежать мутаций
export const state = () => ({
  goods: [],
  currentPage: 1,
  limitOnPage: 12,
  totalPages: 0,
})

// изменяем state
export const mutations = {
  setGoods(state, goods) {
    state.goods = goods
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  }
}

// грузим данные с сервера
export const actions = {
  async fetch({commit, state}) {
    const goods = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _page: state.currentPage,
        _limit: state.limitOnPage,
      }
    })
    commit('setGoods', goods)

    const x_total_count = await this.$axios.get('https://jsonplaceholder.typicode.com/photos?_limit=1')
    const totalPages = Math.ceil(x_total_count.headers['x-total-count'] / state.limitOnPage)
    commit('setTotalPages', totalPages)
  }
}

export const getters = {
  goods: state => state.goods,
  // currentPage: state => state.currentPage,
  totalPages: state => state.totalPages,

}
