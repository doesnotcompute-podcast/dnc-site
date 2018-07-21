<template>
  <article>
    <h1>{{ episode.title }}</h1>
    <time>Published {{ formattedDate }}</time>

    <div class="mv4">
      <iframe
        frameborder="0"
        height="200px"
        scrolling="no"
        seamless
        :src="embedUrl"
        width="100%"
      ></iframe>
    </div>

    <div
      v-html="$md.render(episode.long_description)"
    />
  </article>

</template>

<script>
import format from 'date-fns/format'

export default {
  data() {
    return {
      episode: {}
    }
  },

  asyncData({ params, app }) {
    let episode = app.store.getters['episodes/getById'](params.id)

    return {
      episode: episode
    }
  },

  head() {
    return {
      title: `Episode ${this.episode.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.episode.description
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.SITE_URL + this.$route.path
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Episode ${this.episode.title}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.episode.description
        },
        {
          hid: 'og:audio',
          property: 'og:audio',
          content: this.episode.audio_url
        }
      ]
    }
  },

  computed: {
    embedUrl() {
      let url = this.episode.sharing_url
      let index = url.lastIndexOf('/')
      let embedId = url.substr(index)

      return `https://embed.simplecast.com/${embedId}?color=3d3d3d`
    },

    formattedDate() {
      return format(this.episode.published_at, 'MM/DD/YYYY')
    }
  }
}
</script>
