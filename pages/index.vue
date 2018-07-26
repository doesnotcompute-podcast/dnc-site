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

      <podcast-episode v-bind:episode="episode" />

      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import format from 'date-fns/format'
import SearchFilter from '~/components/global/SearchFilter'
import PodcastEpisode from '~/components/episodes/PodcastEpisode.vue'

export default {
  name: 'EpisodesIndex',

  components: {
    SearchFilter,
    PodcastEpisode
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

