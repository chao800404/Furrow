/** @format */

import sidebarData from "./sidebar.data.js";
import { SidebarContainer, Sidebar } from "./sidebar.styles";
import SidebarItemLi from "../siderbar-item/sidebar-item.component";

const Sidebars = () => (
  <SidebarContainer>
    <Sidebar>
      {sidebarData.map(({ id, ...otherSidebarProps }) => (
        <SidebarItemLi key={id} {...otherSidebarProps} />
      ))}
    </Sidebar>
  </SidebarContainer>
);
export default Sidebars;
