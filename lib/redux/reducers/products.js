import * as ActionTypes from 'reduxActions/products'
import merge from 'lodash/merge'

const initialState = {
  categories: {},
  productsList: {},
  productsListFetching: false,
  alphabet: {},
  alphabetFetching: false,
  products: {},
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CATEGORIES_SUCCESS:
      return merge({}, state, {
        categories: {
          [action.response['web-type']]: {
            coming_soon: action.response.coming_soon,
            on_market: action.response.on_market,
          }
        }
      })
    case ActionTypes.PRODSLIST_ALPHABET_REQUEST:
      return merge({}, state, {
        alphabetFetching: true
      })
    case ActionTypes.PRODSLIST_ALPHABET_SUCCESS:
      return merge({}, state, {
        alphabet: action.response,
        alphabetFetching: false
      })
    case ActionTypes.PRODSLIST_REQUEST:
      return merge({}, state, {
        productsListFetching: true
      })    
    case ActionTypes.PRODSLIST_SUCCESS:
      return merge({}, state, {
        productsList: action.response,
        productsListFetching: false
      })
    case ActionTypes.PRODUCT_SUCCESS:
      return merge({}, state, {
        products: merge({}, {[action.response.slug]: action.response}, state.products.products)
      })
    default:
      return state
  }
}

export default products

