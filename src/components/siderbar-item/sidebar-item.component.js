/** @format */

import { SidebarItem, SidebarLi } from "./sidebar-item.style";

const SidebarItemLi = ({ link, name }) => (
  <SidebarLi>
    <SidebarItem to={link} />
  </SidebarLi>
);

export default SidebarItemLi;
