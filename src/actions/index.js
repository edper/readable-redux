export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT_FROM_POST = 'REMOVE_COMMENT_FROM_POST'

export function addPost ({ title, body, category, author }) {
  return {
    type: ADD_POST,
    title,
    body,
    category,
    author,
  }
}

export function removePost ({ postID }) {
  return {
    type: REMOVE_POST,
    postID,
  }
}

export function addComment ({ ParentID, comment }) {
    return {
      type: ADD_COMMENT,
      ParentID,
      comment,
    }
  }
  
  export function removeComentFromPost ({ commentID }) {
    return {
      type: REMOVE_COMMENT_FROM_POST,
      commentID,
    }
  }