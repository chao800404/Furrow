/** @format */

import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { Suspense } from "react";
import {
  VirtualSceneContainer,
  VirtualCanvas,
  FullScreenBtn,
} from "./virtual-scene.styles";
import { glassesModel } from "../glassesCanvasModel/glassesCanvasToMaps";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { BsArrowsFullscreen } from "react-icons/bs";

const VirtualScene = ({
  type,
  color,
  view3d,
  currentEnvironment,
  onTimeout,
}) => {
  const handleFullScreen = useFullScreenHandle();
  const { curType, curColor } = transferClassesTypeName({ type, color });
  const CurGlassesModel = glassesModel[curType][curColor];

  return (
    <VirtualSceneContainer>
      <Suspense fallback={null}>
        {onTimeout ? (
          <FullScreen handle={handleFullScreen} className="fullScreen">
            <VirtualCanvas camera={{ position: [1, 0, 0], fov: 35 }}>
              <CurGlassesModel view3d={view3d} />
              <Environment
                background
                preset={currentEnvironment}
                far={1000}
                frames={Infinity}
                resolution={256}
              />
              <OrbitControls />
            </VirtualCanvas>
          </FullScreen>
        ) : (
          <div />
        )}
      </Suspense>
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
