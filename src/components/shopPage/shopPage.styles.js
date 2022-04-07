/** @format */

import styled from "styled-components";

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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 10rem 1fr 1fr;
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

  img {
    width: 100%;
  }
`;

export const ShopPageProduct = styled.div`
  width: 100%;
  margin-top: 2rem;
`;
