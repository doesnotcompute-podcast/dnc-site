require('dotenv').config()

const title = 'Does Not Compute Podcast'
const description =
  'A weekly podcast about the lives and workflows of modern web developers, hosted by Sean Washington & Paul Straw.'

module.exports = {
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      { property: 'og:site_name', content: title },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'alernate',
        type: 'application/rss+xml',
        title: 'Does Not Compute RSS',
        href: 'https://rss.simplecast.com/podcasts/1386/rss'
      }
    ]
  },
  css: ['tachyons/css/tachyons.css'],
  loading: { color: '#3B8070' },
  plugins: [{ src: '~plugins/ga.js', ssr: false }],
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    GA_ID: process.env.GA_ID
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
