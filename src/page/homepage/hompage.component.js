/** @format */
import HomeBanner from "../../components/home/homeBanner/homeBanner.component";
import Sidebars from "../../components/sidebar/sidebar.component";
import HomeContent from "../../components/home/homeContent/homeContent.component";
import HomeFeature from "../../components/home/homeFeature/homeFeature.component";
import HomeArticle from "../../components/home/homArticle/homeArticle.component";

const Homepage = () => {
  return (
    <>
      <Sidebars />
      <HomeBanner />
      <HomeContent />
      <HomeFeature />
      <HomeArticle />
      <div style={{ height: "200vh" }}></div>
    </>
  );
};

export default Homepage;
