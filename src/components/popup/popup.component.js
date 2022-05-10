/** @format */
import {
  PopupContainer,
  PopupBox,
  PopupForm,
  PopupBoxContainer,
} from "./popup.style";
import { useState, useCallback } from "react";
import useWinowSize from "../../utils/useWindowSize";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectPopupView } from "../../redux/shop/shop.select";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import UserGuide from "../userGuilde/userGuide.component";
import { cartAddItem } from "../../redux/cart/cart.action";
import ColorBox from "../colorBox/colorBox.component";
import GlassesModel from "../glassesCanvasModel/glassseCanvasModel.component";
import Spinner from "../spinner/spinner.component";
import glassesIcon from "../../assets/svgIcon/glasses-icon.svg";
import glassesIconDark from "../../assets/svgIcon/glasses-icon-dark.svg";
import { ReactSVG } from "react-svg";
import maxWidth from "../../config/screen.size";

const SvgIcon = ({ src }) => (
  <ReactSVG
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
    }}
    src={src}
    beforeInjection={(svg) =>
      svg.setAttribute(
        "style",
        "display:flex;align-items:center;justify-content:center;width:100%;height:3rem;fill:#fff"
      )
    }
  />
);

const Popup = ({ collection }) => {
  const { colorType } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [transitionEnd, setTransitionEnd] = useState(false);
  const [toggleElectrochromic, setToggleElectrochromic] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { rgb, price, imageUrl, id, color } = useSelector(
    selectPopupView(collection?.title, colorType)
  );
  const isMobile = maxWidth >= useWinowSize();
  const location = useLocation();
  const title = `${collection?.title}-${color}`;

  const prevPage = useCallback(
    () =>
      location.pathname
        .split("/")
        .filter((_, index) => index < 3)
        .join("/"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const goToPrevPage = () => {
    navigate(`${prevPage()}`);
    document.body.style.overflow = "unset";
  };

  const changeGlassesColorParms = (color) => {
    navigate(`${prevPage()}/${color}`);
  };

  const handleClick = (e) => {
    const target = e.target.dataset.item;
    const addToCartBtn = e.target.dataset.type;
    const parseIntQuantity = Number.parseInt(quantity);
    if (target === "popup-close" || target === "popup-bg") {
      goToPrevPage();
      return;
    }
    if (addToCartBtn === "electrochromic") {
      setToggleElectrochromic((prev) => !prev);
      return;
    }
    if (addToCartBtn === "add-cart-btn" && quantity > 0) {
      dispatch(
        cartAddItem({
          rgb,
          price,
          id,
          imageUrl,
          color,
          quantity: parseIntQuantity,
          title,
          statement: collection.statement,
        })
      );
      goToPrevPage();
      return;
    }
  };

  return (
    <PopupContainer data-item="popup-bg" onClick={handleClick}>
      <PopupBoxContainer data-item="popup-bg">
        <PopupBox
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          onAnimationComplete={() => setTransitionEnd(true)}
        >
          <IoCloseCircleSharp data-item="popup-close" className="popup_close" />
          {collection && (
            <>
              {transitionEnd ? (
                <GlassesModel
                  type={collection.title}
                  color={color}
                  toggleElectrochromic={toggleElectrochromic}
                  isMobile={isMobile}
                />
              ) : (
                <Spinner />
              )}
              <PopupForm>
                <h3>{title}</h3>
                <div className="popup-text_container">
                  <p>{collection.statement}</p>
                  <div className="color_container">
                    {collection.colorType?.map((rgb, index) => (
                      <ColorBox
                        onClick={(e) =>
                          changeGlassesColorParms(e.target.dataset.color)
                        }
                        style={{
                          width: "2rem",
                          height: "2rem",
                          display: "block",
                          borderRadius: "50%",
                          backgroundColor: `${rgb}`,
                        }}
                        key={index}
                        color={collection.item[index].color}
                        active={collection.item[index].color === colorType}
                      ></ColorBox>
                    ))}
                  </div>
                </div>
                <div className="popup_price">
                  NT$ {price.toLocaleString("US")}
                </div>
                <div className="popup_calculator">
                  <div className="popup_calculator_container">
                    <p>Quantity</p>
                    <div className="popup_calculator-item">
                      <div className="popup_calculator">
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
                        <AiOutlinePlus
                          onClick={() => setQuantity(quantity + 1)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button_container">
                  <Button data="electrochromic">
                    {toggleElectrochromic ? (
                      <SvgIcon src={glassesIconDark} />
                    ) : (
                      <SvgIcon src={glassesIcon} />
                    )}
                  </Button>
                  <Button style={{ fontSize: "2rem" }} data="add-cart-btn">
                    Add To Cart
                  </Button>
                </div>
              </PopupForm>
            </>
          )}
        </PopupBox>
      </PopupBoxContainer>
      <UserGuide />
    </PopupContainer>
  );
};

export default Popup;
