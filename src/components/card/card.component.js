/** @format */
import { CardContainer, CardTitle, CardFeature } from "./card.styles";
import Button from "../button/button.component";
import { useState } from "react";
import ImageContainer from "../imageContainer/imageContainer.component";

const Card = ({ title, item, colorType, routeName, statement }) => {
  const [colorIndex, setColorIndex] = useState(0);

  const [hovered, setHovered] = useState(false);

  const { color, imageUrl, price } = item[colorIndex];

  const handleClick = (event) => {
    const targetColor = event.target.dataset.color;
    const colorIndex = item.findIndex((item) => item.rgb === targetColor);
    setColorIndex(colorIndex);
  };

  return (
    <CardContainer
      onMouseEnter={() => setHovered(1)}
      onMouseLeave={() => setHovered(0)}
      data-type="card"
    >
      <ImageContainer props={{ title, imageUrl, hovered }} />
      <CardTitle>
        <h3>
          {title}
          <span>{color}</span>
        </h3>
        <div style={{ color: "#fff" }}>AR</div>
      </CardTitle>
      <CardFeature>
        <div
          style={{
            height: "2rem",
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
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "50%",
                marginRight: ".5rem",
              }}
              data-type="color-option"
              data-color={color}
              onClick={handleClick}
            ></span>
          ))}
        </div>
        <p>NT${price.toLocaleString("en-US")}</p>
      </CardFeature>
      <p>{statement}</p>
      <Button path={routeName}>CHECK MORE</Button>
    </CardContainer>
  );
};

export default Card;
