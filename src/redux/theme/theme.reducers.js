/** @format */

import ThemeActionTypes from "./theme.type";

const INITIALSTATE = {
  theme: ["darkTheme", "lightTheme"],
  currentTheme: "darkTheme",
  themeStyle: {},
};

const themeReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.INITAILTHEMES:
      return {
        ...state,
        themeStyle: action.payload,
      };

    case ThemeActionTypes.TOGGLETHEME:
      return {
        ...state,
        currentTheme:
          state.currentTheme === "darkTheme" ? state.theme[1] : state.theme[0],
        themeStyle: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
