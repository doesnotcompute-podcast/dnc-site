import lunr from 'lunr'

const PODCAST_ID = process.env.PODCAST_ID
const API_KEY = process.env.API_KEY

export const state = () => ({
  filtering: false,
  all: [],
  filtered: []
})

export const getters = {
  getById: state => id => {
    return state.all.find(episode => `${episode.id}` === id)
  }
}

export const mutations = {
  toggleFiltering(state) {
    state.filtering = !state.filtering
  },

  add(state, episode) {
    state.all.push(episode)
  },

  replace(state, episodes) {
    state.all = episodes
  },

  replaceFiltered(state, episodes) {
    state.filtered = episodes
  }
}

export const actions = {
  toggleFiltering({ commit }) {
    return new Promise(resolve => {
      commit('toggleFiltering')
      resolve()
    })
  },

  fetchAll({ commit }) {
    return new Promise((resolve, reject) => {
      let req = this.axios.get(
        `/podcasts/${PODCAST_ID}/episodes.json?api_key=${API_KEY}`
      )

      req.then(res => {
        console.log('----- then', res.data)
        commit('replace', res.data)

        resolve(res.data)
      })

      req.catch(err => {
        console.log('----- catch', err)
        reject(err.response)
      })
    })
  },

  filter({ state, commit, getters }, term) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (term.length) {
          // lunr.js 2.0 has an immutable index!
          // https://github.com/olivernn/lunr.js/issues/259#issuecomment-298691512
          let idx = lunr(function() {
            this.field('title')
            this.field('description')
            this.field('long_description')
            this.ref('id')

            state.all.forEach(document => {
              this.add(document)
            })
          })

          let results = idx.search(term).map(result => {
            return getters.getById(result.ref)
          })

          commit('replaceFiltered', results)
        } else {
          commit('replaceFiltered', [])
        }

        resolve()
      }, 240)
    })
  }
}
