/** @format */

import React, { useState, useEffect } from "react";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";
import { MenuBarContainer } from "./mobileMenuBar.styles";
import { BiChevronUp } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { sidebarStauts } from "../../redux/sidebar/sidebar.select";
import Cart from "../cart/cart.component";
import ShopLinkIcon from "../shop-link-icon/shop-link-icon.component";
import { cartToggleHidden } from "../../redux/cart/cart.action";

const MobileMenuBar = ({ theme }) => {
  const [toggle, setToggle] = useState(false);
  const isMobile = useCheckScreenIsMobile();
  const sidebarToggle = useSelector(sidebarStauts);
  const dispatch = useDispatch();
  const variants = {
    hidden: {
      y: "5.5rem",
    },
    display: {
      y: 0,
    },
  };

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
    isMobile && (
      <MenuBarContainer
        variants={variants}
        theme={theme}
        initial="hidden"
        animate={toggle ? "display" : "hidden"}
      >
        <span className="menu-bar-toggle" onClick={handleClick}>
          <BiChevronUp
            style={
              toggle
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0)" }
            }
          />
        </span>
        <div className="menu-bar-container">
          <Cart theme={theme} />
          <ShopLinkIcon theme={theme} />
        </div>
      </MenuBarContainer>
    )
  );
};

export default MobileMenuBar;
