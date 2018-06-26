<docs>
# SearchFilter
</docs>

<template>
  <form
    @submit.prevent="search"
  >
    <label
      class="db f5 b mt4 mb3 pt3 bt"
      for="terms"
    >Search Episodes</label>

    <input
      id="terms"
      class="w-100 input-reset ba b--black-20 pa2 "
      type="search"
      :placeholder="placeholder"
      v-model="term"
      @input="search"
    >
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'SearchFilter',

  data() {
    return {
      placeholder: 'JavaScript, Vue, Elixir, Phoenix...',
      term: ''
    }
  },

  methods: {
    ...mapActions({
      filter: 'episodes/filter',
      toggleFiltering: 'episodes/toggleFiltering'
    }),

    search: debounce(function() {
      this.toggleFiltering()

      this.filter(this.term).then(() => {
        this.toggleFiltering()
      })
    }, 500)
  }
}
</script>

<style scoped>
</style>
