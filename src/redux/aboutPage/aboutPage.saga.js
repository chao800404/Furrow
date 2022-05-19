/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import AboutPageType from "./aboutPage.type";
import { aboutPageFailure, aboutPageSuccess } from "./aboutPage.actions";
import { client } from "../../lib/client";

function* aboutPageFetchingSuccess() {
  try {
    const query = '*[_type == "aboutPage"]';
    const aboutPageData = yield client.fetch(query);
    yield put(aboutPageSuccess(aboutPageData[0]));
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
