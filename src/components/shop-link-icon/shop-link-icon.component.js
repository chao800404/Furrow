/** @format */

import React from "react";
import { BiStore } from "react-icons/bi";
import { ShopLink } from "./shop-link-icon.styles";
import ToolTip from "../../components/tooltip/tooltip.component";

const ShopLinkIcon = ({ theme }) => {
  return (
    <>
      <ShopLink
        theme={theme}
        to="/shop"
        className="menu"
        data-tip
        data-for="shop"
      >
        <BiStore />
        <h3>SHOP</h3>
      </ShopLink>
      <ToolTip message="go shop" id="shop" />
    </>
  );
};

export default ShopLinkIcon;
