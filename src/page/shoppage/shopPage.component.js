/** @format */

import { useEffect, lazy, Suspense } from "react";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { fetchShopPageStart } from "../../redux/shopPage/shopPage.action";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import CollectionOverView from "../../components/collection-overview/collection-overview.component";
import Cart from "../../components/cart/cart.component";
import { cartInit } from "../../redux/cart/cart.action";
import CubeSpinner from "../../components/cube-spinner/cube-spinner.component";
const CollectionPreview = lazy(() =>
  import("../../components/collection-preview/collection-preview.component")
);
const CollectionOverView = lazy(() =>
  import("../../components/collection-overview/collection-overview.component")
);

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
    dispatch(fetchShopPageStart());
    dispatch(cartInit());
  }, [dispatch]);

  return (
    <Suspense
      fallback={<CubeSpinner style={{ width: "100%", height: "100vh" }} />}
    >
      <section style={{ overflowX: "hidden" }}>
        <Cart />
        <Routes>
          <Route path="*" element={<CollectionPreview />} />
          <Route
            path=":collectionId/*"
            element={<CollectionOverView />}
          ></Route>
        </Routes>
      </section>
    </Suspense>
  );
};

export default ShopPage;
