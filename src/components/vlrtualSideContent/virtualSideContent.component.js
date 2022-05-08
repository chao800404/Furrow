/** @format */

import { VirtualSideCt } from "./virtualSideContent.styles";
import VirtualSideItem from "../virtualSide-item/virtaulSide-item.component";

const VirtualSideContent = ({ collection, setImageLoad }) => {
  const { title, item, id } = collection;

  return (
    <VirtualSideCt>
      <h3 className="VirtualTitle">Virtual-{title}</h3>
      {item.map((item, index) => (
        <VirtualSideItem
          key={id + index}
          item={item}
          title={title}
          setImageLoad={setImageLoad}
        />
      ))}
    </VirtualSideCt>
  );
};

export default VirtualSideContent;
