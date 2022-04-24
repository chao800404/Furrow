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
} from "./collection-overview.styles";
import Popup from "../popup/popup.component";
import ShopPage from "../shopPage/shopPage.component";
import { InView } from "react-intersection-observer";
import { useState } from "react";
import Button from "../button/button.component";
import LinkBtn from "../linkButton/linkButton.component";
import CubeSpinner from "../cube-spinner/cube-spinner.component";

const CollectionOverView = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectOverViewPage(collectionId));
  const shopPageData = useSelector(selectShopPageContainer(collectionId));
  const collections = useSelector(selectOverViewLink);
  const [inView, setInView] = useState(true);

  return collection && shopPageData ? (
    <section
      style={{
        paddingTop: "25rem",
        paddingBottom: "10rem",
        position: "relative",
      }}
    >
      <Flex>
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
              path={collection.item[0].color}
            >
              ADD TO CART
            </Button>
          )}

          <div style={{ height: "10rem" }}>
            {collections.map((title, index) => (
              <LinkBtn key={index} link={title}>
                {title}
              </LinkBtn>
            ))}
          </div>

          <OverViewCardContainer>
            <InView
              as="div"
              onChange={(inView) => setInView(inView)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gridGap: "4rem 2rem",
              }}
            >
              {collection?.item.map(({ id, ...otherProps }) => (
                <SecondTypeCard
                  key={id}
                  title={collection.title}
                  {...otherProps}
                />
              ))}
            </InView>
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
    <CubeSpinner style={{ height: "100vh" }} />
  );
};

export default CollectionOverView;
