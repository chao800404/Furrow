/** @format */

import { SecondCardContainer } from "./secondTypeCard.style";
import ImageContainer from "../imageContainer/imageContainer.component";
import { useState } from "react";
import Button from "../button/button.component";
import { useDispatch } from "react-redux";
import { cardClickToggle } from "../../redux/card/card.action";

const SecondTypeCard = ({ title, color, price, imageUrl }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    dispatch(cardClickToggle(true));
  };

  return (
    <SecondCardContainer
      onMouseEnter={() => setHovered(1)}
      onMouseLeave={() => setHovered(0)}
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
        Add To Cart
      </Button>
    </SecondCardContainer>
  );
};

export default SecondTypeCard;
