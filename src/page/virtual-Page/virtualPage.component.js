/** @format */
import { useState } from "react";
import { Flex } from "../../components/Flex/flex.styles";
import { VirtualContainer } from "./virtualPage.styles";
import { useSelector } from "react-redux";
import { selectShopCollectionPreview } from "../../redux/shop/shop.select";
import VirtualSide from "../../components/virtual-side/virtualSide.component";
import VirtualScene from "../../components/virtual-scene/virtual-secne.component";

const VirtualPage = () => {
  const collections = useSelector(selectShopCollectionPreview);
  const [currentGlasses, setCurrentGlasses] = useState({
    type: "marki",
    color: "black",
  });

  const handleGlassesClick = (event) => {
    const glassesItemCard = event.target.closest(".virtual-glasses-card");
    if (!glassesItemCard) return;
    const type = glassesItemCard.getAttribute("data-glasses-type");
    const color = glassesItemCard.getAttribute("data-glasses-color");
    setCurrentGlasses(
      (prevGlasses) => (prevGlasses = { ...prevGlasses, type, color })
    );
  };

  return (
    <VirtualContainer>
      <Flex style={{ gap: "1rem" }}>
        <div className="virtaul-side" onClick={handleGlassesClick}>
          <VirtualSide collections={collections} />
        </div>
        <div className="virtual-VR">
          <h1>VIEW 3D VIRTUAL </h1>
          <p>
            Pick your favorite sunglasses and experience the virtual environment
          </p>
          <VirtualScene {...currentGlasses} view3d={true} />
        </div>
      </Flex>
    </VirtualContainer>
  );
};

export default VirtualPage;
