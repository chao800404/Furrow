/** @format */

import { lazy, useState, useCallback } from "react";
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
  const [firstLoad, setFirstLoad] = useState(true);
  const callbackUnMount = useCallback(() => {
    const timeOut = setTimeout(() => {
      setFirstLoad((prev) => (prev = false));
    }, 500);
    return () => clearTimeout(timeOut);
  }, []);
  // Glasses model in ios mobile have bug, need to preload glasses model once
  const PreLoadGlasses = () => {
    return (
      isMobile &&
      firstLoad && (
        <GlassesModel
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "20rem",
            right: "500%",
          }}
          type="marki"
          color="black"
          onUpdate={callbackUnMount}
        />
      )
    );
  };

  console.log(firstLoad);

  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />
      <PreLoadGlasses />
    </>
  );
};

export default Homepage;
