export const state = () => ({
  all: []
})

export const getters = {
  getById: state => id => {
    return state.all.find(episode => `${episode.id}` === id)
  }
}

export const mutations = {
  add(state, episode) {
    state.all.push(episode)
  },

  replace(state, episodes) {
    state.all = episodes
  }
}

export const actions = {
  fetchAll({ commit }) {
    return new Promise((resolve, reject) => {
      let req = this.axios.get(
        `/podcasts/1386/episodes.json?api_key=${process.env.API_KEY}`
      )

      req.then(res => {
        commit('replace', res.data)
        resolve(res.data)
      })

      req.catch(err => {
        reject(err.response)
      })
    })
  }
}
