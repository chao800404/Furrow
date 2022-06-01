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
  createSelector([selectShopCollectionPreview], (collection) => {
    return collection?.reduce((acc, { productName, ...otherProps }) => {
      acc[productName.toLowerCase()] = { productName, ...otherProps };
      return acc;
    }, {})[path];
  })
);

export const selectPopupView = (path, color) => {
  return createSelector([selectShopCollectionPreview], (collection) => {
    const collectionPoupData = collection?.reduce(
      (acc, { productName, ...otherProps }) => {
        acc[productName.toLowerCase()] = { productName, ...otherProps };
        return acc;
      },
      {}
    )[path];
    const currentData = collectionPoupData?.product.filter((item) => {
      const { curColor } = transferClassesTypeName({ color: item.color });
      return curColor === color;
    });

    return currentData.length <= 0
      ? undefined
      : currentData.reduce((acc, item) => acc + item);
  });
};

export const selectOverViewLink = createSelector(
  [selectShop],
  (collection) => collection?.map((collection) => collection.slug.current) || []
);
