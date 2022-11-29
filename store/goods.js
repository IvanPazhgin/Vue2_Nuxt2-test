// единственная константа, которая будет функцией, чтобы избежать мутаций
export const state = () => ({
  goods: [],
  amountOfGoods: 0,
  currentPage: 1,
  limitOnPage: 12,
  totalPages: 0,
  isTile: false,
})

// изменяем state
export const mutations = {
  setGoods(state, goods) {
    state.goods = goods
  },
  setAmountOfGoods(state, amountOfGoods) {
    state.amountOfGoods = amountOfGoods
  },
  setCurrentPage(state, currentPage) {
    state.currentPage = currentPage
  },
  setTotalPages(state, totalPages) {
    state.totalPages = totalPages
  },
  setIsTile(state, isTile) {
    state.isTile = isTile
  }
}

export const actions = {
  // грузим данные с сервера
  async fetch({commit, state}) {
    const goods = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _page: state.currentPage,
        _limit: state.limitOnPage,
      }
    })
    commit('setGoods', goods)

    const x_total_count = await this.$axios.get('https://jsonplaceholder.typicode.com/photos?_limit=1')
    commit('setAmountOfGoods', Number(x_total_count.headers['x-total-count']))

    const totalPages = Math.ceil(state.amountOfGoods / state.limitOnPage)
    commit('setTotalPages', totalPages)
  },

  changeView({commit, state}){
    commit('setIsTile', !state.isTile)
  }
}

export const getters = {
  goods: state => state.goods,
  // currentPage: state => state.currentPage,
  totalPages: state => state.totalPages,
  // isTile: state => state.isTile
  // amountOfGoods: state => state.amountOfGoods
}
