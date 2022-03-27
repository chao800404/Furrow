/** @format */

import React from "react";
import { HeaderNav, LinkStyle, Logo } from "./header.styles";
import { Flex } from "../Flex/flex.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import { toggleCursorStyle } from "../../redux/cursor/cursor.actions";
import themeType from "../../theme/theme.styles.js";
import HamburgerBox from "../hamburger/hamburger.componet";

const Header = () => {
  const dispatch = useDispatch();
  const toggleTheme = useSelector((state) => state.theme.currentTheme);
  const handleClick = () => {
    dispatch(toggleThemeStyle(themeType(toggleTheme)));
  };

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opactio: 0 }}
      transition={{ duration: 0.9, ease: [0.6, 0.1, 0.1, 0.9] }}
    >
      <Flex>
        <Logo onMouseEnter={handleHover} onMouseLeave={handleHover}>
          <LinkStyle to="/">ONE</LinkStyle>
          <span onClick={handleClick}></span>
          <LinkStyle to="/">SEC</LinkStyle>
        </Logo>
        <HamburgerBox />
      </Flex>
    </HeaderNav>
  );
};

export default Header;
