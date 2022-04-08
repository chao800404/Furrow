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

const Popup = ({ collection }) => {
  const { colorType } = useParams();
  const [currentColor, setCurrentColor] = useState(colorType);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { rgb, price, imageUrl, id, color } = useSelector(
    selectPopupView(collection.title, currentColor)
  );

  const title = `${collection.title}-${color}`;

  const handleClick = (e) => {
    const target = e.target.dataset.item;
    const addToCartBtn = e.target.dataset.type;
    if (target === "popup-close" || target === "popup-bg") {
      navigate(-1);
      dispatch(cardClickToggle(false));
    }
    if (addToCartBtn !== "add-cart-btn") return;
    console.log("add to cart", { rgb, price, id, imageUrl, color, quantity });
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
                  <AiOutlinePlus onClick={() => setQuantity(quantity + 1)} />
                  <input
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                  <AiOutlineMinus
                    onClick={() =>
                      quantity > 0 ? setQuantity(quantity - 1) : null
                    }
                  />
                </div>
              </div>
            </div>
            <Button data="add-cart-btn">Add To Cart</Button>
          </PopupForm>
        </PopupBox>
      </PopupBoxContainer>
      <ul>
        <h3>User Guide:</h3>
        <li>
          Please wipe down lenses with a microfiber cloth before and after use.
        </li>
        <li>The lenses are not user replaceable.</li>
        <li>
          Always store in the provided eyewear case after use to avoid breakage.
        </li>
        <li>Keep away from hard or sharp objects.</li>
        <li>
          It is typical for the lenses to display a colored hue when looking at
          electronic displays.
        </li>
        <li>
          When the battery reached EOL (End of Life), the dark state will become
          the lenses's default state.
        </li>
        <li>
          Do not store this product in a vehicle to avoid prolonged high
          temperature exposure.
        </li>
        <li>
          This product is water-resistant, not water-proof, do not submerge into
          liquids.
        </li>
        <li> Avoid sungazing while using the product.</li>
        <li>Avoid using if the lenses are cracked or damaged.</li>
        <li>Avoid storing close to high temperature environments.</li>
      </ul>
    </PopupContainer>
  );
};

export default Popup;
