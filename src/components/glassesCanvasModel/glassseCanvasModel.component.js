/** @format */

import {
  OrbitControls,
  Environment,
  ContactShadows,
  Loader,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { SvgIcon, ClassesModelContainer } from "./glassesCanvasModel.styles";
import { ReactSVG } from "react-svg";
import svg from "../../assets/svgIcon/AR-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { checkARIsPointer } from "../../redux/card/card.action";
import { selectCardIsPointer } from "../../redux/card/card.select";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { Canvas } from "@react-three/fiber";
import { glassesModel } from "./glassesCanvasToMaps";

const GlassesModel = ({ type, color, toggleElectrochromic, transitionEnd }) => {
  const dispatch = useDispatch();
  const pointDown = useSelector(selectCardIsPointer);
  // const { curType, curColor } = transferClassesTypeName({ type, color });
  const [curGlassesType, setCurGlassesType] = useState(
    transferClassesTypeName({ type, color })
  );
  const { curType, curColor } = curGlassesType;
  useEffect(() => {
    setCurGlassesType(
      (prev) => (prev = transferClassesTypeName({ type, color }))
    );
  }, [type, color]);

  const CurGlassesModel = glassesModel[curType][curColor];

  return (
    <ClassesModelContainer>
      {transitionEnd && (
        <>
          <Canvas
            shadows
            camera={{ position: [0, 20, 0], fov: 35 }}
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
              <CurGlassesModel
                onPointerDown={() => dispatch(checkARIsPointer())}
                mode={
                  toggleElectrochromic ? (curType === "marki" ? 2.5 : 1) : 0.3
                }
              />
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
          </Canvas>

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
        </>
      )}
    </ClassesModelContainer>
  );
};

export default GlassesModel;
