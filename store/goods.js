// единственная константа, которая будет функцией, чтобы избежать мутаций
export const state = () => ({
  goods: []
})

// изменяем state
export const mutations = {
  setGoods(state, goods) {
    state.goods = goods
  }
}

// грузим данные с сервера
export const actions = {
  async fetch({commit}) {
    const goods = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=11')
    commit('setGoods', goods)
  }
}

export const getters = {
  goods: state => state.goods
}
