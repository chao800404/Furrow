/** @format */

import { all, put, call, takeLatest } from "redux-saga/effects";
import FeatureAction from "./feature.type";
import { fetchFeatureSuccess, fetchFeatureFailure } from "./feature.action";
import { snapshot, aboutPageToMap } from "../../firebase/firebase.utils";

function* featureFetchingSuccess() {
  try {
    const featureRef = yield snapshot("featuresPage");
    const { data } = yield aboutPageToMap(featureRef);
    yield put(fetchFeatureSuccess(data));
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
