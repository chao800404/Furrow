/** @format */

import CursorType from "./cursor.type";

const INITIALSTATE = {
  toggleHovered: false,
};

const cursorReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case CursorType.TOGGLEHOVER:
      return {
        ...state,
        toggleHovered: !state.toggleHovered,
      };
    default:
      return state;
  }
};

export default cursorReducer;
