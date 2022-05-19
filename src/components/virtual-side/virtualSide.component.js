/** @format */

import { VirtualSideContainer } from "./virtualSide.styles";
import VirtualSideContent from "../vlrtualSideContent/virtualSideContent.component";

const VirtualSide = ({ collections }) => (
  <VirtualSideContainer>
    {collections.map((collection) => (
      <VirtualSideContent key={collection._id} collection={collection} />
    ))}
  </VirtualSideContainer>
);

export default VirtualSide;
