/** @format */

import HeaderActionType from "./header.type";

const INITIAL_STATE = {
  headerAnComplete: false,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionType.HEADER_AN_COMPLETE:
      return {
        ...state,
        headerAnComplete: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
