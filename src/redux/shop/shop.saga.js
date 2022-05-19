/** @format */

import { all, takeLatest, put, call } from "redux-saga/effects";
import ShopActionTypes from "./shop.type";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";
import { client } from "../../lib/client";

function* fetchCollectionsAsync() {
  try {
    const query = '*[_type == "collection"]';
    const collection = yield client.fetch(query);
    yield put(fetchCollectionSuccess(collection));
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
