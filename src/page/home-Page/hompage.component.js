/** @format */

import { lazy, useState, useEffect } from "react";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";
import GlassesModel from "../../components/glassesCanvasModel/glassseCanvasModel.component";
import isMoible from "../../utils/useCheckScreen";
const HomeBanner = lazy(() =>
  import("../../components/home/homeBanner/homeBanner.component")
);

const Homepage = () => {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    if (!firstLoad) {
      const timeOut = setTimeout(() => {
        setFirstLoad((prev) => (prev = true));
      }, 300);
      return clearTimeout(timeOut);
    }
  }, [firstLoad]);

  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />

      {isMoible && firstLoad && (
        <GlassesModel
          style={{ width: "10rem", height: "10rem" }}
          type="marki"
          color="black"
        />
      )}
    </>
  );
};

export default Homepage;
