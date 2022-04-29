/** @format */
import { useState, useEffect } from "react";
import { Flex } from "../../components/Flex/flex.styles";
import { VirtualContainer } from "./virtualPage.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectShopCollectionPreview } from "../../redux/shop/shop.select";
import VirtualSide from "../../components/virtual-side/virtualSide.component";
import VirtualScene from "../../components/virtual-scene/virtual-secne.component";
import Button from "../../components/button/button.component";
import CubeSpinner from "../../components/cube-spinner/cube-spinner.component";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import { sidebarAnStatus } from "../../redux/sidebar/sidebar.select";
import { sidebarAnEnd } from "../../redux/sidebar/sidebar.actions";

const environment = {
  "riverside-morning": "sunset",
  "mountain-night": "night",
  "forest-morning": "forest",
  "parl-noon": "park",
};

const VirtualPage = () => {
  const collections = useSelector(selectShopCollectionPreview);
  const theme = useSelector(selectThemeStyle);
  const [currentGlasses, setCurrentGlasses] = useState({
    type: "marki",
    color: "black",
  });
  const [currentEnvironment, setCurrentEnvironment] = useState("sunset");
  const [imageLoad, setImageLoad] = useState(false);
  const sidebarAnEnds = useSelector(sidebarAnStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeOut = setTimeout(() => dispatch(sidebarAnEnd(true)), 100);
    return () => clearTimeout(timeOut);
  }, [dispatch]);

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
    <VirtualContainer theme={theme}>
      <Flex style={{ gap: "1rem" }}>
        {imageLoad ? null : (
          <div
            style={{
              backgroundColor: "#161616",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 50,
            }}
          >
            <CubeSpinner />
          </div>
        )}
        <div className="virtaul-side" onClick={handleGlassesClick}>
          <VirtualSide setImageLoad={setImageLoad} collections={collections} />
        </div>
        <div className="virtual-VR">
          <h1>VIEW 3D VIRTUAL </h1>
          <p>
            Pick your favorite sunglasses and experience the virtual environment
          </p>

          {sidebarAnEnds ? (
            <VirtualScene
              {...currentGlasses}
              view3d={true}
              currentEnvironment={currentEnvironment}
            />
          ) : (
            <div
              style={{ width: "100%", height: "50rem", marginTop: "2rem" }}
            />
          )}

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
