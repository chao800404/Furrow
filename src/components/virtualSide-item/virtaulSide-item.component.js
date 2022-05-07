/** @format */
import { useState } from "react";
import { VirtualSideItemContainer } from "./virtualSide-item.styles";

const VirtualSideItem = ({ item, title }) => {
  const { color, imageUrl } = item;
  const [hover, setHovered] = useState("light");

  return (
    <VirtualSideItemContainer
      whileTap={{ y: 1.5, scale: 0.98 }}
      className="virtual-glasses-card"
      data-glasses-type={title}
      data-glasses-color={color}
      onMouseEnter={() => setHovered((prev) => (prev = "dark"))}
      onMouseLeave={() => setHovered((prev) => (prev = "light"))}
    >
      <img className="virtual-img" alt={title} src={imageUrl[hover]} />
      <h3>{title}</h3>
      <span>{color}</span>
    </VirtualSideItemContainer>
  );
};

export default VirtualSideItem;
