/** @format */

import sidebarType from "./sidebar.type";

export const toggleSidebar = (toggle) => ({
  type: sidebarType.VISIIBLE,
  payload: toggle,
});

export const sidebarAnEnd = (anEnd) => ({
  type: sidebarType.ANIMATE_END,
  payload: anEnd,
});
