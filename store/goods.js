// единственная константа, которая будет функцией, чтобы избежать мутаций
export const state = () => ({
  // users: []
  goods: []
})

// изменяем state
export const mutations = {
  // setUsers(state, users) {
  //   state.users = users
  // }
  setGoods(state, goods) {
    state.goods = goods
  }
}

// грузим данные с сервера
export const actions = {
  async fetch({commit}) {
    // const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos')
    const goods = await this.$axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=11')
    // commit('setUsers', users)
    commit('setGoods', goods)
  }
}

export const getters = {
  // users: state => state.users
  goods: state => state.goods
}
