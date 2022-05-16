/** @format */

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import useFrameScene from "../../utils/useFrameScene";

export default function NomadRedModel({ ...props }) {
  const group = useRef();
  const glasses = useRef();
  const view3d = props.view3d;
  const { nodes, materials } = useGLTF("/threeModel/Nomad/red/scene.glb");
  useFrameScene({ view3d, group, glasses });

  const Glasses = ({ nodes, materials, props, glasses }) => (
    <>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.Glass_Droplets_Grey}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials["foot1-2ptc-std-brass-polished20515050"]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["glassptc-std-bronze1308242"]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials["in1-2color128128128"]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["pbc1-2ref_color1_-_1656974"]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["in1-2color128128128_1"]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["pbc1-2color128128128"]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["pbc1-2ptc-std-gold-polished21717599"]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials["pbc1-2ptc-painted-green02550"]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.Gold_24k_Polished_1}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.material}
        material-opacity={props.mode}
        ref={glasses}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Aluminum_Polished_1}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Paint_Gloss_Black_2}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.Paint_Gloss_Black_2}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Paint_Gloss_Black_2}
      />
    </>
  );
  return view3d ? (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[4.8, 0, Math.PI]} position={[0, -25, -160]}>
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
useGLTF.preload("/threeModel/nomad/red/scene.glb");
