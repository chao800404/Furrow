/** @format */

import { createGlobalStyle } from "styled-components";
import screenSize from "./theme/screenSize";
// const toggleTheme = (theme, style) =>
//   theme === "darkTheme" ? lightTheme[style] : darkTheme[style];

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
      padding:0;
      margin:0;
      box-sizing:inherit;
      cursor:none; 
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

  button {
    background-color:${({ theme: { buttonBackgroundColor } }) =>
      buttonBackgroundColor};
    color: ${({ theme: { buttonFontColor } }) => buttonFontColor};
  }

  p,div {
    font-size:1.6rem;
  }

  h1 {
    color: ${({ theme: { bannerTitle } }) => bannerTitle};
    pointer-events: none;
  }
`;
