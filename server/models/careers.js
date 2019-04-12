module.exports = function (connection) {
  var mongoose = require('mongoose')

	let careersSchema = new mongoose.Schema({
		position: 				{ type: String, required: true  },
		image: 						{ type: Object, required: true  },
		date: 						{ type: Date, required: true  },
		content:					{ type: String, required: true  },
		vacancies:				{ type: Number, required: true  },
		slug: 						{ type: String, required: true  },
	})

	careersSchema.statics.list = function(){
		return this.find()
  }
  
	careersSchema.statics.post = function(slug){
		return this.findOne({slug: slug})
	}

	return connection.model('careers', careersSchema)
}

