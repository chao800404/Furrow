/** @format */

import { createSelector } from "reselect";

const selectCursor = ({ cursor }) => cursor;

export const selectCursorHover = createSelector(
  [selectCursor],
  (cursor) => cursor.toggleHovered
);
