import * as ActionTypes from 'reduxActions/media'
import merge from 'lodash/merge'

const initialState = {
  recentPosts: [],
  posts: [],
  loadedPosts: {},
}

const media = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MEDIA_RECENT_SUCCESS:
      return merge({}, state, { recentPosts: action.response })
    case ActionTypes.MEDIA_POSTS_SUCCESS:
      return merge({}, state, { posts: action.response })
    case ActionTypes.MEDIA_POST_SUCCESS:
      return merge({}, state, {
        loadedPosts: merge({}, {[action.response.slug]: action.response}, state.loadedPosts)
      })
    default:
      return state
  }
}

export default media