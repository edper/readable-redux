import { combineReducers } from 'redux'

import {
  GET_CATEGORIES,
  GET_POST,
  GET_ALL_POSTS,
  ADD_POST,
  REMOVE_POST,
  GET_COMMENT,
  GET_ALL_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT_FROM_POST,
} from '../actions'

function post (state = {}, action) {
    switch (action.type) {
    default :
        return state
    }
}

function comment (state = {}, action) {
    switch (action.type) {
      default :
        return state
    }
}

function categories (state = {}, action) {
  switch (action.type) {
    case GET_CATEGORIES:
        const {categories} = action
        return {categories};
    default :
      return state
  }
}

export default combineReducers({
    post,
    comment,
    categories
  })