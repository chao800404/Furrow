/** @format */

import AboutPageType from "./aboutPage.type";

const INITIAL_STATE = {
  isFetching: false,
  aboutData: {},
  errorMessage: undefined,
};

const aboutPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AboutPageType.FETCHING_ABOUT_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case AboutPageType.FETCHING_ABOUT_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: undefined,
        aboutData: action.payload,
      };
    case AboutPageType.FETCHING_ABOUT_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default aboutPageReducer;
