/** @format */
import { useState } from "react";
import { VirtualSideItemContainer } from "./virtualSide-item.styles";
import ImageContainer from "../imageContainer/imageContainer.component";

const VirtualSideItem = ({ item, title }) => {
  const [hovered, setHovered] = useState(false);
  const { image, color } = item;

  return (
    <VirtualSideItemContainer
      whileTap={{ y: 1.5, scale: 0.98 }}
      className="virtual-glasses-card"
      data-glasses-type={title}
      data-glasses-color={color}
      onMouseEnter={() => setHovered((prev) => (prev = !prev))}
      onMouseLeave={() => setHovered((prev) => (prev = !prev))}
    >
      <ImageContainer
        className="virtual-img"
        props={{ image, hovered, title }}
      />

      <h3>{title}</h3>
      <span>{color}</span>
    </VirtualSideItemContainer>
  );
};

export default VirtualSideItem;
