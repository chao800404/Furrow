/** @format */

import React from "react";
import { BiStore } from "react-icons/bi";
import { ShopLink } from "./shop-link-icon.styles";

const ShopLinkIcon = ({ theme }) => {
  return (
    <ShopLink theme={theme} to="/shop" className="menu">
      <BiStore />
      <h3>SHOP</h3>
    </ShopLink>
  );
};

export default ShopLinkIcon;
