/** @format */
import { lazy } from "react";

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
