/** @format */
import SidebarType from "./sidebar.type";

const INITIAL_STATE = {
  visible: false,
  animateEnd: false,
};

const sidebarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SidebarType.VISIIBLE:
      return {
        ...state,
        visible: !state.visible,
      };
    case SidebarType.ANIMATE_END:
      return {
        ...state,
        animateEnd: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
