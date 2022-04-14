/** @format */
import { all, call } from "redux-saga/effects";
import shopSagas from "./shop/shop.saga";
import shopPageSaga from "./shopPage/shopPage.saga";
import userSagas from "./user/user.saga";

function* rootSaga() {
  yield all([call(shopSagas), call(shopPageSaga), call(userSagas)]);
}

export default rootSaga;
