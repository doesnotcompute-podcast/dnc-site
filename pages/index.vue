<template>
  <div class="cf">
    <div class="fl w-100 w-25-ns pr3-ns">
      <h2 class="f5 mt4 pt3 bt">Episodes</h2>
    </div>

    <div class="fl w-100 w-75-ns pl3-ns">

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

export default {
  computed: {
    ...mapState({
      episodes: state => state.episodes.all
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
