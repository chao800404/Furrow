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

const ShopPage = ({ shopPageData, collectionId }) => {
  const { bettery, electrochromic, feature, imageUrl, product } = shopPageData;

  return shopPageData ? (
    <ShopPageContainer>
      <ShopPageBanner>
        <h4>{electrochromic?.title}</h4>
        <p>{electrochromic?.content}</p>
        <SlideShow
          src={[imageUrl?.[0], imageUrl?.[7]]}
          alt={`${collectionId}-1`}
        />
      </ShopPageBanner>
      <ShopPageSubtitle>
        <h4>{bettery?.title}</h4>
        <p>{bettery?.content}</p>
      </ShopPageSubtitle>
      <ShopPageImgContainer>
        <div className="imgContentTitle">
          <h4>{feature?.[0]}</h4>
          <h4>{feature?.[1]}</h4>
        </div>
        <PreLoadImage
          className="firstImg"
          text={`${collectionId}-2`}
          url={imageUrl?.[1]}
        />
        <PreLoadImage text={`${collectionId}-3`} url={imageUrl?.[2]} />
        <PreLoadImage text={`${collectionId}-4`} url={imageUrl?.[3]} />
        <PreLoadImage text={`${collectionId}-5`} url={imageUrl?.[4]} />
        <PreLoadImage text={`${collectionId}-6`} url={imageUrl?.[5]} />
      </ShopPageImgContainer>
      <ShopPageProduct>
        <h4>{product?.title}</h4>
        <p>{product?.content}</p>
        <PreLoadImage text="product" url={product?.image} />
      </ShopPageProduct>
    </ShopPageContainer>
  ) : null;
};

export default ShopPage;
