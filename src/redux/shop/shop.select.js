/** @format */

import { createSelector } from "reselect";

const selectShop = ({ shop }) => shop.collection;

export const selectShopCollectionPreview = createSelector(
  [selectShop],
  (collection) => (collection ? collection : [])
);
