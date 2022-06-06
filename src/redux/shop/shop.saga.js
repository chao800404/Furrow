/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import ShopActionTypes from "./shop.type";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import { proFetch, fetchTimeout } from "../utils";

function* fetchCollectionsAsync() {
  try {
    const query = '*[_type == "collection"]';
    const { data: collection } = yield call(proFetch, query);
    collection
      ? yield put(fetchCollectionSuccess(collection))
      : yield put(fetchCollectionFailure(fetchTimeout));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}

export default shopSagas;
