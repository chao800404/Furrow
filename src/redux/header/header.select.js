/** @format */
import { createSelector } from "reselect";

const selectHeader = ({ header }) => header;

export const selectHeaderAnComplete = createSelector(
  [selectHeader],
  (selectHeader) => selectHeader.headerAnComplete
);

export const selectHeaderToggleInView = createSelector(
  [selectHeader],
  (selectHeader) => selectHeader.headerInView
);
