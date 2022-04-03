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

const Main = () => {
  const toggleTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const theme = useSelector(selectThemeStyle);

  useEffect(() => {
    dispatch(initialThemeStyle(themeType(toggleTheme)));
    window.history.scrollRestoration = "manual";
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
