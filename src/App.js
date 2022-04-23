/** @format */

import Header from "./components/header/header.component";
import Homepage from "./page/homepage/hompage.component";
import CurstomCursor from "./components/curstomCursor/curstomCursor.component";
import Sidebars from "./components/sidebar/sidebar.component";
// import ShopPage from "./page/shoppage/shopPage.component";
// import AboutPage from "./page/aboutpage/aboutPage.component";
// import FeaturePage from "./page/featurepage/featurePage.component";
// import CheckOutPage from "./page/checkoutpage/checkoutpage.component";
// import SignInPage from "./page/signInPage/signInPage.component";
// import NewsPage from "./page/newspage/newsPage.component";

import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import routes from "./router.config";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./redux/user/user.actions";
import { useDispatch } from "react-redux";
import CubeSpinner from "./components/cube-spinner/cube-spinner.component";

const ShopPage = lazy(() => import("./page/shoppage/shopPage.component"));
const AboutPage = lazy(() => import("./page/aboutpage/aboutPage.component"));
const FeaturePage = lazy(() =>
  import("./page/featurepage/featurePage.component")
);
const NewsPage = lazy(() => import("./page/featurepage/featurePage.component"));
const CheckOutPage = lazy(() =>
  import("./page/checkoutpage/checkoutpage.component")
);
const SignInPage = lazy(() => import("./page/signInPage/signInPage.component"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <section>
      <CurstomCursor />
      <Header />
      <Sidebars />
      <Suspense fallback={<CubeSpinner />}>
        <Routes>
          <Route index path={routes.HOME} element={<Homepage />} />
          <Route path={`${routes.SHOPPAGE}/*`} element={<ShopPage />} />
          <Route path={routes.ABOUT} element={<AboutPage />} />
          <Route path={routes.FEATURE} element={<FeaturePage />} />
          <Route path={routes.NEWS} element={<NewsPage />} />
          <Route path={routes.CHECKOUT} element={<CheckOutPage />} />
          <Route path={routes.SIGNIN} element={<SignInPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </section>
  );
};

export default App;
