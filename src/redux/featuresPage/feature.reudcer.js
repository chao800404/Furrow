/** @format */

import FeatureAction from "./feature.type";

const INITIAL_STATE = {
  isFetching: false,
  featureData: null,
  errorMessage: undefined,
};

const featureReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FeatureAction.FETCHING_FEATURE_DATA_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      };
    case FeatureAction.FETCHING_FEATURE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        featureData: action.payload,
        errorMessage: undefined,
      };
    case FeatureAction.FETCHING_FEATURE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        featureData: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default featureReducer;
