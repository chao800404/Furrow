/** @format */

import { VirtualSideItemContainer } from "./virtualSide-item.styles";

const VirtualSideItem = ({ item, title }) => {
  const { color, imageUrl } = item;

  return (
    <VirtualSideItemContainer
      whileTap={{ y: 1.5, scale: 0.98 }}
      className="virtual-glasses-card"
      data-glasses-type={title}
      data-glasses-color={color}
    >
      <img alt={title} src={imageUrl["dark"]} />
      <h3>{title}</h3>
      <span>{color}</span>
    </VirtualSideItemContainer>
  );
};

export default VirtualSideItem;
