/** @format */

import CardActionType from "./card,type";

const INITIAL_STATE = {
  imageLoad: false,
};

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActionType.IMAGE_IS_LOAD:
      return {
        ...state,
        imageLoad: true,
      };
    default:
      return state;
  }
};

export default cardReducer;
