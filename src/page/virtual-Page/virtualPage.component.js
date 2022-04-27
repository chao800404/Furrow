/** @format */
import { useState } from "react";
import { Flex } from "../../components/Flex/flex.styles";
import { VirtualContainer } from "./virtualPage.styles";
import { useSelector } from "react-redux";
import { selectShopCollectionPreview } from "../../redux/shop/shop.select";
import VirtualSide from "../../components/virtual-side/virtualSide.component";
import VirtualScene from "../../components/virtual-scene/virtual-secne.component";
import Button from "../../components/button/button.component";

const environment = {
  "riverside-morning": "sunset",
  "mountain-night": "night",
  "forest-morning": "forest",
  "parl-noon": "park",
};

const VirtualPage = () => {
  const collections = useSelector(selectShopCollectionPreview);
  const [currentGlasses, setCurrentGlasses] = useState({
    type: "marki",
    color: "black",
  });
  const [currentEnvironment, setCurrentEnvironment] = useState("sunset");

  const handleGlassesClick = (event) => {
    const glassesItemCard = event.target.closest(".virtual-glasses-card");
    if (!glassesItemCard) return;
    const type = glassesItemCard.getAttribute("data-glasses-type");
    const color = glassesItemCard.getAttribute("data-glasses-color");
    setCurrentGlasses(
      (prevGlasses) => (prevGlasses = { ...prevGlasses, type, color })
    );
  };

  const handleEvironmentClick = (event) => {
    const environmentBtn = event.target.closest("button");
    if (!environmentBtn) return;
    const environmentType =
      environment[environmentBtn.textContent.toLowerCase()];
    setCurrentEnvironment((prev) => (prev = environmentType));
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
          <VirtualScene
            {...currentGlasses}
            view3d={true}
            currentEnvironment={currentEnvironment}
          />
          <div
            className="virtual-Btn-container"
            onClick={handleEvironmentClick}
          >
            <h3>Environment</h3>
            {Object.keys(environment).map((txt, index) => (
              <Button key={index}>{txt.toUpperCase()}</Button>
            ))}
          </div>
        </div>
      </Flex>
    </VirtualContainer>
  );
};

export default VirtualPage;