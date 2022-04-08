/** @format */

import { useParams, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOverViewPage } from "../../redux/shop/shop.select";
import { selectShopPageContainer } from "../../redux/shopPage/shopPage.select";
import SecondTypeCard from "../secondTypeCard/secondTypeCard.component";
import { Flex } from "../Flex/flex.styles";
import {
  CollectionOverViewContainer,
  OverViewCardContainer,
} from "./collection-overview.styles";
import Spinner from "../spinner/spinner.component";
import Popup from "../popup/popup.component";
import ShopPage from "../shopPage/shopPage.component";

const CollectionOverView = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectOverViewPage(collectionId));
  const shopPageData = useSelector(selectShopPageContainer(collectionId));

  return collection && shopPageData ? (
    <section
      style={{
        paddingTop: "25rem",
        paddingBottom: "10rem",
      }}
    >
      <Flex>
        <CollectionOverViewContainer style={{ overflow: "hidden" }}>
          <OverViewCardContainer>
            {collection?.item.map(({ id, ...otherProps }) => (
              <SecondTypeCard
                key={id}
                title={collection.title}
                {...otherProps}
              />
            ))}
          </OverViewCardContainer>
          <h1>{collectionId}</h1>
          <ShopPage shopPageData={shopPageData} collectionId={collectionId} />
        </CollectionOverViewContainer>
      </Flex>

      <Routes>
        <Route path=":colorType" element={<Popup collection={collection} />} />
      </Routes>
    </section>
  ) : (
    <Spinner style={{ minHeight: "100vh" }} />
  );
};

export default CollectionOverView;
