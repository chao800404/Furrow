/** @format */

import PostType from "./post.type";

export const postActionStart = () => ({
  type: PostType.FETCHING_POST_DATA_START,
});

export const postActionSuccess = (data) => ({
  type: PostType.FETCHING_POST_DATA_SUCCESS,
  payload: data,
});

export const postActionFailure = (error) => ({
  type: PostType.FETCHING_POST_DATA_FAILURE,
  payload: error,
});

export const TOGGLEBookMark = (bookMark) => ({
  type: PostType.TOGGLE_BOOKMARK,
  payload: bookMark,
});
