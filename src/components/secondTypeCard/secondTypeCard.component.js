/** @format */

import { SecondCardContainer } from "./secondTypeCard.style";
import ImageContainer from "../imageContainer/imageContainer.component";
import { useState } from "react";
import Button from "../button/button.component";
import { useNavigate, useLocation } from "react-router-dom";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";

const SecondTypeCard = ({ title, color, price, image }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    const { curColor } = transferClassesTypeName({ color });
    navigate(`${location.pathname}/${curColor}`);
    document.body.style.overflow = "hidden";
  };

  return (
    <SecondCardContainer
      onMouseEnter={() => setHovered((prevHovered) => !prevHovered)}
      onMouseLeave={() => setHovered((prevHovered) => !prevHovered)}
      whileHover={{ scale: 1.03 }}
      transition={{ default: { duration: 0.3 } }}
      onClick={handleClick}
    >
      <ImageContainer
        className="second-card-img"
        props={{ title, image, hovered }}
      />
      <h3>
        {title} <span>{color}</span>
      </h3>

      <p>NT${price.toLocaleString("US")}</p>
      <Button type="secondCard">ADD TO CART</Button>
    </SecondCardContainer>
  );
};

export default SecondTypeCard;
