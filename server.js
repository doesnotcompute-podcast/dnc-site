const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'
const morgan = require('morgan')
const isProd = process.env.NODE_ENV === 'production'
const logFormat = isProd ? 'combined' : 'dev'

app.use(morgan(logFormat))

let config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
config.dev = !isProd

app.use(nuxt.render)

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt)
    .build()
    .then(listen)
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

function listen() {
  app.listen(port, host, function() {
    console.log('Server listening on ' + host + ':' + port)
  })
}
