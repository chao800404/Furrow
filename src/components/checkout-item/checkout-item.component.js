/** @format */

import { FaTrashAlt } from "react-icons/fa";
import {
  CheckoutItemContainer,
  CheckoutRemoveCover,
  CheckoutWarnings,
} from "./ckeckout-item.sytles";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, cartItemUpdate } from "../../redux/cart/cart.action";
import Button from "../../components/button/button.component";
import { cardClickToggle } from "../../redux/card/card.action";

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

const CheckoutItem = ({ imageUrl, title, quantity, price, id }) => {
  const [hovered, setHovered] = useState(0);
  const [displayCover, setDisplayCover] = useState(0);
  const [quantityTotal, setQuantityTotal] = useState(quantity);
  const dispatch = useDispatch();

  const handlehover = () => {
    setHovered(!hovered);
  };

  const handleDisplayCover = () => {
    setDisplayCover(1);
    dispatch(cardClickToggle(true));
  };

  useEffect(() => {
    if (!quantityTotal || quantityTotal < 1) return;
    const parseInt = Number.parseInt(quantityTotal);
    dispatch(cartItemUpdate({ id, quantity: parseInt }));
  }, [quantityTotal, dispatch, id]);

  const handleUpdateQuantity = (e) => {
    const value = e.target.value;
    setQuantityTotal(value);
  };

  const handleRemoveCartItem = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.dataset.type === "cancel") setDisplayCover(0);
    if (btn.dataset.type === "remove") dispatch(removeCartItem(id));
    dispatch(cardClickToggle(false));
    setHovered(0);
  };

  return (
    <CheckoutItemContainer
      onMouseEnter={handlehover}
      onMouseLeave={handlehover}
    >
      <img alt={title} src={imageUrl[`${hovered ? "dark" : "light"}`]} />
      <h3>{title}</h3>
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
          <div>
            <h3>Are you sure you want to remove this item?</h3>
            <Button data="cancel" style={btnStyle(null)}>
              CANCEL
            </Button>
            <Button data="remove" style={btnStyle("remove")}>
              REMOVE
            </Button>
          </div>
        </CheckoutRemoveCover>
      ) : null}
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
