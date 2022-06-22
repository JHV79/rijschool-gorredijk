export const state = () => ({
  prismic: null,
})

export const mutations = {
  setPrismic(state, data) {
    state.prismic = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const { data } = await this.$prismic.api.getByID('YqseJBEAACcADbTj')
    commit('setPrismic', data)
  }
}
