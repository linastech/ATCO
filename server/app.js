const path = require('path')
require('module-alias/register')
const express = require('express')
const logger = require('@logger')(__filename)
const cors = require('cors')
const config = require('config').server
const utils = require('@utils')
const routes = require('./routes')
const mongoSanitize = require('express-mongo-sanitize')
const bodyParser = require('body-parser')
const next = require('next') 

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev})
const handler = routes.getRequestHandler(app, utils(app).customRequestHandler)

app.prepare().then(() => {
  const server = express()
  
  server.use(cors())  
  server.use(bodyParser.json()) // for parsing application/json
  server.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  server.use(mongoSanitize()) 
 
  // if (!dev) 
  //   server.set('trust proxy', 1);

  server.use('/api/v1/', require('./api/'))
  server.use(handler)

  // server.get('/robots.txt', (_, res) => {
  //   res.sendFile(path.join(__dirname, '../static', 'robots.txt'));
  // });

  server.use(utils(app).handleError)

  server.listen(config.port, err => {
    if (err)
      throw err

    console.log(`> Ready on PORT ${config.port}`)
  })
})  