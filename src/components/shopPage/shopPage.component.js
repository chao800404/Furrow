/** @format */

import {
  ShopPageContainer,
  ShopPageBanner,
  ShopPageSubtitle,
  ShopPageImgContainer,
  ShopPageProduct,
} from "./shopPage.styles";

const ShopPage = ({ shopPageData, collectionId }) => {
  const { bettery, electrochromic, feature, imageUrl, product } = shopPageData;
  return (
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
        <img
          className="firstImg"
          alt={`${collectionId}-2`}
          src={imageUrl?.[1]}
        />
        <img alt={`${collectionId}-2`} src={imageUrl?.[2]} />
        <img alt={`${collectionId}-2`} src={imageUrl?.[3]} />
        <img alt={`${collectionId}-2`} src={imageUrl?.[4]} />
        <img alt={`${collectionId}-2`} src={imageUrl?.[5]} />
      </ShopPageImgContainer>
      <ShopPageProduct>
        <h4>{product?.title}</h4>
        <p>{product?.content}</p>
      </ShopPageProduct>
    </ShopPageContainer>
  );
};

export default ShopPage;
