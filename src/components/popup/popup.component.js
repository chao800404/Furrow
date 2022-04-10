/** @format */
import {
  PopupContainer,
  PopupBox,
  PopupForm,
  PopupBoxContainer,
} from "./popup.style";
import { useParams, useNavigate } from "react-router-dom";
import ImageContainer from "../imageContainer/imageContainer.component";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectPopupView } from "../../redux/shop/shop.select";
import { useState } from "react";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { cardClickToggle } from "../../redux/card/card.action";
import UserGuide from "../userGuilde/userGuide.component";
import { cartAddItem } from "../../redux/cart/cart.action";

const Popup = ({ collection }) => {
  const { colorType } = useParams();
  const [currentColor, setCurrentColor] = useState(colorType);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { rgb, price, imageUrl, id, color } = useSelector(
    selectPopupView(collection.title, currentColor)
  );

  console.log(quantity);

  const title = `${collection.title}-${color}`;

  const handleClick = (e) => {
    const target = e.target.dataset.item;
    const addToCartBtn = e.target.dataset.type;
    if (target === "popup-close" || target === "popup-bg") {
      navigate(-1);
      dispatch(cardClickToggle(false));
    }
    if (addToCartBtn !== "add-cart-btn") return;
    dispatch(cartAddItem({ rgb, price, id, imageUrl, color, quantity, title }));

    // console.log("add to cart", { rgb, price, id, imageUrl, color, quantity });
  };

  return (
    <PopupContainer data-item="popup-bg" onClick={handleClick}>
      <PopupBoxContainer data-item="popup-bg">
        <PopupBox initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
          <IoCloseCircleSharp data-item="popup-close" className="popup_close" />
          <div className="popup-image">
            <ImageContainer props={{ imageUrl, title }} />
          </div>
          <PopupForm>
            <h3>{title}</h3>
            <div className="popup-text_container">
              <p>{collection.statement}</p>
              <div className="color_container">
                {collection.colorType.map((rgb, index) => (
                  <span
                    onClick={(e) => setCurrentColor(e.target.dataset.color)}
                    className="color_option"
                    key={index}
                    data-color={collection.item[index].color}
                    style={{ backgroundColor: `${rgb}` }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="popup_price">NT$ {price.toLocaleString("US")}</div>
            <div className="popup_calculator">
              <div style={{ transform: "translateY(-2rem)" }}>
                <p>Quantity</p>
                <div className="popup_calculator-item">
                  <AiOutlineMinus
                    onClick={() =>
                      quantity > 0 ? setQuantity(quantity - 1) : null
                    }
                  />
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                  />
                  <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} />
                </div>
              </div>
            </div>
            <Button data="add-cart-btn">Add To Cart</Button>
          </PopupForm>
        </PopupBox>
      </PopupBoxContainer>
      <UserGuide />
    </PopupContainer>
  );
};

export default Popup;
