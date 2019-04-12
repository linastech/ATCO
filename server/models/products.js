const mongoose = require('mongoose')

module.exports = connection => {

	const schema = new mongoose.Schema({
		name: 						{ type: String, required: true  },
		cat: 							{ type: String, required: true  },
		category: 				{ type: String, required: true  },
		prospect: 				{ type: Array, required: true  },
		expert_prospect: 	{ type: String, required: true  },
		tags: 						{ type: Array, required: true  },
		slug: 						{ type: String, required: true  },
		'web-type':				{ type: String, required: true  },
		'coming-soon':		{ type: Boolean, required: true, default: false  },
		image:						{ type: String, required: true  }
  })
  
  schema.statics = {
    listByLetter(type, onMarket, category, letter) {
      return new Promise(async(resolve, reject) => {
        try{
          let query = {
            'coming-soon': onMarket == 'on-market' ? false : true, //false means it is on the market
            'web-type': type,
            cat: { '$regex': new RegExp('^'+category+'$', 'i') }
          }

          const fields = {_id: 0, name: 1, slug: 1, cat: 1, 'web-type': 1, 'coming-soon': 1 }

          const total = await this.countDocuments(query).exec()

          if(total > 10)
            query.name = { '$regex': new RegExp('^'+letter, 'i') }

          const products = await this.find(query, fields).exec()

          resolve({
            [type]: {
              [onMarket]: {
                [category]: {
                  total: total,
                  [letter]: products
                }
              }
            }
          })
        }catch(error){ reject(error) }
      })
    },
 
    getAlphabet(type, onMarket, category) {
      return new Promise(async(resolve, reject) => {
        try{
          const data = await this.aggregate([
            { 
              $match: {'web-type': type} //atcovet - atcohuman
            },
            { 
              $match: {'coming-soon': onMarket == 'on-market' ? false : true}
            },
            { 
              $match: { 'cat': { '$regex': new RegExp('^'+category+'$', 'i') }}
            },
            {
              $group: {
                _id: { $substr: ['$name', 0, 1] },
                count: { $sum: 1 },
              }
            },
            {
              $sort: { _id: 1 }
            }
          ]).exec()

          resolve({
            [type]: {
              [onMarket]: {
                [category]: data
              }
            }
          })
        }catch(error){ reject(error) }
      })
    },

    search(query) {
      return this.find({name: {'$regex' : '^'+query, '$options' : 'i'} }).limit(10)
    },

    getProduct(slug) {
      return new Promise(async(resolve, reject) => {
        try{
          const data = await this.findOne({'slug': slug}).exec()

          resolve(data)
        }catch(error){ reject(error) }
      })
    },

    adminGetProducts(category, departament, on_market){
      let conditions = {}

      if(category != 'all'){
        conditions['coming-soon'] = category.split('@')[0] == 'coming_soon'
        conditions['cat'] = category.split('@')[1]
      }

      if(departament != 'all')
        conditions['web-type'] = departament

      if(on_market != 'all')
        conditions['coming-soon'] = on_market == 'coming_soon'
      
      return this.find(conditions).exec()
    }
  }

	return connection.model('products', schema)
}