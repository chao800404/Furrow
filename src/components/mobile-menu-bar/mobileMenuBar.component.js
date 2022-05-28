/** @format */

import React, { useState, useEffect } from "react";
import { MenuBarContainer } from "./mobileMenuBar.styles";
import { BiChevronUp } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";

import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import Cart from "../cart/cart.component";
import ShopLinkIcon from "../shop-link-icon/shop-link-icon.component";
import { cartToggleHidden } from "../../redux/cart/cart.action";
import HamburgerBox from "../hamburger/hamburger.componet";
import LogoContainer from "../logoContainer/logoContainer.component";

const MobileMenuBar = ({ theme }) => {
  const [toggle, setToggle] = useState(false);

  const sidebarToggle = useSelector(sidebarStauts);
  const dispatch = useDispatch();
  // const variants = {
  //   hidden: {
  //     y: "5.5rem",
  //   },
  //   display: {
  //     y: 0,
  //   },
  // };

  const handleClick = () => {
    dispatch(cartToggleHidden("hidden"));
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    if (sidebarToggle) {
      setToggle((prev) => (prev = false));
    }
  }, [sidebarToggle, dispatch]);

  return (
    <MenuBarContainer
      // variants={variants}
      theme={theme}
      initial="hidden"
      // animate={toggle ? "display" : "hidden"}
    >
      <div className="menu-bar-container">
        <div className="menu-container">
          <HamburgerBox
            style={{
              backgroundColor: theme.color,
              width: "3rem",
              height: ".5rem",
            }}
          />
        </div>
        <div className="menu-container menu-logo">
          <LogoContainer />
        </div>
        <div className="menu-container">
          <ShopLinkIcon theme={theme} />
        </div>
        <div className="menu-container menu-cart">
          <Cart theme={theme} />
        </div>
      </div>
    </MenuBarContainer>
  );
};

export default MobileMenuBar;
