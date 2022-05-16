/** @format */

import { useFrame } from "@react-three/fiber";

const useFrameScene = ({ view3d, group, glasses }) => {
  useFrame(({ camera }) => {
    if (!view3d) return;
    if (view3d) {
      group.current.position.copy(camera.position);
      group.current.rotation.copy(camera.rotation);

      if (camera.rotation._y < 0) {
        glasses.current.material.opacity = 0.4;
        glasses.current.material.alphaTest = 0.3;
      } else {
        glasses.current.material.opacity = 0.2;
        glasses.current.material.alphaTest = 0.1;
      }
    }
  });
};

export default useFrameScene;
