/** @format */

import { CartItemContainer } from "./cartItem.styles";
import { useState } from "react";
import { IoTrashSharp } from "react-icons/io5";

const CartItem = ({ color, imageUrl, price, quantity, title }) => {
  const [quantitu, setQuantity] = useState(quantity);

  const handleOnChange = (e) => {
    let { value } = e.target;
    setQuantity(value);
  };

  return (
    <CartItemContainer>
      <img alt="imag" src={imageUrl.light} />
      <h3 className="CartItem-title">{title}</h3>
      <span className="CartItem-price">NT$ {price.toLocaleString()}</span>
      <div className="CartItem_quantity">
        <span>QUANTITY</span>
        <input type="number" value={quantitu} onChange={handleOnChange} />
      </div>

      <IoTrashSharp
        style={{
          fontSize: "2rem",
          alignSelf: "center",
          justifySelf: "end",
          marginRight: "1rem",
        }}
      />
    </CartItemContainer>
  );
};

export default CartItem;
