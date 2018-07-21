require('dotenv').config()

const axios = require('axios')

const title = 'Does Not Compute Podcast'
const description =
  'A weekly podcast about the lives and workflows of modern web developers, hosted by Sean Washington, Rockwell Schrock, and Mikhail Delport.'
const ogImage = '/ogimage.jpg'

module.exports = {
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'google-site-verification',
        content: process.env.G_SITE_VERIFICATION_TOKEN
      },
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:image', property: 'og:image', content: ogImage },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/jpeg'
      },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
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
    GA_ID: process.env.GA_ID,
    G_SITE_VERIFICATION_TOKEN: process.env.G_SITE_VERIFICATION_TOKEN
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  axios: {
    debug: false,
    credentials: false,
    baseURL: process.env.API_URL
  },
  sitemap: {
    routes: function() {
      let url = `${process.env.API_URL}/podcasts/${
        process.env.PODCAST_ID
      }/episodes.json?api_key=${process.env.API_KEY}`

      return axios.get(url).then(res => {
        return res.data.map(episode => {
          return {
            url: '/episodes/' + episode.id,
            lastmodISO: episode.published_at,
            priority: 0.9
          }
        })
      })
    }
  }
}
