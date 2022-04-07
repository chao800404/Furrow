/** @format */

import { createGlobalStyle } from "styled-components";
import screenSize from "./theme/screenSize";

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
      padding:0;
      margin:0;
      box-sizing:inherit;
      cursor:none
  }

  html{ 
      font-size: 62.5%;
      @media only screen and (max-width: ${`${screenSize.medium}px`}) {
        font-size:50%;
      }
  } 
  
  body { 
      box-sizing: border-box;
      background-color:${(props) => props.theme.backgroundColor};
      color: ${({ theme: { color } }) => color};
      font-family: 'Anton', sans-serif;
      
  }

  a,a:active,a:focus {
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
    text-decoration: none;
    outline:none;
  }

  button {
    background-color:${({ theme: { buttonBackgroundColor } }) =>
      buttonBackgroundColor};
    color: ${({ theme: { buttonFontColor } }) => buttonFontColor};
  }

  p,div {
    font-size:2.5rem;
    font-family: 'Oswald', sans-serif;
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
  }

  h1 {
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
    pointer-events: none;
  }

  h2 {
    font-size:3rem;
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
  }
  h3 {
    font-size: 2.5rem;
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
  }
  button {
    color: ${({ theme: { color } }) => color};
    font-family: 'Anton', sans-serif;
    font-size:2rem;

  }

`;
