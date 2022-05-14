/** @format */
import cartActionType from "./cart.type";
import {
  addItemToCart,
  removeItemToCart,
  updateItemToCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  hovered: false,
  cartDisplay: true,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case cartActionType.SET_INIT_CART:
      return {
        ...state,
        hovered: false,
      };

    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: payload === "hidden" ? false : !state.hidden,
      };
    case cartActionType.ONSCROLL_CART_HIDDEN:
      return {
        ...state,
        hidden: false,
      };
    case cartActionType.HOVER_CART_POPUP:
      return {
        ...state,
        hovered: !state.hovered,
      };

    case cartActionType.ADD_CART_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, payload),
      };
    case cartActionType.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItem: removeItemToCart(state.cartItem, payload),
      };
    case cartActionType.UPDATE_CART_ITEM:
      return {
        ...state,
        cartItem: updateItemToCart(state.cartItem, payload),
      };
    case cartActionType.CART_CLEAN_ITEM:
      return {
        ...state,
        cartItem: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
