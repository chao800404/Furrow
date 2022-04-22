/** @format */

import React, { Suspense } from "react";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import AviatorBlackModel from "../../threeModel/aviator-black";
import { CanvasContainer } from "./glassesCanvasModel.styles";

const GlassesModel = () => {
  return (
    <CanvasContainer
      shadows
      camera={{ position: [0, 20, 0], fov: 70 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={null}>
        <AviatorBlackModel />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, 0, 0]}
          opacity={0.7}
          width={30}
          height={30}
          blur={1.5}
          far={4.5}
        />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
    </CanvasContainer>
  );
};

export default GlassesModel;
