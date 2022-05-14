/** @format */
import { useSelector } from "react-redux";
import { selectShopCollectionPreview } from "../../redux/shop/shop.select";
import { Flex } from "../../components/Flex/flex.styles";
import {
  CollectionPreviewContainer,
  CollectionPreviewTitle,
  CollectionCartContainer,
  CollectionPreviewPageContainer,
} from "./collection-preview.styles";
import Card from "../card/card.component";
import { ReactSVG } from "react-svg";
import mclarenXOnesecLogo from "../../assets/svg/mclaren_x_onesec.svg";
import { selectThemeStyle } from "../../redux/theme/theme.select";

const data = {
  overViewContent: {
    title: "McLaren Vision x ONESEC",
    content:
      "Since partnering with McLaren Vision, the McLaren x ONESEClineup has received widely favourable reviews from both Americanand European audiences for its combination of stunningaesthetics and innovation.",
  },
};

const CollectionPreview = () => {
  const collections = useSelector(selectShopCollectionPreview);
  const theme = useSelector(selectThemeStyle);

  return (
    <CollectionPreviewPageContainer>
      <Flex>
        {collections && data && (
          <CollectionPreviewContainer
            initial={{ visibility: "hidden", y: 10, opacity: 0 }}
            animate={{
              visibility: "visible",
              y: 0,
              height: "auto",
              opacity: 1,
            }}
          >
            <h2>{data["overViewContent"]["title"]}</h2>
            <CollectionPreviewTitle>
              <p style={{ fontSize: "2rem" }}>
                {data["overViewContent"]["content"]}
              </p>
              <ReactSVG
                style={{ height: "20rem" }}
                beforeInjection={(svg) => {
                  svg.setAttribute(
                    "style",
                    `height:20rem; fill:${theme.color}`
                  );
                }}
                src={mclarenXOnesecLogo}
              />
            </CollectionPreviewTitle>
            <CollectionCartContainer>
              {collections.map(({ id, ...otherProps }) => (
                <Card key={id} {...otherProps} />
              ))}
            </CollectionCartContainer>
          </CollectionPreviewContainer>
        )}
      </Flex>
    </CollectionPreviewPageContainer>
  );
};

export default CollectionPreview;
