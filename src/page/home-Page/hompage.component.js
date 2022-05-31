/** @format */

import { lazy } from "react";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";
import GlassesModel from "../../components/glassesCanvasModel/glassseCanvasModel.component";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";
const HomeBanner = lazy(() =>
  import("../../components/home/homeBanner/homeBanner.component")
);

const Homepage = () => {
  const isMobile = useCheckScreenIsMobile();

  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />

      {isMobile && (
        <GlassesModel
          style={{ width: "3rem", height: "3em", visibility: "hidden" }}
          type="marki"
          color="black"
        />
      )}
    </>
  );
};

export default Homepage;
