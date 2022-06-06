/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import { postActionSuccess, postActionFailure } from "./post.actions";
import PostType from "./post.type";
import { proFetch, fetchTimeout } from "../utils";

const postActionFetching = function* () {
  try {
    const query = "*[_type == 'post']";
    const { data: postData } = yield call(proFetch, query);
    postData
      ? yield put(postActionSuccess(postData))
      : yield put(postActionFailure(fetchTimeout));
  } catch (error) {
    yield put(postActionFailure(error));
  }
};

const postActionStart = function* () {
  yield takeLatest(PostType.FETCHING_POST_DATA_START, postActionFetching);
};

const postSaga = function* () {
  yield all([call(postActionStart)]);
};

export default postSaga;
