<template>
  <div class="bt pt4 cf">
    <div class="fl w-100 pr2">
      <p class="gray db mb1 f6 lh-solid"><time v-text="publishedAt" /></p>
      <h1 class="ma0 f3 lh-title">
        <nuxt-link
          :to="episodePermalink"
          class="link dim black"
          v-text="episode.title"
        />
      </h1>
    </div>

    <div class="fl w-100 mt3 mb4">
      <p class="ma0 lh-copy">{{ episode.description }}</p>
    </div>

    <audio :src="episode.audio_url" controls="true" preload="none" class="w-100"></audio>
  </div>

</template>

<script>
import format from 'date-fns/format'

export default {
  props: [ 'episode' ],

  computed: {
    publishedAt () {
      return format(this.episode.published_at, 'DD MMMM, YYYY')
    },

    episodePermalink () {
      return `/episodes/${this.episode.id}`
    },
  }
}
</script>

<style>

</style>
