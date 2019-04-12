module.exports = function (connection) {
  var mongoose = require('mongoose')

	let newsSchema = new mongoose.Schema({
		title: 						{ type: String, required: true  },
		image: 						{ type: String, required: true  },
		date: 						{ type: Date, required: true  },
		author: 					{ type: String, required: true  },
		checked_by: 			{ type: String, required: true  },
		content:					{ type: String, required: true  },
		slug: 						{ type: String, required: true  },
		type: 						{ type: String, required: true  }
	})

	newsSchema.statics.get_news_articles = function(){
		return this.find().limit(10)
	}

	newsSchema.statics.get_article = function(slug){
		return this.findOne({'slug': slug})
	}

	return connection.model('news', newsSchema)
}

