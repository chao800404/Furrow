/** @format */

import styled from "styled-components";

export const NewsPageContainer = styled.section`
  min-height: 100vh;
  padding: 20rem 0;
`;

export const NewsPageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 50rem;
`;

export const NewsTitle = styled.h1`
  grid-column: 1 /-1;
  font-size: 10rem;
`;
