/** @format */

import React from "react";
import { MenuBarContainer } from "./mobileMenuBar.styles";
import { useSelector } from "react-redux";

import Cart from "../cart/cart.component";
import ShopLinkIcon from "../shop-link-icon/shop-link-icon.component";

import HamburgerBox from "../hamburger/hamburger.componet";
import LogoContainer from "../logoContainer/logoContainer.component";
import { selectHeaderToggleInView } from "../../redux/header/header.select";

const MobileMenuBar = ({ theme }) => {
  const toggleInViewHeader = useSelector(selectHeaderToggleInView);

  // const dispatch = useDispatch();
  const variants = {
    hidden: {
      y: "6rem",
    },
    display: {
      y: 0,
    },
  };

  return (
    <MenuBarContainer
      variants={variants}
      theme={theme}
      initial="hidden"
      transition={{ delay: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }}
      animate={toggleInViewHeader ? "display" : "hidden"}
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
