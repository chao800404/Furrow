/** @format */

import { call, put, takeLatest, all } from "redux-saga/effects";
import ShopPageActionType from "./shopPage.type";
import { fetchShopPageSuccess, fetchShopPageFailure } from "./shopPage.action";
import { proFetch, fetchTimeout } from "../utils";

function* fetchShopPageAsync() {
  try {
    const query = '*[_type == "shop_page_data"]';
    const { data: shopPageData } = yield call(proFetch, query);
    shopPageData
      ? yield put(fetchShopPageSuccess(shopPageData))
      : yield put(fetchShopPageFailure(fetchTimeout));
  } catch (error) {
    yield put(fetchShopPageFailure(error));
  }
}

function* fetchShopPageStart() {
  yield takeLatest(
    ShopPageActionType.FETCHING_SHOPPAGE_START,
    fetchShopPageAsync
  );
}

function* shopPageSaga() {
  yield all([call(fetchShopPageStart)]);
}

export default shopPageSaga;
