/** @format */

import {
  ShopPageContainer,
  ShopPageBanner,
  ShopPageSubtitle,
  ShopPageImgContainer,
  ShopPageProduct,
} from "./shopPage.styles";

import PreLoadImage from "../preLoadImage/preLoadImage.component";

const ShopPage = ({ shopPageData, collectionId }) => {
  const { bettery, electrochromic, feature, imageUrl, product } = shopPageData;

  return shopPageData ? (
    <ShopPageContainer>
      <ShopPageBanner>
        <h4>{electrochromic?.title}</h4>
        <p>{electrochromic?.content}</p>

        <img
          style={{ width: "100%" }}
          alt={`${collectionId}-1`}
          src={imageUrl?.[0]}
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

        {/* <img alt={`${collectionId}-2`} src={imageUrl?.[2]} />
        <img alt={`${collectionId}-3`} src={imageUrl?.[3]} />
        <img alt={`${collectionId}-4`} src={imageUrl?.[4]} />
        <img alt={`${collectionId}-5`} src={imageUrl?.[5]} /> */}
      </ShopPageImgContainer>
      <ShopPageProduct>
        <h4>{product?.title}</h4>
        <p>{product?.content}</p>
        <PreLoadImage text="product" url={product?.image} />
        {/* <img alt="product" src={product?.image} /> */}
      </ShopPageProduct>
    </ShopPageContainer>
  ) : null;
};

export default ShopPage;
