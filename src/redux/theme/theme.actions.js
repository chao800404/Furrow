/** @format */

import ThemeActionTypes from "./theme.type";

export const initialThemeStyle = (themeStyle) => ({
  type: ThemeActionTypes.INITAILTHEMES,
  payload: themeStyle,
});

export const toggleThemeStyle = (themeStyle) => ({
  type: ThemeActionTypes.TOGGLETHEME,
  payload: themeStyle,
});
