/** @format */

import React from "react";
import { HeaderNav, LinkStyle, Logo, HeaderMenu } from "./header.styles";
import { Flex } from "../Flex/flex.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import { toggleCursorStyle } from "../../redux/cursor/cursor.actions";
import themeType from "../../theme/theme.styles.js";
import HamburgerBox from "../hamburger/hamburger.componet";
import { BiStore } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  selectThemeStyle,
  selectCurrentTheme,
} from "../../redux/theme/theme.select";
import SignInOutButton from "../sigiInOutButton/signInOutButton.component.js";

const Header = () => {
  const dispatch = useDispatch();
  const toggleTheme = useSelector(selectCurrentTheme);

  const handleClick = () => {
    dispatch(toggleThemeStyle(themeType(toggleTheme)));
  };

  const handleHover = () => {
    dispatch(toggleCursorStyle());
  };

  const theme = useSelector(selectThemeStyle);

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opactio: 0 }}
      transition={{ duration: 0.9, ease: [0.6, 0.1, 0.1, 0.9] }}
    >
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Flex>
          <Logo onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <LinkStyle to="/">ONE</LinkStyle>
            <span onClick={handleClick}></span>
            <LinkStyle to="/">SEC</LinkStyle>
          </Logo>
          <HeaderMenu>
            <SignInOutButton theme={theme} />
            <Link to="/shop" className="menu">
              <BiStore />
              <h3>SHOP</h3>
            </Link>
            <HamburgerBox />
          </HeaderMenu>
        </Flex>
      </div>
    </HeaderNav>
  );
};

export default Header;
