/** @format */

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import { useSelector, useDispatch } from "react-redux";

import React, { useEffect } from "react";
// import memoTheme from "./theme/memoTheme";
import themeType from "./theme/theme.styles";

import { initialThemeStyle } from "./redux/theme/theme.actions";

const Main = () => {
  const toggleTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.themeStyle);
  useEffect(() => {
    dispatch(initialThemeStyle(themeType(toggleTheme)));
  }, [dispatch, toggleTheme]);

  return (
    <>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

export default Main;
