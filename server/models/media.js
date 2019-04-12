const mongoose = require('mongoose')

module.exports = connection => {
	const schema = new mongoose.Schema({
		title: 						{ type: String, required: true  },
		image: 						{ type: String, required: true  },
		date: 						{ type: Date, required: true  },
		author: 					{ type: String, required: true  },
		content:					{ type: String, required: true  },
		slug: 						{ type: String, required: true  },
		type: 						{ type: String, required: true  }
  })

	schema.statics = {
    recent(amount){
      return new Promise(async(resolve, reject) => {
        try{
          const data = await this.find().limit(amount).exec()

          resolve(data)
        }catch(error){ reject(error) }
      })
    },

    getPosts(amount){ 
      return new Promise(async(resolve, reject) => {
        try{
          const data = await this.find().limit(amount).exec()

          resolve(data)
        }catch(error){ reject(error) }
      })
    },

    getSinglePost(slug){ 
      return new Promise(async(resolve, reject) => {
        try{
          const data = await this.findOne({slug: slug}).exec()

          resolve(data)
        }catch(error){ reject(error) }
      })
    }
  }

	return connection.model('media', schema)
}