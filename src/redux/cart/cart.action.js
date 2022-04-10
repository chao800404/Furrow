/** @format */

import cartActionType from "./cart.type";

export const cartToggleHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const cartOnScrollHidden = () => ({
  type: cartActionType.ONSCROLL_CART_HIDDEN,
});

export const cartToggleHoverd = () => ({
  type: cartActionType.HOVER_CART_POPUP,
});

export const cartAddItem = (cartItem) => ({
  type: cartActionType.ADD_CART_ITEM,
  payload: cartItem,
});
