/** @format */

import { useEffect, lazy } from "react";
import { fetchShopPageStart } from "../../redux/shopPage/shopPage.action";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Cart from "../../components/cart/cart.component";
import { cartInit } from "../../redux/cart/cart.action";
const CollectionPreview = lazy(() =>
  import("../../components/collection-preview/collection-preview.component")
);
const CollectionOverView = lazy(() =>
  import("../../components/collection-overview/collection-overview.component")
);

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopPageStart());
    dispatch(cartInit());
  }, [dispatch]);

  return (
    <section style={{ overflowX: "hidden" }}>
      <Cart />
      <Routes>
        <Route path="*" element={<CollectionPreview />} />
        <Route path=":collectionId/*" element={<CollectionOverView />}></Route>
      </Routes>
    </section>
  );
};

export default ShopPage;
