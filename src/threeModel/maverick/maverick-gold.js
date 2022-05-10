/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials.Aluminum_Rough}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials.Anodized_Aluminum_Brushed_90X_Black}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Glass_Scratched_White}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials.Gold_24k_Polished_1}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials.Gold_24k_Polished_1}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials.Iron_Polished_2}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials.Paint_Gloss_Black_1}
    />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials.Paint_Gloss_Black_2}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.Paint_Gloss_Black_2}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Paint_Gloss_Black_2}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials["glassptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials["pbc1-2ptc-painted-green02550"]}
    />
    <mesh
      geometry={nodes.Object_14.geometry}
      material={materials.vrcLe3a3ecolor128128128}
    />
    <mesh
      geometry={nodes.Object_15.geometry}
      material={materials["vrcLe3a3eptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials.vrcLe3aPecolor128128128}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials["vrcLe3aPeptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials.material}
      material-opacity={props.mode}
      ref={glasses}
    />
  </>
);

export default function MaverickGoldtModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF("/threeModel/Maverick/gold/scene.gltf");
  useFrameScene({ view3d, group, glasses });
  return view3d ? (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[4.8, 0, Math.PI]} position={[0, -25, -150]}>
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
