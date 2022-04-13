/** @format */

import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WrapperScrollTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return children;
};

export default WrapperScrollTop;
