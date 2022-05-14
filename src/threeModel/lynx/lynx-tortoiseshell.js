/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials.Aluminum_Polished}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials.Paint_Gloss_Orange}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Paint_Gloss_Red_1}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials.Paint_Matte_Blue}
    />
    <mesh geometry={nodes.Object_6.geometry} material={materials.material} />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials.Paint_Matte_Black}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials["tail11-2ptc-wood-elm235180120_2"]}
    />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials.Aluminum_Polished_1}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.Anodized_Aluminum_Brushed_90X_Black}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Aluminum_Polished_3}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials.Aluminum_Polished_2}
    />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials.Gold_24k_Polished}
    />
    <mesh
      geometry={nodes.Object_14.geometry}
      material={materials.Gold_24k_Polished}
    />
    <mesh
      geometry={nodes.Object_15.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials.Aluminum_Polished_4}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials.Paint_Gloss_Green}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials.Paint_Gloss_Grey}
    />
    <mesh
      geometry={nodes.Object_19.geometry}
      material={materials.Brass_Polished_1}
    />
    <mesh
      geometry={nodes.Object_20.geometry}
      material={materials.Paint_Gloss_Grey_10}
    />
    <mesh
      geometry={nodes.Object_21.geometry}
      material={materials.Paint_Gloss_Grey_13}
    />
    <mesh
      geometry={nodes.Object_22.geometry}
      material={materials["glassptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_23.geometry}
      material={materials.Paint_Gloss_Purple}
    />
    <mesh
      geometry={nodes.Object_24.geometry}
      material={materials.Paint_Gloss_White}
    />
    <mesh
      geometry={nodes.Object_25.geometry}
      material={materials.screwcolor128128128}
    />
    <mesh
      geometry={nodes.Object_26.geometry}
      material={materials.Paint_Gloss_Yellow}
    />
    <mesh
      geometry={nodes.Object_27.geometry}
      material={materials.Paint_Gloss_Yellow}
    />
    <mesh
      geometry={nodes.Object_28.geometry}
      material={materials.Paint_Metallic_Orange_peel_Red_1}
    />
    <mesh
      geometry={nodes.Object_29.geometry}
      material={materials.Paint_Metallic_Orange_peel_Red_1}
    />
    <mesh
      geometry={nodes.Object_30.geometry}
      material={materials.material_26}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_31.geometry}
      material={materials.screwcolor128128128_1}
    />
  </>
);

export default function LynxTortoiseshellModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF(
    "/threeModel/Lynx/tortoiseshell/scene.glb"
  );

  useFrameScene({ view3d, group, glasses });

  return view3d ? (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[4.8, 0, Math.PI]} position={[0, -30, -150]}>
        <Glasses
          nodes={nodes}
          materials={materials}
          props={props}
          glasses={glasses}
        />
      </group>
    </group>
  ) : (
    <group
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.5, 0]}
      scale={0.11}
      ref={group}
      {...props}
    >
      <Glasses
        nodes={nodes}
        materials={materials}
        props={props}
        glasses={glasses}
      />
    </group>
  );
}
