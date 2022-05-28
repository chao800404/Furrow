/** @format */

import React from "react";
import { Logo, LinkStyle } from "./logoContainer.styles";
import { toggleThemeStyle } from "../../redux/theme/theme.actions";
import { useDispatch, useSelector } from "react-redux";
import themeType from "../../theme/theme.styles.js";
import { selectCurrentTheme } from "../../redux/theme/theme.select";
import ToolTip from "../tooltip/tooltip.component";

const LogoContainer = () => {
  const dispatch = useDispatch();
  const toggleTheme = useSelector(selectCurrentTheme);

  const handleClick = () => {
    dispatch(toggleThemeStyle(themeType(toggleTheme)));
  };

  return (
    <>
      <Logo data-tip data-for="mode">
        <LinkStyle to="/">ONE</LinkStyle>
        <span onClick={handleClick}></span>
        <LinkStyle to="/">SEC</LinkStyle>
      </Logo>
      <ToolTip message="Change Mode" id="mode" />
    </>
  );
};

export default LogoContainer;
