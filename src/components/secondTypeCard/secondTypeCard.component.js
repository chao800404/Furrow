/** @format */

import { SecondCardContainer } from "./secondTypeCard.style";
import ImageContainer from "../imageContainer/imageContainer.component";
import { useState } from "react";
import Button from "../button/button.component";

const SecondTypeCard = ({ title, color, price, imageUrl }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
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
      <ImageContainer props={{ title, imageUrl, hovered }} />
      <h3>
        {title} <span>{color}</span>
      </h3>

      <p>NT${price.toLocaleString("US")}</p>
      <Button path={color} type="secondCard">
        ADD TO CART
      </Button>
    </SecondCardContainer>
  );
};

export default SecondTypeCard;
