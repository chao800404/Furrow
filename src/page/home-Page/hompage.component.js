/** @format */

// import { lazy, useCallback, useState } from "react";
import { lazy } from "react";
// import useCheckScreenIsMobile from "../../utils/useCheckScreen";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";

// import GlassesModel from "../../components/glassesCanvasModel/glassseCanvasModel.component";

const HomeBanner = lazy(() =>
  import("../../components/home/homeBanner/homeBanner.component")
);

const Homepage = () => {
  // const [firstLoad, setFirstLoad] = useState(true);
  // const isMobile = useCheckScreenIsMobile();
  // const callbackUnMount = useCallback(() => {
  //   const timeOut = setTimeout(() => {
  //     setFirstLoad((prev) => (prev = false));
  //   }, 100);
  //   return () => clearTimeout(timeOut);
  // }, []);

  // const PreLoadGlasses = () => {
  //   // Glasses model in ios mobile have bug, need to preload glasses model once
  //   return (
  //     isMobile &&
  //     firstLoad && (
  //       <GlassesModel
  //         style={{
  //           position: "absolute",
  //           bottom: "0",
  //           width: "100%",
  //           height: "10rem",
  //           right: "500%",
  //         }}
  //         type="marki"
  //         color="black"
  //         onUpdate={callbackUnMount}
  //       />
  //     )
  //   );
  // };

  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />

      {/* <PreLoadGlasses /> */}
    </>
  );
};

export default Homepage;
