export const actions = {
  nuxtServerInit({ dispatch }) {
    // Always fill store server side since simplecast's API doesn't support CORS
    return dispatch('episodes/fetchAll')
  }
}
