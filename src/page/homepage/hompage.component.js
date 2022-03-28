/** @format */
import HomeBanner from "../../components/home/homeBanner/homeBanner.component";
import Sidebars from "../../components/sidebar/sidebar.component";
import HomeContent from "../../components/home/homeContent/homeContent.component";

const Homepage = () => {
  return (
    <>
      <Sidebars />
      <HomeBanner />
      <HomeContent />
      <div style={{ height: "200vh" }}></div>
    </>
  );
};

export default Homepage;
