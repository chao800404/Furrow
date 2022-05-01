/** @format */

import FeatureAction from "./feature.type";

export const fetchFeatureStart = () => ({
  type: FeatureAction.FETCHING_FEATURE_DATA_START,
});

export const fetchFeatureSuccess = (data) => ({
  type: FeatureAction.FETCHING_FEATURE_DATA_SUCCESS,
  payload: data,
});

export const fetchFeatureFailure = (error) => ({
  type: FeatureAction.FETCHING_FEATURE_DATA_FAILURE,
  payload: error,
});
