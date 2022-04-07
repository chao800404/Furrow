/** @format */
import { all, call } from "redux-saga/effects";
import shopSagas from "./shop/shop.saga";
import shopPageSaga from "./shopPage/shopPage.saga";

function* rootSaga() {
  yield all([call(shopSagas), call(shopPageSaga)]);
}

export default rootSaga;
