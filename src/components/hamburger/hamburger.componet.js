/** @format */

import { HamburgerLine, Hamburger } from "./hamburger.styles";
import { useSelector } from "react-redux";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const HamburgerBox = () => {
  const Theme = useSelector(selectThemeStyle);

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
    <Hamburger initial="rest" animate="rest" whileHover="hover">
      <HamburgerLine variants={menuMotion(false)} theme={Theme}></HamburgerLine>
      <HamburgerLine variants={menuMotion(true)} theme={Theme}></HamburgerLine>
    </Hamburger>
  );
};

export default HamburgerBox;
