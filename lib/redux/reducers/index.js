import { combineReducers } from 'redux'
import projectReducer from 'reduxReducers/project'
import productsReducer from 'reduxReducers/products'
import mediaReducer from 'reduxReducers/media'

const rootReducer = combineReducers({
  project: projectReducer,
  media: mediaReducer,
  products: productsReducer,
})

export default rootReducer