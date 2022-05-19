/** @format */
import PostType from "./post.type";

const INITIAL_STATE = {
  isFetching: false,
  postData: [],
  errorMessage: undefined,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostType.FETCHING_POST_DATA_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      };
    case PostType.FETCHING_POST_DATA_SUCCESS:
      return {
        ...state,
        postData: action.payload,
        isFetching: false,
        errorMessage: undefined,
      };
    case PostType.FETCHING_POST_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
