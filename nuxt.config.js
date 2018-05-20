require('dotenv').config()

module.exports = {
  // prettier-ignore
  head: {
    title: 'Does Not Compute',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: ['tachyons/css/tachyons.css'],
  loading: { color: '#3B8070' },
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  axios: {
    debug: false,
    credentials: false,
    baseURL: process.env.API_URL
  }
}
