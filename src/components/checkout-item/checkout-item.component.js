/** @format */

import { FaTrashAlt } from "react-icons/fa";
import {
  CheckoutItemContainer,
  CheckoutRemoveCover,
  CheckoutWarnings,
  CheckoutRemoveContainer,
} from "./ckeckout-item.sytles";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, cartItemUpdate } from "../../redux/cart/cart.action";
import Button from "../../components/button/button.component";
import { memo, useCallback } from "react";
import ImageContainer from "../imageContainer/imageContainer.component";

const btnStyle = (type) => {
  return {
    alignSelf: "center",
    justifySelf: "center",
    width: "80%",
    letterSpacing: ".1rem",
    backgroundColor: type === "remove" ? "#fff" : "#161616",
    border: type === "remove" ? "1px solid #161616" : "none",
    color: type === "remove" ? "#161616" : "#fff",
  };
};

const CheckoutItem = ({ image, productName, quantity, price, _key, color }) => {
  const [hovered, setHovered] = useState(false);
  const [displayCover, setDisplayCover] = useState(false);
  const [quantityTotal, setQuantityTotal] = useState(quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!quantityTotal || quantityTotal < 1) return;
    const parseInt = Number.parseInt(quantityTotal);
    dispatch(cartItemUpdate({ _key, quantity: parseInt }));
  }, [quantityTotal, dispatch, _key]);

  const handlehover = () => {
    setHovered((prevHovered) => !prevHovered);
  };

  const onDisplayCover = useCallback(() => {
    document.body.style.overflow = `${displayCover ? "unset" : "hidden"}`;
  }, [displayCover]);

  const handleDisplayCover = () => {
    setDisplayCover((prevDisplay) => (prevDisplay = true));
    onDisplayCover();
  };

  const handleUpdateQuantity = (e) => {
    const value = e.target.value;
    setQuantityTotal((prevQuantity) => (prevQuantity = value));
  };

  const handleRemoveCartItem = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.dataset.type === "remove") dispatch(removeCartItem(_key));
    setHovered((prevHovered) => !prevHovered);
    setDisplayCover((prevDisplay) => (prevDisplay = false));
    onDisplayCover();
  };

  return (
    <CheckoutItemContainer
      onMouseEnter={handlehover}
      onMouseLeave={handlehover}
    >
      <ImageContainer
        className="checkout-image"
        props={{ productName, hovered, image }}
      />
      <h3>
        <span>{productName}</span>
        <span>{color}</span>
      </h3>
      <span className="price">NT$ {price.toLocaleString()}</span>
      <input
        type="number"
        value={quantityTotal}
        onChange={handleUpdateQuantity}
      />
      <span className="total-price">
        NT$ {(price * quantityTotal).toLocaleString()}
      </span>
      <FaTrashAlt onClick={handleDisplayCover} />
      {quantityTotal < 1 ? (
        <CheckoutWarnings>Can not less then 1</CheckoutWarnings>
      ) : null}
      {displayCover ? (
        <CheckoutRemoveCover onClick={handleRemoveCartItem}>
          <CheckoutRemoveContainer>
            <ImageContainer
              className="remove-cover-image"
              props={{ productName, hovered, image }}
            />
            <h3>Are you sure you want to remove this item?</h3>

            <Button data="cancel" style={btnStyle(null)}>
              CANCEL
            </Button>
            <Button data="remove" style={btnStyle("remove")}>
              REMOVE
            </Button>
          </CheckoutRemoveContainer>
        </CheckoutRemoveCover>
      ) : null}
    </CheckoutItemContainer>
  );
};

export default memo(CheckoutItem);
