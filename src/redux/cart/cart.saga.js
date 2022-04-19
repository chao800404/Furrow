/** @format */

import { call, takeLatest, put, all } from "redux-saga/effects";
import cartActionType from "./cart.type";
import { createOrderProfileDoc } from "../../firebase/firebase.utils";
import { cartCleanItem } from "./cart.action";

function* cartPaymentSuccess({ payload }) {
  try {
    const { order, customData, id } = yield payload;
    yield createOrderProfileDoc({ order, id, customData });
    yield put(cartCleanItem());
  } catch (error) {
    console.log(error);
  }
}

function* onCartPayment() {
  yield takeLatest(cartActionType.CART_PAYMENT_START, cartPaymentSuccess);
}

function* cartSagas() {
  yield all([call(onCartPayment)]);
}

export default cartSagas;
