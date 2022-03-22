/** @format */

import React from "react";
import { HeaderNav, LinkStyle, Logo } from "./header.styles";
import { Flex } from "../Flex/flex.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import themeType from "../../theme/theme.styles.js";
import MenuContainer from "../Menu/menu.componet";

const Header = () => {
  const dispath = useDispatch();
  const toggleTheme = useSelector((state) => state.themeReducer.currentTheme);
  const handleClick = () => {
    dispath(toggleThemeStyle(themeType(toggleTheme)));
  };

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opactio: 0 }}
      transition={{ duration: 0.9, ease: [0.6, 0.1, 0.1, 0.9] }}
    >
      <Flex>
        <Logo>
          <LinkStyle to="/">FURR</LinkStyle>
          <span onClick={handleClick}></span>
          <LinkStyle to="/">W</LinkStyle>
        </Logo>
        <MenuContainer />
      </Flex>
    </HeaderNav>
  );
};

export default Header;
