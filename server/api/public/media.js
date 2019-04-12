const logger = require('@logger')(__filename)
const DB = require('@database')

module.exports = (Router) => {
  Router.get('/media/recent/:amount', async (req, res, next) => {
    try {
      const data = await DB.media.recent(parseInt(req.params.amount))

      res.json(data)
    }catch(err){
      next(err)
    }
  })

  Router.get('/media/posts/:amount', async (req, res, next) => {
    try {
      const data = await DB.media.getPosts(parseInt(req.params.amount))

      res.json(data)
    }catch(err){
      next(err)
    }
  })

  Router.get('/media/get-post/:slug', async (req, res, next) => {
    try {
      const data = await DB.media.getSinglePost(req.params.slug)

      res.json(data)
    }catch(err){
      next(err)
    }
  })

  return this
}