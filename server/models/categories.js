const mongoose = require('mongoose')

module.exports = connection => {

	const schema = new mongoose.Schema({
		'web-type': 						{ type: String, required: true  },
		'coming_soon':					{ type: Array },
		'on_market':						{ type: Array },
  })

	schema.statics = {
    getCategories(pageType){ 
      let data

      if(pageType === 'all'){
        data = this.find().exec()
      }else{
        data = this.findOne({'web-type': pageType}).exec()
      }

      return data
    },

    update(data){
      return this.findByIdAndUpdate(
        data.id, 
        {
          [data.onMarket ? 'on_market': 'coming_soon']: data.categories
        }
      ).exec()
    }  
	}

	return connection.model('categories', schema)
}

