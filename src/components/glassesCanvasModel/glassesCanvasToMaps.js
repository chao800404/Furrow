/** @format */
import { lazy } from "react";

import { useGLTF } from "@react-three/drei";

const AviatorBlackModel = lazy(() =>
  import("../../threeModel/aviator/aviator-black")
);

const AviatorGreenModel = lazy(() =>
  import("../../threeModel/aviator/aviator-green")
);
const AviatorTortoiseshellModel = lazy(() =>
  import("../../threeModel/aviator/aviator-tortoiseshell")
);
const AviatorWoodGrainModel = lazy(() =>
  import("../../threeModel/aviator/aviator-wood-grain")
);
const LynxBlackModel = lazy(() => import("../../threeModel/lynx/lynx-black"));
const LynxTortoiseshellModel = lazy(() =>
  import("../../threeModel/lynx/lynx-tortoiseshell")
);
const LynxPinkYarrowModel = lazy(() =>
  import("../../threeModel/lynx/lynx-pink-yarrow")
);
const MarkIBlackModel = lazy(() =>
  import("../../threeModel/marki/marki-black")
);
const MarkIStealBlueModel = lazy(() =>
  import("../../threeModel/marki/marki-steal-blue")
);
const MarkINavyBlueModel = lazy(() =>
  import("../../threeModel/marki/marki-navy-blue")
);
const MarkIUltraVioletModel = lazy(() =>
  import("../../threeModel/marki/marki-ultra-violet")
);
const MaverickGoldtModel = lazy(() =>
  import("../../threeModel/maverick/maverick-gold")
);
const MaverickSilverModel = lazy(() =>
  import("../../threeModel/maverick/maverick-silver")
);
const MaverickTortoiseshellModel = lazy(() =>
  import("../../threeModel/maverick/maverick-tortoiseshell")
);
const MenpoBlackModel = lazy(() =>
  import("../../threeModel/menpo/menpo-black")
);
const MenpoBlueModel = lazy(() => import("../../threeModel/menpo/menpo-blue"));
const MenpoCamoBlueModel = lazy(() =>
  import("../../threeModel/menpo/menpo-camo-blue")
);
const MenpoCamoOrangeModel = lazy(() =>
  import("../../threeModel/menpo/menpo-camo-orange")
);
const MenpoRedModel = lazy(() => import("../../threeModel/menpo/menpo-red"));
const NomadPearBlackModel = lazy(() =>
  import("../../threeModel/nomad/nomad-pear-black")
);
const NomadRedModel = lazy(() => import("../../threeModel/nomad/nomad-red"));
const NomadTortoiseshellModel = lazy(() =>
  import("../../threeModel/nomad/nomad-tortoiseshell.js")
);

export const glassesModel = {
  marki: {
    black: MarkIBlackModel,
    "steal-blue": MarkIStealBlueModel,
    "navy-blue": MarkINavyBlueModel,
    "ultra-violet": MarkIUltraVioletModel,
  },
  aviator: {
    black: AviatorBlackModel,
    green: AviatorGreenModel,
    tortoiseshell: AviatorTortoiseshellModel,
    "wood-grain": AviatorWoodGrainModel,
  },
  lynx: {
    black: LynxBlackModel,
    tortoiseshell: LynxTortoiseshellModel,
    "pink-yarrow": LynxPinkYarrowModel,
  },
  menpo: {
    black: MenpoBlackModel,
    blue: MenpoBlueModel,
    "camo-blue": MenpoCamoBlueModel,
    "camo-orange": MenpoCamoOrangeModel,
    red: MenpoRedModel,
  },
  maverick: {
    gold: MaverickGoldtModel,
    silver: MaverickSilverModel,
    tortoiseshell: MaverickTortoiseshellModel,
  },
  nomad: {
    "pear-black": NomadPearBlackModel,
    red: NomadRedModel,
    tortoiseshell: NomadTortoiseshellModel,
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
