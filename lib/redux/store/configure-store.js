
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from 'reduxReducers'
import api from '../middleware/api'

const composeEnhancers = composeWithDevTools({
  trace: true,
});

export const store = (initialState = {}) => {
  return createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(
      applyMiddleware(thunk, api),
    ),
  )
}