/** @format */

import { VirtualSideContainer } from "./virtualSide.styles";
import VirtualSideContent from "../vlrtualSideContent/virtualSideContent.component";

const VirtualSide = ({ collections, setImageLoad }) => {
  return (
    <VirtualSideContainer>
      {collections.map((collection) => (
        <VirtualSideContent
          key={collection.id}
          collection={collection}
          setImageLoad={setImageLoad}
        />
      ))}
    </VirtualSideContainer>
  );
};

export default VirtualSide;
