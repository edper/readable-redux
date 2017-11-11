import { combineReducers } from 'redux'

import {
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

export default combineReducers({
    post,
    comment,
  })