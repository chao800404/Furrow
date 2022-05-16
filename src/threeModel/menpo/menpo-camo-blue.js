/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials["a-aGee3aRealogoaPeptc-metallic-gold255255135"]}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials["glassptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials["a-aGee3aRealogoptc-metallic-gold255255135"]}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials["a-aGee3aRealogoptc-painted-red25500_1"]}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials["1-8color128128128"]}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials["1-8color128128128"]}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials["a-aGee3aRealogoaPeptc-painted-red25500_1"]}
    />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials["back1-2color128128128"]}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.glasscolor128128128}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Anodized_Aluminum_Polished_Blue_4}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials.Anodized_Aluminum_Polished_Blue_4}
    />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials.Anodized_Aluminum_Brushed_90X_Purple_2}
    />
  </>
);

export default function MenpoCamoBlueModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF("/threeModel/Menpo/camo-blue/scene.glb");
  useFrameScene({ view3d, group, glasses });
  return view3d ? (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[4.8, 0, Math.PI]} position={[0, -25, -180]}>
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
useGLTF.preload("/threeModel/menpo/camo-blue/scene.glb");
