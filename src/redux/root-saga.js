/** @format */
import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.saga";

function* rootSaga() {
  yield all([call(shopSagas)]);
}

export default rootSaga;
