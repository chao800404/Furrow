/** @format */

import { all, put, call, takeLatest } from "redux-saga/effects";
import FeatureAction from "./feature.type";
import { fetchFeatureSuccess, fetchFeatureFailure } from "./feature.action";
import { client } from "../../lib/client";

function* featureFetchingSuccess() {
  try {
    const query = '*[_type == "featurePage"]';
    const featurePageData = yield client.fetch(query);
    yield put(fetchFeatureSuccess(featurePageData[0]));
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
