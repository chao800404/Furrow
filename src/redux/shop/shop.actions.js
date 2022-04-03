/** @format */

import ShopActionTypes from "./shop.type";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collection) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collection,
});

export const fetchCollectionFailure = (message) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: message,
});
