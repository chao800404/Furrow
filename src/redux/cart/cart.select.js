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
