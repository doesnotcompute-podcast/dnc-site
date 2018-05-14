export const actions = {
  nuxtServerInit({ dispatch }) {
    return dispatch('episodes/fetchAll')
  }
}
