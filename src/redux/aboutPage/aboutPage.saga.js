/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import { snapshot, aboutPageToMap } from "../../firebase/firebase.utils";
import AboutPageType from "./aboutPage.type";
import { aboutPageFailure, aboutPageSuccess } from "./aboutPage.actions";

function* aboutPageFetchingSuccess() {
  try {
    const ref = yield snapshot("aboutPage");
    const { data } = yield aboutPageToMap(ref);
    yield put(aboutPageSuccess(data));
  } catch (error) {
    yield put(aboutPageFailure(error));
  }
}

function* aboutPageFetchingStart() {
  yield takeLatest(
    AboutPageType.FETCHING_ABOUT_DATA_START,
    aboutPageFetchingSuccess
  );
}

function* aboutPageSaga() {
  yield all([call(aboutPageFetchingStart)]);
}

export default aboutPageSaga;
