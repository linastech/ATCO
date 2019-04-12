const config  = require('config').get('DB')
const mongoose = require('mongoose')

mongoose.connect([
    `mongodb://`,
    `${config.username}:`,
    `${config.password}@`, 
    `${config.host}:`,
    `${config.port}`,
    `/${config.database}`,
    `?authSource=${config.authDb}`
  ].join('')).then(
  () => {
		console.log('Connected to the database')
	},
  err => {
		console.error(err)
		process.exit(1)
	}
)

module.exports = {
	products: 				require('./products')(mongoose.connection),
	categories: 			require('./categories')(mongoose.connection), 
	media: 						require('./media')(mongoose.connection), 
	users: 						require('./users')(mongoose.connection),
	careers: 					require('./careers')(mongoose.connection),
}