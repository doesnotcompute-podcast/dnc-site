<template>
  <div class="cf">
    <div class="fl w-100 w-25-ns pr3-ns">
      <search-filter />
    </div>

    <div
      class="list fl w-100 w-75-ns pl3-ns"
      :class="{ 'o-30': filtering }"
    >
      <article
        v-for="episode in episodes"
        :key="episode.id"
        class="pv4"
      >
        <div class="bt pt3 cf">
          <div class="fl w-100 w-third-ns pr2">
            <h1 class="ma0 f5 ttu lh-title">
              <nuxt-link
                :to="episodePermalink(episode)"
                class="link dim black"
                v-text="episode.title"
              />
            </h1>

            <p class="gray db pv2 f6 lh-solid">Published <time v-text="publishedAt(episode)" /></p>

            <nuxt-link
                :to="episodePermalink(episode)"
                class="link dim black f6 lh-solid fw7"
                v-text="'Listen Here'"
              />
          </div>

          <div class="fl w-100 w-two-thirds-ns pl2-ns mt4 mt0-ns">
            <p class="ma0 lh-copy">{{ episode.description }}</p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import format from 'date-fns/format'
import SearchFilter from '~/components/global/SearchFilter'

export default {
  name: 'EpisodesIndex',

  components: {
    SearchFilter
  },

  data() {
    return {
      term: ''
    }
  },

  computed: {
    ...mapState({
      episodes: state => {
        if (state.episodes.filtered.length) {
          return state.episodes.filtered
        } else {
          return state.episodes.all
        }
      },
      filtering: state => state.episodes.filtering
    })
  },

  methods: {
    episodePermalink(episode) {
      return `/episodes/${episode.id}`
    },

    publishedAt(episode) {
      return format(episode.published_at, 'MM/DD/YYYY')
    }
  }
}
</script>

<style scoped>
.list {
  transition: opacity 240ms ease-out;
}
</style>

