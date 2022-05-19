/** @format */
import { CardContainer, CardTitle, CardFeature } from "./card.styles";
import Button from "../button/button.component";
import { useState } from "react";
import ImageContainer from "../imageContainer/imageContainer.component";
import ColorBox from "../colorBox/colorBox.component";

const Card = ({ productName, product, slug, description, virtual }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const { color, image, price } = product[colorIndex];
  const colorMap = product.map(({ rgb }) => rgb);
  const handleClick = (event) => {
    const targetColor = event.target.dataset.color;
    const colorIndex = product.findIndex(
      (product) => product.rgb === targetColor
    );
    setColorIndex(colorIndex);
  };

  return (
    <CardContainer
      onMouseEnter={() => setHovered((prevHovered) => !prevHovered)}
      onMouseLeave={() => setHovered((prevHovered) => !prevHovered)}
      data-type="card"
    >
      <ImageContainer
        props={{ productName, hovered, image }}
        className="card-img"
      />
      <CardTitle>
        <h3>
          {productName}
          <span>{color}</span>
        </h3>
        {virtual && <div>AR</div>}
      </CardTitle>
      <CardFeature>
        <div
          style={{
            height: "2rem",
            width: "100%",
            display: "flex",
          }}
        >
          {colorMap.map((color, index) => (
            <ColorBox
              key={index}
              style={{
                backgroundColor: color,
                borderRadius: "50%",
                marginRight: ".8rem",
              }}
              dataType="color-option"
              color={color}
              onClick={handleClick}
              active={index === colorIndex}
            />
          ))}
        </div>
        <p className="card-price">NT${price.toLocaleString("en-US")}</p>
      </CardFeature>
      <p className="card-desc">{description}</p>
      <Button path={slug.current}>CHECK MORE</Button>
    </CardContainer>
  );
};

export default Card;
