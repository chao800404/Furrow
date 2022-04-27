/** @format */
import HomeBanner from "../../components/home/homeBanner/homeBanner.component";

import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";

const Homepage = () => {
  return (
    <>
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />
    </>
  );
};

export default Homepage;
