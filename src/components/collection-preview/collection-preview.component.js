/** @format */
import { useState, useCallback } from "react";
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
import { Outlet } from "react-router-dom";
import GlassesModel from "../../components/glassesCanvasModel/glassseCanvasModel.component";
import useCheckScreenIsMobile from "../../utils/useCheckScreen";

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
  const isMobile = useCheckScreenIsMobile();
  const [firstLoad, setFirstLoad] = useState(true);
  const callbackUnMount = useCallback(() => {
    const timeOut = setTimeout(() => {
      setFirstLoad((prev) => (prev = false));
    }, 100);
    return () => clearTimeout(timeOut);
  }, []);

  const PreLoadGlasses = () => {
    // Glasses model in ios mobile have bug, need to preload glasses model once
    return (
      isMobile &&
      firstLoad && (
        <GlassesModel
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "20rem",
            right: "500%",
          }}
          type="marki"
          color="black"
          onUpdate={callbackUnMount}
        />
      )
    );
  };

  return (
    <>
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
                {collections.map(({ _id, ...otherProps }) => (
                  <Card key={_id} {...otherProps} />
                ))}
              </CollectionCartContainer>
            </CollectionPreviewContainer>
          )}
        </Flex>
      </CollectionPreviewPageContainer>
      <Outlet />
      <PreLoadGlasses />
    </>
  );
};

export default CollectionPreview;
