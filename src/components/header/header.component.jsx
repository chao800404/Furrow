/** @format */

import React, { useEffect } from "react";
import { HeaderNav, LinkStyle, Logo, HeaderMenu } from "./header.styles";
import { Flex } from "../Flex/flex.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import themeType from "../../theme/theme.styles.js";
import HamburgerBox from "../hamburger/hamburger.componet";
import ShopLinkIcon from "../shop-link-icon/shop-link-icon.component";
import {
  selectThemeStyle,
  selectCurrentTheme,
} from "../../redux/theme/theme.select";
import SignInOutButton from "../sigiInOutButton/signInOutButton.component.js";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";
import ToolTip from "../tooltip/tooltip.component";
import { headerAnComplete } from "../../redux/header/header.actions";

const Header = () => {
  const dispatch = useDispatch();
  const toggleTheme = useSelector(selectCurrentTheme);
  const handleClick = () => {
    dispatch(toggleThemeStyle(themeType(toggleTheme)));
  };
  const theme = useSelector(selectThemeStyle);
  const isMobile = useCheckScreenIsMobile();

  useEffect(() => {
    dispatch(headerAnComplete(false));
  }, [dispatch]);

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opactio: 0 }}
      transition={{ duration: 0.9, ease: [0.6, 0.1, 0.1, 0.9] }}
      onAnimationComplete={() => dispatch(headerAnComplete(true))}
    >
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Flex>
          <Logo data-tip data-for="mode">
            <LinkStyle to="/">ONE</LinkStyle>
            <span onClick={handleClick}></span>
            <LinkStyle to="/">SEC</LinkStyle>
          </Logo>
          <ToolTip message="Change Mode" id="mode" />
          <HeaderMenu>
            <SignInOutButton theme={theme} />
            {!isMobile && <ShopLinkIcon />}
            <HamburgerBox />
          </HeaderMenu>
        </Flex>
      </div>
    </HeaderNav>
  );
};

export default Header;
