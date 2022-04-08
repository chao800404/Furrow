/** @format */
import { useSelector } from "react-redux";
import { selectShopCollectionPreview } from "../../redux/shop/shop.select";
import { Flex } from "../../components/Flex/flex.styles";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
} from "./collection-preview.styles";
import Card from "../card/card.component";
import { ReactSVG } from "react-svg";
import mclarenXOnesecLogo from "../../assets/svg/mclaren_x_onesec.svg";
import { selectThemeStyle } from "../../redux/theme/theme.select";
import Spinner from "../spinner/spinner.component";
import { selectCardLoad } from "../../redux/card/card.select";

const CollectionPreview = () => {
  const collections = useSelector(selectShopCollectionPreview);

  const theme = useSelector(selectThemeStyle);
  const imageLoad = useSelector(selectCardLoad);

  return collections ? (
    <Flex>
      {imageLoad ? null : (
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Spinner style={{ minHeight: "100vh" }} />
        </div>
      )}
      <CollectionPreviewContainer
        initial={{ visibility: "hidden", y: 10, opacity: 0 }}
        animate={
          imageLoad
            ? { visibility: "visible", y: 0, height: "auto", opacity: 1 }
            : { visibility: "hidden" }
        }
      >
        <h2>McLaren Vision x ONESEC</h2>
        <CollectionPreviewTitle>
          <p style={{ fontSize: "2rem" }}>
            Since partnering with McLaren Vision, the McLaren x ONESEC lineup
            has received widely favourable reviews from both American and
            European audiences for its combination of stunning aesthetics and
            innovation.
          </p>
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute("style", `height:20rem; fill:${theme.color}`);
            }}
            src={mclarenXOnesecLogo}
          />
        </CollectionPreviewTitle>

        {collections?.map(({ id, ...otherProps }) => (
          <Card key={id} {...otherProps} />
        ))}
      </CollectionPreviewContainer>
    </Flex>
  ) : (
    <Spinner style={{ minHeight: "100vh", height: "100%" }} />
  );
};

export default CollectionPreview;
