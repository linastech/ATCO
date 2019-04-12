module.exports = function (connection) {
  var mongoose = require('mongoose')

	let pressReleaseSchema = new mongoose.Schema({
		title: 						{ type: String, required: true  },
		date: 						{ type: Date, required: true  },
		author: 					{ type: String, required: true  },
		content:					{ type: String, required: true  },
		slug: 						{ type: String, required: true  }
	})

	pressReleaseSchema.statics.get_press_releases = function(){
		return this.find().limit(10)
	}

	pressReleaseSchema.statics.get_press_release = function(slug){
		return this.findOne({'slug': slug})
	}

	return connection.model('press-releases', pressReleaseSchema)
}