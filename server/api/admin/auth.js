module.exports = function(Router) {
  Router.get('/auth/login', (req, res) => {
    res.end('auth login route')
  })

  return this
}