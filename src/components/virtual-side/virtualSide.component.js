/** @format */

import { VirtualSideContainer } from "./virtualSide.styles";
import VirtualSideContent from "../vlrtualSideContent/virtualSideContent.component";

const VirtualSide = ({ collections }) => {
  return (
    <VirtualSideContainer>
      {collections.map((collection) => (
        <VirtualSideContent key={collection.id} collection={collection} />
      ))}
    </VirtualSideContainer>
  );
};

export default VirtualSide;
