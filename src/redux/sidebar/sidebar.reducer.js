/** @format */
import SidebarType from "./sidebar.type";

const INITIAL_STATE = {
  visible: false,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarType.VISIIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
