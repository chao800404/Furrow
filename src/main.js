/** @format */

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global.styles";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import themeType from "./theme/theme.styles";
import { initialThemeStyle } from "./redux/theme/theme.actions";

import {
  selectCurrentTheme,
  selectThemeStyle,
} from "./redux/theme/theme.select";
import WrapperScrollTop from "./components/wrapper/wraper.component";

const Main = () => {
  const toggleTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeStyle);

  useEffect(() => {
    dispatch(initialThemeStyle(themeType(toggleTheme)));
  }, [dispatch, toggleTheme]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <WrapperScrollTop>
          <App />
        </WrapperScrollTop>
      </BrowserRouter>
    </>
  );
};

export default Main;
