/** @format */

import Header from "./components/header/header.component";
import Homepage from "./page/homepage/hompage.component";
import ShopPage from "./page/shoppage/shopPage.component";
import AboutPage from "./page/aboutpage/aboutPage.component";
import FeaturePage from "./page/featurepage/featurePage.component";
import NewsPage from "./page/newspage/newsPage.component";
import Sidebars from "./components/sidebar/sidebar.component";
import CurstomCursor from "./components/curstomCursor/curstomCursor.component";
import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.main`
  overflow: hidden;
  position: relative;
`;

const App = () => {
  return (
    <AppContainer>
      <CurstomCursor />
      <Header />
      <Sidebars />
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default App;
