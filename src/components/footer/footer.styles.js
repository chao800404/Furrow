/** @format */
import styled from "styled-components";
import maxWidth from "../../config/screen.size";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  height: 15rem;

  justify-content: space-between;
  align-items: end;
  margin-bottom: 3rem;

  p {
    width: 50rem;
    font-size: 1.4rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    flex-direction: column;
    height: 100%;

    p {
      line-height: 3rem;
      font-size: 1.6rem;
      width: 100%;
    }
  }
`;

export const FooterDesc = styled.div`
  @media only screen and (max-width: ${maxWidth.small}) {
    width: 100%;
  }
`;

export const FooterMenu = styled.div`
  width: 40rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 2fr 1fr;
  justify-content: space-around;

  svg {
    width: 15rem;
    height: 5rem;
    fill: ${({ theme }) => theme.color};
  }

  a {
    font-size: 2rem;
    grid-row: 2/3;

    nth-child(1) {
      grid-column: 1 / 2;
    }
    nth-child(2) {
      grid-column: 2 / 3;
    }
    nth-child(3) {
      grid-column: 3 / 4;
    }

    nth-child(4) {
      grid-column: 4 / 5;
    }
    nth-child(5) {
      grid-column: 5 / 6;
    }
    nth-child(6) {
      grid-column: 6 / 7;
    }
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 100%;
    transform: translateY(-40%);

    a {
      justify-self: center;
    }
  }
`;

export const FooterLogo = styled.div`
  grid-column: 1 / -1;
  justify-self: end;
  grid-row: 1 / 2;

  @media only screen and (max-width: ${maxWidth.small}) {
    svg {
      width: 100%;
      margin-bottom: 3rem;
    }
  }
`;

export const AuthorLink = styled.div`
  display: flex;
  width: 12rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  svg {
    width: 3rem;
    height: 3rem;
    padding: 0.2rem;
  }

  @media only screen and (max-width: ${maxWidth.small}) {
    width: 16rem;
    height: 10rem;
    svg {
      width: 4rem;
      height: 4rem;
    }
  }
`;
