/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import { client } from "../../lib/client";
import { postActionSuccess, postActionFailure } from "./post.actions";
import PostType from "./post.type";

const postActionFetching = function* () {
  try {
    const query = "*[_type == 'post']";
    const postData = yield client.fetch(query);
    yield put(postActionSuccess(postData));
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
