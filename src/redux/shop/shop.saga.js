/** @format */

import { snapshot, collectionToMap } from "../../firebase/firebase.utils";
import { all, takeLatest, put, call } from "redux-saga/effects";
import ShopActionTypes from "./shop.type";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

function* fetchCollectionsAsync() {
  try {
    const response = yield snapshot("collections");
    const collections = collectionToMap(response);
    yield put(fetchCollectionSuccess(collections));
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
