const withPlugins = require('next-compose-plugins')
const path = require('path')

module.exports = withPlugins(
  //SASS
  [
    [
      require('@zeit/next-sass'), 
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]'
        },
        sassLoaderOptions: {
          includePaths: [
            path.join(__dirname, 'static/scss'),
          ]
        }
      }
    ]
  ],
  //next.config.js goes here, webpack as well
  {
    env: {},
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
    useFileSystemPublicRoutes: false,
    webpack (config, { buildId, dev, isServer, defaultLoaders}) {
      config.module.rules.push({
        test: /\.scss$/,
        loader: "sass-resources-loader",
        options: {
          resources: [
            path.join(__dirname, 'static/scss/mixins.scss'),
            path.join(__dirname, 'static/scss/nprogress.scss'),
            path.join(__dirname, 'static/scss/variables.scss'),
          ]
        }
      })
      
      config.resolve.alias['heroComponent'] = path.join(__dirname, 'components/hero/Hero')
      config.resolve.alias['router'] = path.join(__dirname, 'server/routes')
      config.resolve.alias['lib'] = path.join(__dirname, 'lib')
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['css'] = path.join(__dirname, 'static/scss')
      config.resolve.alias['lib'] = path.join(__dirname, 'lib')
      config.resolve.alias['reduxStore'] = path.join(__dirname, 'lib/redux/store/configure-store')
      config.resolve.alias['reduxActions'] = path.join(__dirname, 'lib/redux/actions')
      config.resolve.alias['reduxReducers'] = path.join(__dirname, 'lib/redux/reducers')
      config.resolve.alias['reduxMiddleware'] = path.join(__dirname, 'lib/redux/middleware')

      return config
    }
  }
)