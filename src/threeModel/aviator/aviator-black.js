/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials.Clear_Shiny_Plastic_Orange}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials.Paint_Metallic_White}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Cylinder_Material}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials.Clear_Textured_Plastic_Grey}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials.Aluminum_Brushed_90X_1}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials.tailright3color128128128}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials.tailright3color128128128_1}
    />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials.Brass_Brushed_90X}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.Paint_Textured_Green}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials["a-GeFcccolor128128128"]}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials["a-GeFcccolor128128128"]}
    />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials.Cylinder_Material_1}
    />
    <mesh geometry={nodes.Object_14.geometry} material={materials.Rubber} />
    <mesh
      geometry={nodes.Object_15.geometry}
      material={materials.footleft2color128128128}
    />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials["footleft2ptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials.footright3color128128128}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials["footright3ptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_19.geometry}
      material={materials.material}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_20.geometry}
      material={materials.Chrome_Brushed_90X_3}
    />
  </>
);

export default function AviatorBlackModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF("/threeModel/Aviator/black/scene.glb");

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
