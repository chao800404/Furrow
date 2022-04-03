/** @format */

import {
  collectionSnapshot,
  collectionToMap,
} from "../../firebase/firebase.utils";
import { all, takeLatest, put, call } from "redux-saga/effects";
import ShopActionTypes from "./shop.type";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.actions";

function* fetchCollectionsAsync() {
  try {
    const snapshot = yield collectionSnapshot();
    const collections = collectionToMap(snapshot);
    yield put(fetchCollectionSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
