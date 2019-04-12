import { CALL_API } from 'reduxMiddleware/api'
import _ from 'lodash'

export const MEDIA_RECENT_REQUEST = 'MEDIA_RECENT_REQUEST'
export const MEDIA_RECENT_SUCCESS = 'MEDIA_RECENT_SUCCESS'
export const MEDIA_RECENT_FAILURE = 'MEDIA_RECENT_FAILURE'
export const loadRecentMedia = (amount) => (dispatch, getState) => {
  return dispatch({
    [CALL_API]: {
      types: [ MEDIA_RECENT_REQUEST, MEDIA_RECENT_SUCCESS, MEDIA_RECENT_FAILURE ],
      endpoint: `media/recent/${amount}`,
    }
  })
}

export const MEDIA_POSTS_REQUEST = 'MEDIA_POSTS_REQUEST'
export const MEDIA_POSTS_SUCCESS = 'MEDIA_POSTS_SUCCESS'
export const MEDIA_POSTS_FAILURE = 'MEDIA_POSTS_FAILURE'
export const loadMediaPosts = (amount) => (dispatch, getState) => {
  return dispatch({
    [CALL_API]: {
      types: [ MEDIA_POSTS_REQUEST, MEDIA_POSTS_SUCCESS, MEDIA_POSTS_FAILURE ],
      endpoint: `media/posts/${amount}`,
    }
  })
}

export const MEDIA_POST_REQUEST = 'MEDIA_POST_REQUEST'
export const MEDIA_POST_SUCCESS = 'MEDIA_POST_SUCCESS'
export const MEDIA_POST_FAILURE = 'MEDIA_POST_FAILURE'
export const loadMediaPost = (slug) => (dispatch, getState) => {
  return dispatch({
    [CALL_API]: {
      types: [ MEDIA_POST_REQUEST, MEDIA_POST_SUCCESS, MEDIA_POST_FAILURE ],
      endpoint: `media/get-post/${slug}`,
    }
  })
}