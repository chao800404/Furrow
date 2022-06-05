/** @format */

import {
  OrbitControls,
  Environment,
  ContactShadows,
  Loader,
  Html,
} from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { ClassesModelContainer } from "./glassesCanvasModel.styles";

import { useSelector } from "react-redux";

import { selectCardIsPointer } from "../../redux/card/card.select";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { Canvas } from "@react-three/fiber";
import { glassesModel } from "./glassesCanvasToMaps";
import Guide from "../guide/guide.component";

const GlassesModel = ({
  type,
  color,
  toggleElectrochromic,
  style,
  onUpdate,
}) => {
  const pointDown = useSelector(selectCardIsPointer);

  const { curType, curColor } = transferClassesTypeName({ type, color });

  const CurGlassesModel = useMemo(
    () => glassesModel[curType][curColor],
    [curColor, curType]
  );

  return (
    <ClassesModelContainer style={style}>
      <>
        <Canvas
          shadows
          camera={{ position: [0, 20, 0], fov: 40 }}
          dpr={[1, 2]}
          resize={{ scroll: false }}
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
              mode={
                toggleElectrochromic ? (curType === "marki" ? 2.5 : 1) : 0.3
              }
              onUpdate={onUpdate}
            />
            {pointDown <= 1 && (
              <Html
                style={{ width: "100%", height: "100%" }}
                as="div"
                wrapperClass="vr"
              >
                <Guide pointDown={pointDown} />
              </Html>
            )}
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
            resize={{ scroll: false }}
          />
        </Canvas>

        <Loader />
      </>
    </ClassesModelContainer>
  );
};

export default GlassesModel;
