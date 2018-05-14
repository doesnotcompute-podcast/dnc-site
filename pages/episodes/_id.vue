<template>
  <div
    v-html="$md.render(content)"
  />
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },

  asyncData({ params, app }) {
    let episode = app.store.getters['episodes/getById'](params.id)

    return {
      content: episode.long_description
    }
  }
}
</script>
