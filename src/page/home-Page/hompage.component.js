/** @format */

import { lazy, useEffect, useState } from "react";
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

  useEffect(() => {
    if (!firstLoad) return;
    const timeOut = setTimeout(() => {
      setFirstLoad((prev) => (prev = false));
    }, 1500);
    return () => clearTimeout(timeOut);
  }, [firstLoad]);

  console.log(firstLoad);

  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />

      {isMobile && firstLoad && <GlassesModel type="marki" color="black" />}
    </>
  );
};

export default Homepage;
