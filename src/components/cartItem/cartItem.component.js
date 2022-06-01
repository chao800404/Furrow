/** @format */

import { CartItemContainer } from "./cartItem.styles";
import { useState } from "react";
import { IoTrashSharp } from "react-icons/io5";
import Button from "../../components/button/button.component";
import { useDispatch } from "react-redux";
import { removeCartItem, cartItemUpdate } from "../../redux/cart/cart.action";
import { memo } from "react";
import { urlFor } from "../../lib/client";

const CartItem = ({ image, price, quantity, productName, _key, color }) => {
  const [quantitys, setQuantity] = useState(quantity);
  const [removeItem, setRemoveItem] = useState(false);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setQuantity(value);
    const parseIntQuantity = Number.parseInt(value);
    if (Number.isInteger(parseIntQuantity))
      dispatch(cartItemUpdate({ quantity: parseIntQuantity, _key }));
  };

  const handleClick = (e) => {
    const coverBtn = e.target.closest("[data-type]");
    if (coverBtn.dataset.type === "cancel") setRemoveItem((prev) => !prev);
    if (coverBtn.dataset.type === "remove") dispatch(removeCartItem(_key));
  };

  return (
    <CartItemContainer>
      {removeItem ? (
        <div className="CartItem-cover" onClick={handleClick}>
          <p>Are you sure you want to remove this item?</p>
          <Button data="cancel">CANCEL</Button>
          <Button data="remove">REMOVE</Button>
        </div>
      ) : null}

      <img alt={productName} src={urlFor(image.light)} />
      <h3 className="CartItem-title">{`${productName} - ${color}`}</h3>
      <span className="CartItem-price">NT$ {price.toLocaleString()}</span>
      <div className="CartItem_quantity">
        <span>QUANTITY</span>
        <input type="number" value={quantitys} onChange={handleOnChange} />
      </div>

      <IoTrashSharp
        style={{
          fontSize: "2rem",
          alignSelf: "center",
          justifySelf: "end",
          marginRight: "1rem",
        }}
        onClick={(e) => setRemoveItem((prev) => !prev)}
      />
    </CartItemContainer>
  );
};

export default memo(CartItem);
