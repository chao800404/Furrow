/** @format */

import { useParams, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectOverViewPage,
  selectOverViewLink,
} from "../../redux/shop/shop.select";
import { selectShopPageContainer } from "../../redux/shopPage/shopPage.select";
import SecondTypeCard from "../secondTypeCard/secondTypeCard.component";
import { Flex } from "../Flex/flex.styles";
import {
  CollectionOverViewContainer,
  OverViewCardContainer,
  CollectionOverViewPageContainer,
  CollectionOverViewLinkBtn,
} from "./collection-overview.styles";
import Popup from "../popup/popup.component";
import ShopPage from "../shopPage/shopPage.component";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import Button from "../button/button.component";
import LinkBtn from "../linkButton/linkButton.component";
import { transferClassesTypeName } from "../../utils/transferGlassesTypeName";

const CollectionOverView = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectOverViewPage(collectionId));
  const shopPageData = useSelector(selectShopPageContainer(collectionId));
  const collections = useSelector(selectOverViewLink);
  const [inView, setInView] = useState(true);
  const { curColor } = transferClassesTypeName({
    color: collection?.product[0]?.color,
  });

  return (
    <CollectionOverViewPageContainer>
      <Flex>
        {collection?.product && collection && (
          <CollectionOverViewContainer style={{ position: "relative" }}>
            {inView ? null : (
              <Button
                style={{
                  position: "fixed",
                  top: "5%",
                  right: "5%",
                  backgroundColor: "#000",
                  zIndex: 30,
                  width: "20rem",
                }}
                type="secondBtn"
                path={curColor}
              >
                ADD TO CART
              </Button>
            )}

            <CollectionOverViewLinkBtn>
              {collections.map((productName, index) => (
                <LinkBtn
                  key={index}
                  link={productName}
                  collectionId={collectionId}
                >
                  {productName.toUpperCase()}
                </LinkBtn>
              ))}
            </CollectionOverViewLinkBtn>

            <OverViewCardContainer>
              <InView
                as="div"
                onChange={(inView) => setInView(inView)}
                className="over-view-cart-container"
              >
                {collection.product.map(({ _key, ...otherProps }) => (
                  <SecondTypeCard
                    key={_key}
                    title={collection.productName}
                    {...otherProps}
                  />
                ))}
              </InView>
            </OverViewCardContainer>
            <h1>{collectionId.toUpperCase()}</h1>
            <ShopPage shopPageData={shopPageData} collectionId={collectionId} />
          </CollectionOverViewContainer>
        )}
      </Flex>

      <Routes>
        <Route
          path=":colorType"
          element={
            <Popup collection={collection} collectionId={collectionId} />
          }
        />
      </Routes>
    </CollectionOverViewPageContainer>
  );
};

export default CollectionOverView;
