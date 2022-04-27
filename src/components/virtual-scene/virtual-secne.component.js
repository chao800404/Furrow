/** @format */

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Loader } from "@react-three/drei";
import { Suspense } from "react";
import { VirtualSceneContainer } from "./virtual-scene.styles";
import { glassesModel } from "../glassesCanvasModel/glassesCanvasToMaps";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";

const VirtualScene = ({ type, color, view3d }) => {
  const { curType, curColor } = transferClassesTypeName({ type, color });
  const CurGlassesModel = glassesModel[curType][curColor];

  return (
    <VirtualSceneContainer>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [1, 0, 0], fov: 35 }}>
          <CurGlassesModel view3d={view3d} />
          <Environment
            background
            preset="sunset"
            far={1000}
            frames={Infinity}
            resolution={256}
          />
          <OrbitControls />
        </Canvas>
        <Loader />
      </Suspense>
    </VirtualSceneContainer>
  );
};

export default VirtualScene;
