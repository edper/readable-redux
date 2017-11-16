export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_POST = 'GET_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const ADD_POST = 'ADD_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const GET_COMMENT = 'GET_COMMENT';
export const GET_ALL_COMMENTS = 'GET_ALL_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT_FROM_POST = 'REMOVE_COMMENT_FROM_POST';


export function getCategory ({  }) {
  return {
    type: GET_CATEGORY,
  }
}

export function getPost ({ postID }) {
  return {
    type: GET_POST,
    postID,
  }
}

export function getAllPosts ({  }) {
  return {
    type: GET_ALL_POSTS,
  }
}


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