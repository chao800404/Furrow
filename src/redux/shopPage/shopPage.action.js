/** @format */

import ShopPageActionType from "./shopPage.type";

export const fetchShopPageStart = () => ({
  type: ShopPageActionType.FETCHING_SHOPPAGE_START,
});

export const fetchShopPageSuccess = (shopPageData) => ({
  type: ShopPageActionType.FETCHING_SHOPPAGE_SUCCESS,
  payload: shopPageData,
});

export const fetchShopPageFailure = (error) => ({
  type: ShopPageActionType.FETCHING_SHOPPAGE_FAILURE,
  payload: error,
});
