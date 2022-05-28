/** @format */

import { CartContainer } from "./cart.styles";
import { BsFillBagFill, BsHandbag } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
import CardList from "../cartList/cartList.conponent";
import { useDispatch, useSelector } from "react-redux";
import {
  cartToggleHidden,
  cartOnScrollHidden,
} from "../../redux/cart/cart.action";
import {
  selectCartAmount,
  selectCartToggleHovered,
} from "../../redux/cart/cart.select";

import { useLocation } from "react-router-dom";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

const Cart = ({ theme }) => {
  const [position, setPosition] = useState({
    current: 0,
    delay: 0,
  });
  const { current, delay } = position;
  const [tranaslateCart, settranaslateCart] = useState(true);
  const dispatch = useDispatch();
  const cartAmount = useSelector(selectCartAmount);
  const hovered = useSelector(selectCartToggleHovered);
  const location = useLocation();
  const isMobile = useCheckScreenIsMobile();

  const handleScroll = useCallback(() => {
    const currentPostion = document.documentElement.scrollTop;
    setPosition({ ...position, current: currentPostion });
    const timeOut = setTimeout(
      () => setPosition({ ...position, delay: position.current }),
      500
    );
    if (current === delay) {
      dispatch(cartOnScrollHidden());
      clearTimeout(timeOut);
    }
  }, [current, delay, position, dispatch]);

  useEffect(() => {
    if (isMobile) return;
    const timeout = setTimeout(
      () => settranaslateCart((prev) => (prev = true)),
      10
    );
    return () => clearTimeout(timeout);
  }, [location.pathname, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    settranaslateCart((prev) => (prev = position.current === position.delay));
  }, [position, isMobile]);

  useEffect(() => {
    if (isMobile || hovered) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hovered, isMobile]);

  return (
    <CartContainer
      animate={
        isMobile
          ? null
          : tranaslateCart
          ? { x: 0, opacity: 1 }
          : { x: 500, opacity: 0 }
      }
      transition={!isMobile && { ease: "easeInOut", duration: 0.5 }}
      theme={theme}
    >
      {!isMobile && <CardList />}
      <div
        style={{ height: "100%" }}
        onClick={() => dispatch(cartToggleHidden())}
      >
        <h5>YOUR CART</h5>
        <p>{cartAmount}</p>
        {isMobile ? (
          <BsHandbag className="cart-icon" />
        ) : (
          <BsFillBagFill className="cart-icon" />
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
