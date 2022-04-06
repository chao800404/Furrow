/** @format */

import { useParams, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOverViewPage } from "../../redux/shop/shop.select";
import SecondTypeCard from "../secondTypeCard/secondTypeCard.component";
import { Flex } from "../Flex/flex.styles";
import {
  CollectionOverViewContainer,
  OverViewCardContainer,
} from "./collection-overview.styles";
import Spinner from "../spinner/spinner.component";
import Popup from "../popup/popup.component";
const CollectionOverView = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectOverViewPage(collectionId));

  return collection ? (
    <section style={{ height: "100vh" }}>
      <Flex>
        <CollectionOverViewContainer>
          <h1>{collectionId}</h1>
          <OverViewCardContainer>
            {collection?.item.map(({ id, ...otherProps }) => (
              <SecondTypeCard
                key={id}
                title={collection.title}
                {...otherProps}
              />
            ))}
          </OverViewCardContainer>
        </CollectionOverViewContainer>
      </Flex>

      <Routes>
        <Route path=":colorType" element={<Popup collection={collection} />} />
      </Routes>
    </section>
  ) : (
    <Spinner />
  );
};

export default CollectionOverView;
