/** @format */

import { all, put, call, takeLatest } from "redux-saga/effects";
import FeatureAction from "./feature.type";
import { fetchFeatureSuccess, fetchFeatureFailure } from "./feature.action";
import { proFetch, fetchTimeout } from "../utils";

function* featureFetchingSuccess() {
  try {
    const query = '*[_type == "featurePage"]';
    const { data: featurePageData } = yield call(proFetch, query);
    featurePageData
      ? yield put(fetchFeatureSuccess(featurePageData[0]))
      : yield put(fetchFeatureFailure(fetchTimeout));
  } catch (error) {
    yield put(fetchFeatureFailure(error));
  }
}

function* featureFetchAction() {
  yield takeLatest(
    FeatureAction.FETCHING_FEATURE_DATA_START,
    featureFetchingSuccess
  );
}

function* featureSaga() {
  yield all([call(featureFetchAction)]);
}

export default featureSaga;
