import fetch from 'cross-fetch';

const callApi = async (endpoint) => {
  const url = `http://atco.linas.io/api/v1/${endpoint}`

  try {
    const res = await fetch(url)
    
    if (res.status >= 400) 
      return Promise.reject('Bad response from server')

    const data = await res.json()

    return Promise.resolve(data)
  } catch (err) {
    return Promise.reject(`Error fetching ${endpoint}`)
  }
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API'

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types } = callAPI

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))
  
  return callApi(endpoint).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}