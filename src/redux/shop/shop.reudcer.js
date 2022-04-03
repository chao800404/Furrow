/** @format */
import shopActionTypes from "./shop.type";

const INITIAL_STATE = {
  isFetching: false,
  collection: null,
  errMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
