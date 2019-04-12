module.exports = function (connection) {
  var mongoose = require('mongoose')


	let eventsSchema = new mongoose.Schema({
		title: 						{ type: String, required: true  },
		date: 						{ type: Date, required: true  },
		author: 					{ type: String, required: true  },
		image: 						{ type: String, required: true  },
		content:					{ type: String, required: true  },
		slug: 						{ type: String, required: true  }
	})

	eventsSchema.statics.get_events = function(){
		return this.find().limit(10)
	}
	// console.log(this.find().limit(10))
	eventsSchema.statics.get_event = function(slug){
		return this.findOne({'slug': slug})
	}
	return connection.model('events', eventsSchema)
}