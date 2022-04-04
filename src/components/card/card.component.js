/** @format */
import {
  CardContainer,
  CardTitle,
  CardFeature,
  CartImgContainer,
} from "./card.styles";
import Button from "../button/button.component";
import { useState } from "react";

const Card = ({ title, item, routeName, colorType, statement }) => {
  const [colorIndex, setColorIndex] = useState(1);

  const { color, imageUrl, price } = item[colorIndex];

  const handleClick = (event) => {
    const targetColor = event.target.dataset.color;
    const colorIndex = item.findIndex((item) => item.rgb === targetColor);
    setColorIndex(colorIndex);
  };

  return (
    <CardContainer>
      <CartImgContainer>
        <img alt={title} src={imageUrl} />
      </CartImgContainer>
      <CardTitle>
        <h3>
          {title}
          <span>{color}</span>
        </h3>
        <div>AR</div>
      </CardTitle>
      <CardFeature>
        <div
          style={{
            height: "1.5rem",
            width: "50%",
            display: "flex",
            marginTop: "1rem",
          }}
        >
          {colorType.map((color, index) => (
            <span
              key={index}
              style={{
                backgroundColor: color,
                width: "1.2rem",
                height: "1.2rem",
                borderRadius: "50%",
                marginRight: ".5rem",
              }}
              data-color={color}
              onClick={handleClick}
            ></span>
          ))}
        </div>
        <p>NT${price.toLocaleString("en-US")}</p>
      </CardFeature>
      <p>{statement}</p>
      <Button>Add To Cart</Button>
    </CardContainer>
  );
};

export default Card;
