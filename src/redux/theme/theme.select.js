/** @format */
import { createSelector } from "reselect";

const selectTheme = ({ theme }) => theme;

export const selectCurrentTheme = createSelector(
  [selectTheme],
  (theme) => theme.currentTheme
);

export const selectThemeStyle = createSelector(
  [selectTheme],
  (theme) => theme.themeStyle
);
