/** @format */

import React, { Suspense, useState } from "react";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Loader,
} from "@react-three/drei";
import { glassesModel } from "./glassesCanvasToMaps";
import {
  CanvasContainer,
  SvgIcon,
  ClassesModelContainer,
} from "./glassesCanvasModel.styles";
import { ReactSVG } from "react-svg";
import svg from "../../assets/svgIcon/AR-icon.svg";

const GlassesModel = ({ type, color, transitionEnd }) => {
  const curType = type.toLowerCase();
  const curColor = color
    .split(" ")
    .reduce(
      (acc, txt, index) =>
        acc +
        (index === 0
          ? txt.toLowerCase()
          : txt.split("")[0].toUpperCase() + txt.slice(1)),
      ""
    );
  const [pointDown, setPointDown] = useState(false);
  const CurGlassesModel = glassesModel[curType][curColor];

  return (
    <ClassesModelContainer>
      <CanvasContainer
        shadows
        camera={{ position: [0, 20, 0], fov: 30 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <CurGlassesModel onPointerDown={() => setPointDown(true)} />
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -2.5, 0]}
            opacity={0.7}
            width={30}
            height={30}
            blur={1.5}
            far={4.5}
          />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 3}
          enablePan={false}
        />
      </CanvasContainer>
      {pointDown ? null : (
        <SvgIcon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ReactSVG
            src={svg}
            fontSize="1rem"
            beforeInjection={(svg) =>
              svg.setAttribute(
                "style",
                "display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem"
              )
            }
          />
        </SvgIcon>
      )}

      <Loader />
    </ClassesModelContainer>
  );
};

export default GlassesModel;
