/** @format */

import { VirtualSideCt } from "./virtualSideContent.styles";
import VirtualSideItem from "../virtualSide-item/virtaulSide-item.component";

const VirtualSideContent = ({ collection }) => {
  const { productName, product, virtual } = collection;

  return (
    <VirtualSideCt>
      <h3 className="VirtualTitle">Virtual-{productName}</h3>
      {product.map(
        (item) =>
          virtual && (
            <VirtualSideItem item={item} title={productName} key={item._key} />
          )
      )}
    </VirtualSideCt>
  );
};

export default VirtualSideContent;
