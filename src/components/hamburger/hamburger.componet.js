/** @format */

import { HamburgerLine, Hamburger } from "./hamburger.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import { toggleSidebar } from "../../redux/sidebar/sidebar.actions";
import { toggleCursorStyle } from "../../redux/cursor/cursor.actions";
import ToolTip from "../../components/tooltip/tooltip.component";

const menuMotion = (right) => {
  const rotateDirection = right ? 45 : -45;
  const transformY = right ? "-50%" : "50%";
  return {
    rest: { rotate: 0, ease: [0.17, 0.67, 0.83, 0.67], duration: 0.3 },
    click: {
      y: transformY,
      margin: 0,
      rotate: rotateDirection,
    },
  };
};

const HamburgerBox = () => {
  const Theme = useSelector(selectThemeStyle);
  const toggle = useSelector(sidebarStauts);

  const dispatch = useDispatch();

  const handleSidebarClick = () => {
    dispatch(toggleSidebar());
  };

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <>
      <Hamburger
        initial="rest"
        animate="rest"
        onClick={handleSidebarClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        data-tip
        data-for="menu"
      >
        <HamburgerLine
          variants={menuMotion(false)}
          animate={toggle ? "click" : "rest"}
          theme={Theme}
        ></HamburgerLine>
        <HamburgerLine
          variants={menuMotion(true)}
          theme={Theme}
          animate={toggle ? "click" : "rest"}
        ></HamburgerLine>
      </Hamburger>
      <ToolTip message="menu" id="menu" />
    </>
  );
};

export default HamburgerBox;
