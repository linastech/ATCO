module.exports = function (connection) {
	const mongoose 	= require('mongoose')
	// const bcrypt 		= require('bcrypt-nodejs')

	let usersSchema = new mongoose.Schema({
		username: 		{ type: String, required: true  },
		password: 		{ type: String, required: true  },
		email: 				{ type: String, required: true  },
		last_login: 	{ type: Date, required: true  }
	})

	// usersSchema.statics.createUser = function(postData){
	// 	const _this = this

	// 	bcrypt.hash(postData.password, null, null, function(err, hash) {
	// 		_this.create({
	// 			username: postData.username,
	// 			password: hash,
	// 			email: postData.email,
	// 			last_login: new Date()
	// 		})
	// 	})
	// }

	// usersSchema.statics.validateLogin = async function(username, password) {
	// 	//find the user
	// 	const userData = await this.findOne({username: username})
		
	// 	if(userData === null){
	// 		console.log('validated1')
	// 		return false
	// 	}else{
	// 		//hash password and compare
	// 		const passwordValidated = await bcrypt.compareSync(password, userData.password)

	// 		return passwordValidated === true ? userData : false
	// 	}
	// }

	return connection.model('users', usersSchema)
}