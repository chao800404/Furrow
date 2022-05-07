/** @format */
// import HomeBanner from "../../components/home/homeBanner/homeBanner.component";
import { lazy, Suspense } from "react";
import BannerSpinner from "../../components/bannerSpinner/bannerSpinner.component";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";
const HomeBanner = lazy(() =>
  import("../../components/home/homeBanner/homeBanner.component")
);

const Homepage = () => {
  return (
    <Suspense fallback={<BannerSpinner />}>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />
    </Suspense>
  );
};

export default Homepage;
