import { CALL_API } from 'reduxMiddleware/api'
import _ from 'lodash'

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE'
export const loadCategories = () => (dispatch, getState) => {
  const pageType = getState().project.pageType

  if(getState().products.categories[pageType])
    return null

  return dispatch({
    [CALL_API]: {
      types: [ CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE ],
      endpoint: `products/categories/list/${pageType}`,
    }
  })
}

export const PRODSLIST_REQUEST = 'PRODSLIST_REQUEST'
export const PRODSLIST_SUCCESS = 'PRODSLIST_SUCCESS'
export const PRODSLIST_FAILURE = 'PRODSLIST_FAILURE'
export const loadCategoryProducts = (isOnMarket, category, selectedLetter = 'A') => (dispatch, getState) => {
  const pageType = getState().project.pageType

  if(_.hasIn(getState(), ['products', 'productsList', pageType, isOnMarket, category, selectedLetter]))
    return null

  return dispatch({
    [CALL_API]: {
      types: [ PRODSLIST_REQUEST, PRODSLIST_SUCCESS, PRODSLIST_FAILURE ],
      endpoint: `products/categories/list-products/${pageType}/${isOnMarket}/${category}/${selectedLetter}`,
    }
  })
}

export const PRODSLIST_ALPHABET_REQUEST = 'PRODSLIST_ALPHABET_REQUEST'
export const PRODSLIST_ALPHABET_SUCCESS = 'PRODSLIST_ALPHABET_SUCCESS'
export const PRODSLIST_ALPHABET_FAILURE = 'PRODSLIST_ALPHABET_FAILURE'
export const loadCategoryProdAlphabet = (isOnMarket, category) => (dispatch, getState) => {
  const pageType = getState().project.pageType

  if(_.hasIn(getState(), ['products', 'alphabet', pageType, isOnMarket, category]))
    return null

  return dispatch({
    [CALL_API]: {
      types: [ PRODSLIST_ALPHABET_REQUEST, PRODSLIST_ALPHABET_SUCCESS, PRODSLIST_ALPHABET_FAILURE ],
      endpoint: `products/category/get-alphabet/${pageType}/${isOnMarket}/${category}`,
    }
  })
}


export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAILURE = 'PRODUCT_FAILURE'
export const loadProduct = (slug) => (dispatch, getState) => {
  if(_.hasIn(getState(), ['products', 'products', slug]))
    return null

  return dispatch({
    [CALL_API]: {
      types: [ PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE ],
      endpoint: `products/get-product/${slug}`,
    }
  })
}