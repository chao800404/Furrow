/** @format */

import CardActionType from "./card,type";

const INITIAL_STATE = {
  imageLoad: false,
  toggleClick: null,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.IMAGE_IS_LOAD:
      return {
        ...state,
        imageLoad: true,
      };
    case CardActionType.BUTTON_TOGGLE_CLICK:
      return {
        ...state,
        toggleClick: action.payload,
      };
    default:
      return state;
  }
};

export default cardReducer;
