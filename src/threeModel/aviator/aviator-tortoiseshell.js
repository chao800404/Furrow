/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <group dispose={null}>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials.Brass_Brushed_90X}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials.Aluminum_Textured_3}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Aluminum_Brushed_90X}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials.Paint_Gloss_Purple}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials.Paint_Textured_Yellow_1}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials.Paint_Textured_Green}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials.Paint_Metallic_White}
    />
    <mesh
      geometry={nodes.Object_9.geometry}
      material={materials["footleft2ptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials["footright3ptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Clear_Shiny_Plastic_Orange}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials.material_19}
    />
    <mesh geometry={nodes.Object_13.geometry} material={materials.material} />
    <mesh
      geometry={nodes.Object_14.geometry}
      material={materials.material_17}
    />
    <mesh geometry={nodes.Object_15.geometry} material={materials.Rubber} />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials.material_22}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials.material_23}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials.material_20}
    />
    <mesh
      geometry={nodes.Object_19.geometry}
      material={materials.material_21}
    />
    <mesh
      geometry={nodes.Object_20.geometry}
      material={materials.material_18}
    />
    <mesh
      geometry={nodes.Object_21.geometry}
      material={materials.Paint_Matte_Green}
    />
    <mesh
      geometry={nodes.Object_22.geometry}
      material={materials.Paint_Gloss_Red}
    />
    <mesh
      geometry={nodes.Object_23.geometry}
      material={materials.Aluminum_Textured}
    />
    <mesh
      geometry={nodes.Object_24.geometry}
      material={materials.Aluminum_Textured}
    />
    <mesh
      geometry={nodes.Object_25.geometry}
      material={materials.Chrome_Brushed_90X_3}
    />
    <mesh
      geometry={nodes.Object_26.geometry}
      material={materials.Paint_Matte_Red_1}
    />
  </group>
);

export default function AviatorTortoiseshellModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF(
    "/threeModel/Aviator/tortoiseshell/scene.gltf"
  );

  useFrameScene({ view3d, group, glasses });

  return view3d ? (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[4.8, 0, Math.PI]} position={[68, -25, -150]}>
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
      position={[-7.2, -2.5, 0]}
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
