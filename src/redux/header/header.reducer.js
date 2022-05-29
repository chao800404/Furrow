/** @format */

import HeaderActionType from "./header.type";

const INITIAL_STATE = {
  headerAnComplete: false,
  headerInView: true,
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeaderActionType.HEADER_AN_COMPLETE:
      return {
        ...state,
        headerAnComplete: action.payload,
      };
    case HeaderActionType.HEADER_IN_VIEW:
      return {
        ...state,
        headerInView: !state.headerInView,
      };
    default:
      return state;
  }
};

export default headerReducer;
