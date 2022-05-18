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
      console.log(cartItem);
      const { productName } = cartItem;
      if (cartItemToMap[productName]) {
        cartItemToMap[productName]["cartItem"].push(cartItem);
      } else {
        cartItemToMap[productName] = {};
        cartItemToMap[productName]["cartItem"] = [];
        cartItemToMap[productName]["cartItem"].push(cartItem);
        cartItemToMap[productName]["description"] = cartItem.description;
        cartItemToMap[productName]["productName"] = productName;
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
