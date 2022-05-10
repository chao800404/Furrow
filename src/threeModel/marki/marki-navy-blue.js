/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene.js";

const Glasses = ({ nodes, materials, props, glasses }) => (
  <>
    <mesh
      geometry={nodes.Object_2.geometry}
      material={materials.Anodized_Aluminum_Brushed_90X_Black}
    />
    <mesh
      geometry={nodes.Object_3.geometry}
      material={materials.material_8}
      material-opacity={props.mode}
      ref={glasses}
    />
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Aluminum_Rough_1}
    />
    <mesh
      geometry={nodes.Object_5.geometry}
      material={materials["glass1-2color128128128"]}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials["glass1-2ptc-ceramic255255242"]}
    />
    <mesh
      geometry={nodes.Object_7.geometry}
      material={materials["pbcptc-painted-green02550"]}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials.Brass_Textured}
    />
    <mesh geometry={nodes.Object_9.geometry} material={materials.material} />
    <mesh geometry={nodes.Object_10.geometry} material={materials.material} />
    <mesh
      geometry={nodes.Object_11.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_13.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_14.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_15.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_16.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials.Brass_Polished}
    />
    <mesh
      geometry={nodes.Object_18.geometry}
      material={materials.Brass_Polished}
    />
  </>
);

export default function MarkINavyBlueModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF(
    "/threeModel/MarkI/navy-blue/scene.gltf"
  );

  useFrameScene({ view3d, group, glasses });
  return (
    <group
      dispose={null}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2.5, 0]}
      scale={0.11}
      ref={group}
      {...props}
    >
      {view3d ? (
        <group rotation={[4.8, 0, Math.PI]} position={[0, -20, -150]}>
          <Glasses
            nodes={nodes}
            materials={materials}
            props={props}
            glasses={glasses}
          />
        </group>
      ) : (
        <Glasses
          nodes={nodes}
          materials={materials}
          props={props}
          glasses={glasses}
        />
      )}
    </group>
  );
}
