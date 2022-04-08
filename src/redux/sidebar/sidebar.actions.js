/** @format */

import sidebarType from "./sidebar.type";

export const toggleSidebar = (toggle) => ({
  type: sidebarType.VISIIBLE,
  payload: toggle,
});
