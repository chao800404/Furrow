/** @format */
import { createSelector } from "reselect";

const selectHeader = ({ header }) => header;

export const selectHeaderAnComplete = createSelector(
  [selectHeader],
  (selectHeader) => selectHeader.headerAnComplete
);
