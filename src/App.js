/** @format */

import Header from "./components/header/header.component";
import Homepage from "./page/homepage/hompage.component";
import ShopPage from "./page/shoppage/shopPage.component";
import AboutPage from "./page/aboutpage/aboutPage.component";
import FeaturePage from "./page/featurepage/featurePage.component";
import NewsPage from "./page/newspage/newsPage.component";
import Sidebars from "./components/sidebar/sidebar.component";
import CheckOutPage from "./page/checkoutpage/checkoutpage.component";
import CurstomCursor from "./components/curstomCursor/curstomCursor.component";
import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCardBtn } from "./redux/card/card.select";
import { useEffect } from "react";
import { cardClickToggle } from "./redux/card/card.action";
import { AppContainer } from "./App.styles";
import routes from "./router.config";

const App = () => {
  const popupToggleClick = useSelector(selectCardBtn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardClickToggle(false));
  }, [dispatch]);

  return (
    <AppContainer scrollHidden={popupToggleClick}>
      <CurstomCursor />
      <Header />
      <Sidebars />
      <Routes>
        <Route index path={routes.HOME} element={<Homepage />} />
        <Route path={`${routes.SHOPPAGE}/*`} element={<ShopPage />} />
        <Route path={routes.ABOUT} element={<AboutPage />} />
        <Route path={routes.FEATURE} element={<FeaturePage />} />
        <Route path={routes.NEWS} element={<NewsPage />} />
        <Route path={routes.CHECKOUT} element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
};

export default App;
