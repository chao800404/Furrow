/** @format */

import {
  Environment,
  OrbitControls,
  Loader,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import {
  VirtualSceneContainer,
  VirtualCanvas,
  FullScreenBtn,
} from "./virtual-scene.styles";
import { glassesModel } from "../glassesCanvasModel/glassesCanvasToMaps";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsArrowsFullscreen } from "react-icons/bs";
import useWinowSize from "../../utils/useWindowSize";
import maxWidth from "../../config/screen.size";

const FOV = {
  LARGE: 35,
  MEDIUM: 40,
  MEDIUMALPHA: 45,
  MEDIUMBELTA: 30,
  SMALL: 55,
};

const VirtualScene = ({ type, color, view3d, currentEnvironment }) => {
  const handleFullScreen = useFullScreenHandle();
  const { curType, curColor } = transferClassesTypeName({ type, color });
  const CurGlassesModel = glassesModel[curType][curColor];
  const { width } = useWinowSize();
  const [fov, setFov] = useState(null);

  useEffect(() => {
    console.log(width, +maxWidth.large.replace("px", ""));
    if (width <= +maxWidth.small.replace("px", "")) {
      setFov((prev) => (prev = FOV.SMALL - width / 20));
    } else if (width <= +maxWidth.mediumBelta.replace("px", "")) {
      setFov((prev) => (prev = FOV.MEDIUMBELTA));
    } else if (width <= +maxWidth.mediumAlpha.replace("px", "")) {
      setFov((prev) => (prev = FOV.MEDIUMALPHA));
    } else if (width <= +maxWidth.medium.replace("px", "")) {
      setFov((prev) => (prev = FOV.MEDIUM));
    } else if (width <= +maxWidth.large.replace("px", "")) {
      setFov((prev) => (prev = FOV.LARGE));
    } else {
      setFov((prev) => (prev = FOV.LARGE));
    }
  }, [width]);

  return (
    <VirtualSceneContainer>
      <FullScreen handle={handleFullScreen} className="fullScreen">
        <VirtualCanvas gl={{ toneMappingExposure: 0.9 }}>
          <Suspense fallback={null}>
            <CurGlassesModel view3d={view3d} />
            <Environment
              background
              files={`/threeModel/environment/${currentEnvironment}_2k.hdr`}
            />
            <PerspectiveCamera
              makeDefault
              position={[-30, 100, 120]}
              fov={fov}
            />
          </Suspense>
          <OrbitControls />
        </VirtualCanvas>
      </FullScreen>

      <FullScreenBtn whileTap={{ y: 2 }} onClick={handleFullScreen.enter}>
        <BsArrowsFullscreen
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </FullScreenBtn>
      <Loader barStyles={{ width: "100%" }} />
    </VirtualSceneContainer>
  );
};

export default VirtualScene;
