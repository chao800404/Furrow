/** @format */

import { VirtualSideCt } from "./virtualSideContent.styles";
import VirtualSideItem from "../virtualSide-item/virtaulSide-item.component";

const VirtualSideContent = ({ collection }) => {
  const { title, item, id } = collection;

  return (
    <VirtualSideCt>
      <h3>Virtual-{title}</h3>
      {item.map((item, index) => (
        <VirtualSideItem key={id + index} item={item} title={title} />
      ))}
    </VirtualSideCt>
  );
};

export default VirtualSideContent;
