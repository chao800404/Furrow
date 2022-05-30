/** @format */

import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const ShopPageContainer = styled.div`
  width: 100%;
  margin-top: 5rem;

  p {
    font-size: 2rem;
    font-weight: 300;
    opacity: 0.8;
  }
  h4 {
    font-size: 3rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    margin-top: 0;
    h4 {
      padding: 0 0 0.5rem 0;
      font-size: 2.5rem;
    }
  }
`;

export const ShopPageBanner = styled.div`
  width: inherit;

  img {
    margin-top: 3rem;
  }
`;

export const ShopPageSubtitle = styled.div`
  width: inherit;
`;

export const ShopPageImgContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 10rem repeat(2, minmax(25rem, 20rem));
  grid-gap: 1.5rem;
  margin-top: 5rem;

  .imgContentTitle {
    grid-row: 1 / 2;
    grid-column: 1/ -1;
    display: flex;
    justify-content: space-between;

    h4 {
      align-self: end;
      &:nth-child(1) {
        width: 30rem;
      }
    }
  }

  .firstImg {
    grid-column: 1/ 3;
    grid-row: 2 /-1;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 5rem repeat(2, 18rem) 10rem repeat(2, 20rem);

    img {
      width: 100%;
      height: unset;
    }

    .imgContentTitle {
      grid-column: 1 / -1;
      display: grid;
      grid-row: 1/ -1;
      justify-content: space-between;
      grid-template-rows: inherit;
      grid-template-columns: inherit;
      z-index: 30;
      gap: inherit;

      h4 {
        grid-column: span 2;
        align-self: end;
        &:nth-child(1) {
          width: 30rem;
          grid-row: 4/5;
        }
      }
    }

    .firstImg {
      grid-column: 1/ 3;
      grid-row: 2 / 4;
    }

    .shop-image-1,
    .shop-image-3 {
      grid-column: 1 / span 1;
    }
    .shop-image-2,
    .shop-image-4 {
      grid-column: 2 / span 1;
    }

    .shop-image-1,
    .shop-image-2 {
      grid-row: 5 / span 1;
    }
    .shop-image-3,
    .shop-image-4 {
      grid-row: 6 / span 1;
    }
  }
`;

export const ShopPageProduct = styled.div`
  width: 100%;
  margin-top: 8rem;
  height: auto;
  overflow: hidden;

  .product-image {
    height: 40rem;
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: auto;
    top: 70%;
  }

  @media only screen and (max-width: ${maxWidth.mediumAlpha}) {
    .product-image {
      height: 30vw;
    }
  }
`;
