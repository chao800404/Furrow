/** @format */
import { lazy } from "react";

import { useGLTF } from "@react-three/drei";

export const glassesModel = {
  marki: {
    black: lazy(() => import("../../threeModel/marki/marki-black")),
    "steal-blue": lazy(() => import("../../threeModel/marki/marki-steal-blue")),
    "navy-blue": lazy(() => import("../../threeModel/marki/marki-navy-blue")),
    "ultra-violet": lazy(() =>
      import("../../threeModel/marki/marki-ultra-violet")
    ),
  },
  aviator: {
    black: lazy(() => import("../../threeModel/aviator/aviator-black")),
    green: lazy(() => import("../../threeModel/aviator/aviator-green")),
    tortoiseshell: lazy(() =>
      import("../../threeModel/aviator/aviator-tortoiseshell")
    ),
    "wood-grain": lazy(() =>
      import("../../threeModel/aviator/aviator-wood-grain")
    ),
  },
  lynx: {
    black: lazy(() => import("../../threeModel/lynx/lynx-black")),
    tortoiseshell: lazy(() =>
      import("../../threeModel/lynx/lynx-tortoiseshell")
    ),
    "pink-yarrow": lazy(() => import("../../threeModel/lynx/lynx-pink-yarrow")),
  },
  menpo: {
    black: lazy(() => import("../../threeModel/menpo/menpo-black")),
    blue: lazy(() => import("../../threeModel/menpo/menpo-blue")),
    "camo-blue": lazy(() => import("../../threeModel/menpo/menpo-camo-blue")),
    "camo-orange": lazy(() =>
      import("../../threeModel/menpo/menpo-camo-orange")
    ),
    red: lazy(() => import("../../threeModel/menpo/menpo-red")),
  },
  maverick: {
    gold: lazy(() => import("../../threeModel/maverick/maverick-gold")),
    silver: lazy(() => import("../../threeModel/maverick/maverick-silver")),
    tortoiseshell: lazy(() =>
      import("../../threeModel/maverick/maverick-tortoiseshell")
    ),
  },
  nomad: {
    "pear-black": lazy(() => import("../../threeModel/nomad/nomad-pear-black")),
    red: lazy(() => import("../../threeModel/nomad/nomad-red")),
    tortoiseshell: lazy(() =>
      import("../../threeModel/nomad/nomad-tortoiseshell.js")
    ),
  },
};

export const preLoadModel = (model) => {
  switch (model) {
    case "marki":
      return () => {
        useGLTF.preload("/threeModel/markI/black/scene.glb");
        useGLTF.preload("/threeModel/markI/navy-blue/scene.glb");
        useGLTF.preload("/threeModel/markI/black/scene.glb");
        useGLTF.preload("/threeModel/markI/ultra-violet/scene.glb");
      };
    case "nomad":
      return () => {
        useGLTF.preload("/threeModel/nomad/pear-black/scene.glb");
        useGLTF.preload("/threeModel/nomad/red/scene.glb");
        useGLTF.preload("/threeModel/nomad/tortoiseshell/scene.glb");
      };
    case "aviator":
      return () => {
        useGLTF.preload("/threeModel/aviator/wood-grain/scene.glb");
        useGLTF.preload("/threeModel/aviator/tortoiseshell/scene.glb");
        useGLTF.preload("/threeModel/aviator/black/scene.glb");
      };
    case "maverick":
      return () => {
        useGLTF.preload("/threeModel/maverick/gold/scene.glb");
        useGLTF.preload("/threeModel/maverick/silver/scene.glb");
        useGLTF.preload("/threeModel/maverick/tortoiseshell/scene.glb");
      };
    case "menpo":
      return () => {
        useGLTF.preload("/threeModel/menpo/black/scene.glb");
        useGLTF.preload("/threeModel/menpo/blue/scene.glb");
        useGLTF.preload("/threeModel/menpo/camo-blue/scene.glb");
        useGLTF.preload("/threeModel/menpo/camo-orange/scene.glb");
        useGLTF.preload("/threeModel/menpo/red/scene.glb");
      };
    case "lynx":
      return () => {
        useGLTF.preload("/threeModel/lynx/tortoiseshell/scene.glb");
        useGLTF.preload("/threeModel/lynx/pink-yarrow/scene.glb");
        useGLTF.preload("/threeModel/lynx/black/scene.glb");
      };
    default:
      break;
  }
};
