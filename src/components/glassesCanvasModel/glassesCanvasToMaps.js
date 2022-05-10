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
    stealBlue: MarkIStealBlueModel,
    navyBlue: MarkINavyBlueModel,
    ultraViolet: MarkIUltraVioletModel,
  },
  aviator: {
    black: AviatorBlackModel,
    green: AviatorGreenModel,
    tortoiseshell: AviatorTortoiseshellModel,
    woodGrain: AviatorWoodGrainModel,
  },
  lynx: {
    black: LynxBlackModel,
    tortoiseshell: LynxTortoiseshellModel,
    pinkYarrow: LynxPinkYarrowModel,
  },
  menpo: {
    black: MenpoBlackModel,
    blue: MenpoBlueModel,
    camoBlue: MenpoCamoBlueModel,
    camoOrange: MenpoCamoOrangeModel,
    red: MenpoRedModel,
  },
  maverick: {
    gold: MaverickGoldtModel,
    silver: MaverickSilverModel,
    tortoiseshell: MaverickTortoiseshellModel,
  },
  nomad: {
    pearBlack: NomadPearBlackModel,
    red: NomadRedModel,
    tortoiseshell: NomadTortoiseshellModel,
  },
};

export const preLoadModel = (model) => {
  switch (model) {
    case "marki":
      return () => {
        useGLTF.preload("/threeModel/MarkI/black/scene.gltf");
        useGLTF.preload("/threeModel/MarkI/navy-blue/scene.gltf");
        useGLTF.preload("/threeModel/MarkI/black/scene.gltf");
        useGLTF.preload("/threeModel/MarkI/ultra-violet/scene.gltf");
      };
    case "nomad":
      return () => {
        useGLTF.preload("/threeModel/Nomad/pear-black/scene.gltf");
        useGLTF.preload("/threeModel/Nomad/red/scene.gltf");
        useGLTF.preload("/threeModel/Nomad/tortoiseshell/scene.gltf");
      };
    case "aviator":
      return () => {
        useGLTF.preload("/threeModel/Aviator/wood-grain/scene.gltf");
        useGLTF.preload("/threeModel/Aviator/tortoiseshell/scene.gltf");
        useGLTF.preload("/threeModel/Aviator/black/scene.gltf");
      };
    case "maverick":
      return () => {
        useGLTF.preload("/threeModel/Maverick/gold/scene.gltf");
        useGLTF.preload("/threeModel/Maverick/silver/scene.gltf");
        useGLTF.preload("/threeModel/Maverick/tortoiseshell/scene.gltf");
      };
    case "menpo":
      return () => {
        useGLTF.preload("/threeModel/Menpo/black/scene.gltf");
        useGLTF.preload("/threeModel/Menpo/blue/scene.gltf");
        useGLTF.preload("/threeModel/Menpo/camo-blue/scene.gltf");
        useGLTF.preload("/threeModel/Menpo/camo-orange/scene.gltf");
        useGLTF.preload("/threeModel/Menpo/red/scene.gltf");
      };
    case "lynx":
      return () => {
        useGLTF.preload("/threeModel/Lynx/tortoiseshell/scene.gltf");
        useGLTF.preload("/threeModel/Lynx/pink-yarrow/scene.gltf");
        useGLTF.preload("/threeModel/Lynx/black/scene.gltf");
      };
    default:
      break;
  }
};
