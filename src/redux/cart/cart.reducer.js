/** @format */
import cartActionType from "./cart.type";

const INITIAL_STATE = {
  hidden: true,
  hovered: false,
  cartItem: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
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
        cartItem: [...state.cartItem, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
