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
      material={materials.Aluminum_Polished_2}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Aluminum_Polished_3}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials.Aluminum_Polished_1}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials.screwcolor128128128}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials["tail11-2ptc-wood-elm235180120_2"]}
    />
    <mesh geometry={nodes.Object_8.geometry} material={materials.material_17} />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials.Anodized_Aluminum_Brushed_90X_Black}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.Brass_Polished_1}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Aluminum_Polished_4}
    />
    <mesh geometry={nodes.Object_12.geometry} material={materials.material} />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials.Gold_24k_Polished}
    />
    <mesh
      geometry={nodes.Object_14.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_15.geometry}
      material={materials.screwcolor128128128_1}
    />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials.Paint_Gloss_Red_4}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials["glassptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials.material_18}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_19.geometry}
      material={materials.Paint_Gloss_Red}
    />
    <mesh
      geometry={nodes.Object_20.geometry}
      material={materials.Paint_Gloss_Red}
    />
    <mesh
      geometry={nodes.Object_21.geometry}
      material={materials.Paint_Gloss_Yellow_2}
    />
    <mesh
      geometry={nodes.Object_22.geometry}
      material={materials.Paint_Gloss_Yellow_2}
    />
    <mesh
      geometry={nodes.Object_23.geometry}
      material={materials.Paint_Gloss_Yellow_2}
    />
  </>
);

export default function LynxPinkYarrowModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF(
    "/threeModel/Lynx/pink-yarrow/scene.glb"
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
