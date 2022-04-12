/** @format */

import { createSelector } from "reselect";

const selectCart = ({ cart }) => cart;

export const selectCartToggleHidden = createSelector(
  [selectCart],
  (selectCart) => selectCart.hidden
);

export const selectCartItem = createSelector(
  [selectCart],
  (selectCart) => selectCart.cartItem
);

export const selectCartToggleHovered = createSelector(
  [selectCart],
  (selectCart) => selectCart.hovered
);

export const selectCartShouldDisplay = createSelector(
  [selectCart],
  (selectCart) => selectCart.cartDisplay
);

export const selectCartAmount = createSelector(
  [selectCartItem],
  (selectCartItem) =>
    selectCartItem
      .map(({ quantity }) => quantity)
      .reduce((acc, quantity) => acc + quantity, 0)
);

export const selectClassificationCartItem = createSelector(
  [selectCartItem],
  (selectCartItem) => {
    const cartItemToMap = {};
    selectCartItem.forEach((cartItem) => {
      const title = cartItem.title.split("-")[0];
      if (cartItemToMap[title]) {
        cartItemToMap[title]["cartItem"].push(cartItem);
      } else {
        cartItemToMap[title] = {};
        cartItemToMap[title]["cartItem"] = [];
        cartItemToMap[title]["cartItem"].push(cartItem);
        cartItemToMap[title]["statement"] = cartItem.statement;
        cartItemToMap[title]["productTitle"] = title;
      }
    });

    return Object.values(cartItemToMap);
  }
);

export const selectCartItemTotalPrice = createSelector(
  [selectCartItem],
  (selectCartItem) =>
    selectCartItem.reduce(
      (acc, cartItem) => cartItem.price * cartItem.quantity + acc,
      0
    )
);
