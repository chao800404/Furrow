/** @format */

import CardActionType from "./card,type";

const INITIAL_STATE = {
  imageLoad: false,
  isPointer: 0,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.IMAGE_IS_LOAD:
      return {
        ...state,
        imageLoad: true,
      };
    case CardActionType.AR_ALREADY_POINTER:
      if (state.isPointer >= 2) return;
      return {
        ...state,
        isPointer: state.isPointer + 1,
      };

    default:
      return state;
  }
};

export default cardReducer;
