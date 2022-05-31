/** @format */

import CardActionType from "./card,type";

const INITIAL_STATE = {
  imageLoad: false,
  isPointer: false,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.IMAGE_IS_LOAD:
      return {
        ...state,
        imageLoad: true,
      };
    case CardActionType.AR_ALREADY_POINTER:
      return {
        ...state,
        isPointer: true,
      };

    default:
      return state;
  }
};

export default cardReducer;
