const logger = require('@logger')(__filename)
const url = require('url')

module.exports = (app) => {
  return {
    handleError(error, req, res, next){
      logger.error(error.stack)

      res.status(500)

      if(req.xhr)
        res.json({ error: error.message || error.toString() })
      else
        app.render(req, res, '/home/Page')
    },
    customRequestHandler({req, res, route, query}){
      // console.log(query)
      query.projectData = {}

      //needed in the client
      query.projectData.currentUrl = url.format({
        protocol: req.protocol,
        host: req.get('host'),
        pathname: req.originalUrl,
      })

      
      let domain = url.format({host: req.get('host')}).split('.')
      if(['atco', 'vet', 'human'].indexOf(domain[0]) > -1)
        domain.shift()
      
      domain = domain.join('.')
      
      query.projectData.domain = url.format({host: domain})
  
      const subdomains = req.subdomains.filter(domain => domain != 'www')

      if (subdomains == 0 || subdomains.indexOf('atco') > -1)
        query.projectData.pageType = 'landing'
    
      if (subdomains.indexOf('vet') > -1)
        query.projectData.pageType = 'atcovet'
  
      if (subdomains.indexOf('human') > -1)
        query.projectData.pageType = 'atcohuman'
  
      //landing page is a special case
      if(query.projectData.pageType == 'landing')
        return app.render(req, res, '/landing/LandingPage', query)
  
      app.render(req, res, route.page, query)
    }
  }
}