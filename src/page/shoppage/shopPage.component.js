/** @format */

import { useEffect } from "react";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionOverView from "../../components/collection-overview/collection-overview.component";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionStart());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="*" element={<CollectionPreview />} />
        <Route path=":collectionId" element={<CollectionOverView />} />
      </Routes>
    </div>
  );
};

export default ShopPage;
