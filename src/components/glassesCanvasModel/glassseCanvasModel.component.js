/** @format */

import {
  OrbitControls,
  Environment,
  ContactShadows,
  Loader,
  Html,
} from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect, useState } from "react";
import { SvgIcon, ClassesModelContainer } from "./glassesCanvasModel.styles";
import { ReactSVG } from "react-svg";
import svg from "../../assets/svgIcon/AR-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { checkARIsPointer, checkFirstLoad } from "../../redux/card/card.action";
import {
  selectCardIsPointer,
  selectCardFirstLoad,
} from "../../redux/card/card.select";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";
import { Canvas } from "@react-three/fiber";
import { glassesModel } from "./glassesCanvasToMaps";

const GlassesModel = ({ type, color, toggleElectrochromic }) => {
  const dispatch = useDispatch();
  const pointDown = useSelector(selectCardIsPointer);
  const [firstLoad, setFirstLoad] = useState(false);
  const [reLoad, setReLoad] = useState(false);
  const { curType, curColor } = transferClassesTypeName({ type, color });
  const canvasElem = useRef(null);
  const selectCheckFirstLoad = useSelector(selectCardFirstLoad);

  const CurGlassesModel = useMemo(
    () => glassesModel[curType][curColor],
    [curColor, curType]
  );

  useEffect(() => {
    const onPointDown = () => dispatch(checkARIsPointer());
    const canvas = canvasElem.current;

    if (canvas) canvas.addEventListener("pointerdown", onPointDown);
    return () => canvas.removeEventListener("pointerdown", onPointDown);
  }, [dispatch]);

  useEffect(() => {
    setFirstLoad((prev) => (prev = true));
    if (selectCheckFirstLoad) {
      setReLoad((prev) => (prev = false));
      return;
    }
    dispatch(checkFirstLoad());
    const timeOut = setTimeout(() => setReLoad((prev) => (prev = false)), 10);
    return () => clearTimeout(timeOut);
  }, [dispatch, selectCheckFirstLoad]);

  const handlePointerDown = () => {
    dispatch(checkARIsPointer());
  };

  console.log(selectCheckFirstLoad);

  return (
    <ClassesModelContainer ref={canvasElem}>
      <>
        {!reLoad && (
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
                onPointerDown={handlePointerDown}
                onUpdate={() => {
                  if (!firstLoad) setReLoad((prev) => (prev = true));
                }}
              />

              <Html as="div" wrapperClass="vr">
                {!pointDown && (
                  <SvgIcon
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
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
              </Html>
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
        )}

        <Loader />
      </>
    </ClassesModelContainer>
  );
};

export default GlassesModel;
