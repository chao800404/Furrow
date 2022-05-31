/** @format */

import {
  ShopPageContainer,
  ShopPageBanner,
  ShopPageSubtitle,
  ShopPageImgContainer,
  ShopPageProduct,
} from "./shopPage.styles";

import PreLoadImage from "../preLoadImage/preLoadImage.component";
import SlideShow from "../slideShow/slideShow.component";
import { urlFor } from "../../lib/client";

const ShopPage = ({ shopPageData, collectionId }) => {
  const { bettery, electrochromic, feature, image, product, bannerImage } =
    shopPageData;

  return (
    <ShopPageContainer>
      {shopPageData && electrochromic && (
        <>
          <ShopPageBanner>
            <h4>{electrochromic.Title}</h4>
            <p>{electrochromic.Content}</p>
            <SlideShow
              src={[
                urlFor(bannerImage["bannerImage_0"]),
                urlFor(bannerImage["bannerImage_1"]),
              ]}
              alt={`${collectionId}-1`}
            />
          </ShopPageBanner>
          <ShopPageSubtitle>
            <h4>{bettery.Title}</h4>
            <p>{bettery.Content}</p>
          </ShopPageSubtitle>
          <ShopPageImgContainer>
            <div className="imgContentTitle">
              <h4>{feature.Title}</h4>
              <h4>{feature.Content}</h4>
            </div>
            <PreLoadImage
              className="firstImg"
              text={`${collectionId}-2`}
              url={image[0]}
            />
            <PreLoadImage
              className="shop-image-1"
              text={`${collectionId}-3`}
              url={image[1]}
            />
            <PreLoadImage
              className="shop-image-2"
              text={`${collectionId}-4`}
              url={image[2]}
            />
            <PreLoadImage
              className="shop-image-3"
              text={`${collectionId}-5`}
              url={image[3]}
            />
            <PreLoadImage
              className="shop-image-4"
              text={`${collectionId}-6`}
              url={image[4]}
            />
          </ShopPageImgContainer>
          <ShopPageProduct>
            <h4>{product.Title}</h4>
            <p>{product.Content}</p>
            <PreLoadImage
              className="product-image"
              text="product"
              url={product["product_image"]}
            />
          </ShopPageProduct>
        </>
      )}
    </ShopPageContainer>
  );
};

export default ShopPage;
