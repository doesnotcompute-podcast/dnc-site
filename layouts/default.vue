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
import AppHeader from '~/components/global/AppHeader.vue'
import AppFooter from '~/components/global/AppFooter.vue'

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

a,
a:visited {
  color: black;
}
</style>
