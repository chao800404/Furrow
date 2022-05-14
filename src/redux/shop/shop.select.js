/** @format */

import { createSelector } from "reselect";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import memoize from "lodash/memoize";
const selectShop = ({ shop }) => shop?.collection;

export const selectShopCollectionPreview = createSelector(
  [selectShop],
  (collection) => collection
);

export const selectOverViewPage = memoize((path) =>
  createSelector(
    [selectShopCollectionPreview],
    (collection) =>
      collection?.reduce((acc, { title, ...otherProps }) => {
        acc[title.toUpperCase()] = { title, ...otherProps };
        return acc;
      }, {})[path]
  )
);

export const selectPopupView = (path, color) => {
  return createSelector(
    [selectShopCollectionPreview],
    (collection) =>
      collection
        ?.reduce((acc, { title, ...otherProps }) => {
          acc[title.toUpperCase()] = { title, ...otherProps };
          return acc;
        }, {})
        [path.toUpperCase()].item.filter((item) => {
          const { curColor } = transferClassesTypeName({ color: item.color });
          return curColor === color;
        })
        .reduce((acc, item) => acc + item) || {}
  );
};

export const selectOverViewLink = createSelector(
  [selectShop],
  (collection) => collection?.map((collection) => collection.title) || []
);
