const logger = require('@logger')(__filename)
const DB = require('@database')

module.exports = (Router) => {
  Router.get('/products/get-product/:slug', async (req, res, next) => {
    try {
      const data = await DB.products.getProduct(req.params.slug)

      res.json(data)
    }catch(err){ next(err) }
  })

  Router.get('/products/categories/list/:type', async (req, res, next) => {
    try {
      const data = await DB.categories.getCategories(req.params.type)

      res.json(data)
    }catch(err){ next(err) }
  })

  Router.get('/products/categories/list-products/:type/:onMarket/:category/:letter', async (req, res, next) => {
    try {
      const data = await DB.products.listByLetter(
        req.params.type, 
        req.params.onMarket, 
        req.params.category,
        req.params.letter
      )

      res.json(data)
    }catch(err){ next(err) }
  })

  Router.get('/products/category/get-alphabet/:type/:onMarket/:category', async (req, res, next) => {
    try {
      const data = await DB.products.getAlphabet(
        req.params.type, 
        req.params.onMarket, 
        req.params.category,
      )

      res.json(data)
    }catch(err){ next(err) }
  })

  return this
}