<template>
  <div id="app"
       class="mw9 center cf">
    <div class="w-100 w-20-ns fl center ph2 mt4 mt5-ns">
      <app-header/>
    </div>

    <section class="w-100 w-80-ns fl ph2 mt5-ns">
      <nuxt/>

      <app-footer/>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/global/header.vue'
import AppFooter from '~/components/global/footer.vue'

export default {
  name: 'DefaultLayout',

  components: {
    AppHeader,
    AppFooter
  }
}
</script>


<style>
/* System Fonts as used by Medium and WordPress */

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
}
</style>
