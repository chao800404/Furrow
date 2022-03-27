/** @format */

import { createSelector } from "reselect";

const sidebarToggle = ({ sidebar }) => sidebar;

export const sidebarStauts = createSelector(
  [sidebarToggle],
  (sidebar) => sidebar.visible
);
