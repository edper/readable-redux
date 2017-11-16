import { combineReducers } from 'redux'

import {
  GET_CATEGORY,
  GET_POST,
  ADD_POST,
  REMOVE_POST,
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

function category (state = {}, action) {
  switch (action.type) {
    default :
      return state
  }
}

export default combineReducers({
    post,
    comment,
    category
  })