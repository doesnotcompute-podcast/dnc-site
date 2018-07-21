<template>
  <footer class="mw9 center mv4 f6">
    <div class="bt pv4">
      <div
        v-for="contrib in contributors"
        :key="contrib.name"
        class="fl mr4"
      >
        <a
          href="/"
          class="dib link black dim b tracked"
          v-text="contrib.name"
        />

        <ul class="mt2 ma0 pa0">
          <li class="dib">
            <a
              :href="contrib.github"
              class="link black dim"
            >GitHub</a>
          </li>
          <li class="dib ml2">
            <a
              :href="contrib.twitter"
              class="link black dim"
            >Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contributors: [
        {
          name: 'Sean Washington',
          github: 'https://github.com/seanwash',
          twitter: 'https://twitter.com/seanwashbot'
        },
        {
          name: 'Rockwell Schrock',
          github: 'https://github.com/schrockwell',
          twitter: 'https://twitter.com/schrockwell'
        },
        {
          name: 'Mikhail Delport',
          github: 'https://github.com/mikhailbot',
          twitter: 'https://twitter.com/_mikhailbot'
        }
      ]
    }
  }
}
</script>
