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
    const timeout = setTimeout(
      () => settranaslateCart((prev) => (prev = true)),
      10
    );
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    settranaslateCart((prev) => (prev = position.current === position.delay));
  }, [position]);

  useEffect(() => {
    if (isMobile || hovered) return;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, hovered, isMobile]);

  return (
    <CartContainer
      animate={tranaslateCart ? { x: 0, opacity: 1 } : { x: 500, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      theme={theme}
    >
      <CardList />
      <div onClick={() => dispatch(cartToggleHidden())}>
        <h5>YOUR CART</h5>
        <p>{cartAmount}</p>
        {isMobile ? (
          <BsHandbag
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: isMobile ? "3.5rem" : "5rem",
              zIndex: 1,
            }}
          />
        ) : (
          <BsFillBagFill
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              fontSize: isMobile ? "3.5rem" : "5rem",
              zIndex: 1,
            }}
          />
        )}
      </div>
    </CartContainer>
  );
};

export default Cart;
