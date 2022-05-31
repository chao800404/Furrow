/** @format */

import { lazy } from "react";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";
import GlassesModel from "../../components/glassesCanvasModel/glassseCanvasModel.component";
const HomeBanner = lazy(() =>
  import("../../components/home/homeBanner/homeBanner.component")
);

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />
      <GlassesModel type="marki" color="black" />
    </>
  );
};

export default Homepage;
