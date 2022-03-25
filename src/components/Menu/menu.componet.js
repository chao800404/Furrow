/** @format */

import { Menu, MenuLine } from "./menu.styles";
import { useSelector } from "react-redux";

const MenuContainer = () => {
  const toggleTheme = useSelector((state) => state.theme.themeStyle);

  const menuMotion = (right) => {
    const rotateDirection = right ? 45 : -45;
    const transformY = right ? "-50%" : "50%";
    return {
      rest: { rotate: 0, ease: "easeOut", duration: 0.3, type: "tween" },
      hover: {
        y: transformY,
        margin: 0,
        rotate: rotateDirection,
      },
    };
  };

  return (
    <Menu initial="rest" animate="rest" whileHover="hover">
      <MenuLine variants={menuMotion(false)} theme={toggleTheme}></MenuLine>
      <MenuLine variants={menuMotion(true)} theme={toggleTheme}></MenuLine>
    </Menu>
  );
};

export default MenuContainer;
