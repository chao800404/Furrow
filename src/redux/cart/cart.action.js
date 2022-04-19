/** @format */

import cartActionType from "./cart.type";

export const cartInit = () => ({
  type: cartActionType.SET_INIT_CART,
});

export const cartToggleHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const cartOnScrollHidden = () => ({
  type: cartActionType.ONSCROLL_CART_HIDDEN,
});

export const cartToggleHoverd = (init = null) => ({
  type: cartActionType.HOVER_CART_POPUP,
  payload: init,
});

export const removeCartItem = (itemId) => ({
  type: cartActionType.REMOVE_CART_ITEM,
  payload: itemId,
});

export const cartAddItem = (cartItem) => ({
  type: cartActionType.ADD_CART_ITEM,
  payload: cartItem,
});

export const cartItemUpdate = (cartItem) => ({
  type: cartActionType.UPDATE_CART_ITEM,
  payload: cartItem,
});

export const cartPayment = (order) => ({
  type: cartActionType.CART_PAYMENT_START,
  payload: order,
});

export const cartCleanItem = () => ({
  type: cartActionType.CART_CLEAN_ITEM,
});
