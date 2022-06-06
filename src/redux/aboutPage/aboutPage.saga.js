/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import AboutPageType from "./aboutPage.type";
import { aboutPageFailure, aboutPageSuccess } from "./aboutPage.actions";
import { proFetch, fetchTimeout } from "../utils";

function* aboutPageFetchingSuccess() {
  try {
    const query = '*[_type == "aboutPage"]';
    const { data: aboutPageData } = yield call(proFetch, query);
    aboutPageData
      ? yield put(aboutPageSuccess(aboutPageData[0]))
      : yield put(aboutPageFailure(fetchTimeout));
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
