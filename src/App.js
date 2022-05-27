/** @format */

import Header from "./components/header/header.component";
import Homepage from "./page/home-Page/hompage.component";
// import CurstomCursor from "./components/curstomCursor/curstomCursor.component";
import Sidebars from "./components/sidebar/sidebar.component";
import ShopPage from "./page/shop-Page/shopPage.component";
import MobileMenuBar from "./components/mobile-menu-bar/mobileMenuBar.component";
import Footer from "./components/footer/footer.component";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import { Routes, Route } from "react-router-dom";
import routes from "./router.config";
import { useEffect, lazy, Suspense } from "react";
import { checkUserSession } from "./redux/user/user.actions";
import { useDispatch, useSelector } from "react-redux";
import CubeSpinner from "./components/cube-spinner/cube-spinner.component";
import { fetchCollectionStart } from "./redux/shop/shop.actions";
import { Toaster } from "react-hot-toast";
import { selectHeaderAnComplete } from "./redux/header/header.select";

const AboutPage = lazy(() => import("./page/about-Page/aboutPage.component"));
const FeaturePage = lazy(() =>
  import("./page/feature-Page/featurePage.component")
);
const NewsPage = lazy(() => import("./page/news-Page/newsPage.component"));
const CheckOutPage = lazy(() =>
  import("./page/check-out-Page/checkoutpage.component")
);
const SignInPage = lazy(() =>
  import("./page/sign-In-Page/signInPage.component")
);
const VirtualPage = lazy(() =>
  import("./page/virtual-Page/virtualPage.component")
);

const App = ({ theme }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  const headerAnComplete = useSelector(selectHeaderAnComplete);

  return (
    <section>
      {/* <CurstomCursor /> */}
      <Header />
      <Sidebars />
      <AddToHomeScreen />
      <MobileMenuBar theme={theme} />
      <Suspense
        fallback={<CubeSpinner style={{ width: "100%", height: "100vh" }} />}
      >
        <Routes>
          <Route index path={routes.HOME} element={<Homepage />} />
          <Route path={`${routes.SHOPPAGE}/*`} element={<ShopPage />} />
          <Route path={routes.ABOUT} element={<AboutPage />} />
          <Route path={routes.FEATURE} element={<FeaturePage />} />
          <Route
            path={`${routes.NEWS}/*`}
            element={<NewsPage headerAnComplete={headerAnComplete} />}
          />
          <Route path={routes.CHECKOUT} element={<CheckOutPage />} />
          <Route path={routes.SIGNIN} element={<SignInPage />} />
          <Route path={routes.VIRTUAL} element={<VirtualPage />} />
        </Routes>
      </Suspense>
      <Toaster
        toastOptions={{
          style: {
            background: `${theme.color}`,
            color: `${theme.backgroundColor}`,
          },
        }}
      />
      <Footer />
    </section>
  );
};

export default App;
