/** @format */

import sidebarData from "./sidebar.data.js";
import { SidebarContainer, Sidebar } from "./sidebar.styles";
import SidebarItemLi from "../siderbar-item/sidebar-item.component.js";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { useSelector } from "react-redux";

const Sidebars = () => {
  const status = useSelector(sidebarStauts);

  return status ? (
    <SidebarContainer
      initial={{ scaleX: 0.2, transformOrigin: "left" }}
      animate={{ scaleX: 1 }}
    >
      <Sidebar>
        {sidebarData.map(({ id, ...otherSidebarProps }, index) => (
          <SidebarItemLi key={id} index={index} {...otherSidebarProps} />
        ))}
      </Sidebar>
    </SidebarContainer>
  ) : null;
};
export default Sidebars;
