/** @format */

import sunFilterLight from "../../assets/featurePhoto/glasses_sun_filter_img-1.webp";
import sunFilterDark from "../../assets/featurePhoto/glasses_sun_filter_img-2.webp";
import nightFilterLight from "../../assets/featurePhoto/glasses_night_filter_img-3.webp";
import nightFilterDark from "../../assets/featurePhoto/glasses_night_filter_img-4.webp";
import waterProofIcon from "../../assets/svg/water_proof.svg";
import UVProofIcon from "../../assets/svg/UV.svg";
import dustProofIcon from "../../assets/svg/dust_proof.svg";
import coldProtectionIcon from "../../assets/svg/cold_protection.svg";

export const feature = {
  bannerStatement: {
    0: "Patented Technology",
    1: "Shade shift technology for instant lens tint. Patented in the US,Japan and Korea.",
  },
  story: {
    title: "BRAND VALUES",
    0: "Featuring electrochromic liquid crystal technology with an inbuilt photosensitive chipset to deliver instantaneous transitions.",
    1: "Dynamic transitions enable protection from ambient light sources precisely when needed.",
    2: "Breakthrough eyewear technology featuring instantaneous lens transitions.",
    3: "99% filtration efficiency (UVA/ UVB) in both shades and specs modes.",
  },
  property: {
    0: "Unprecedented battery life",
    1: "Special material",
    2: "Reducing reflective light for comfort and clarity",
  },
  function: {
    0: "Good function, stylish form",
  },
};

export const imgArr = [
  {
    status: "Worn prior to high brightness conditions",
    img: sunFilterLight,
  },
  {
    status: "Worn under high brightness conditions",
    img: sunFilterDark,
  },
  {
    status: "Under low light conditions (Before)",
    img: nightFilterLight,
  },
  {
    status: "Under low light conditions (After)",
    img: nightFilterDark,
  },
];

export const imgArr1 = [
  {
    statement: "Rated IP57 for dust & water resistance",
    img: waterProofIcon,
  },
  {
    statement:
      "99% filtration efficiency (UVA/ UVB) in both shades and specs modes",
    img: UVProofIcon,
  },
  {
    statement: "Ingress protection against solid foreign objects",
    img: dustProofIcon,
  },
  {
    statement: "Operational in extreme weather (-20℃ to 70℃).",
    img: coldProtectionIcon,
  },
];
