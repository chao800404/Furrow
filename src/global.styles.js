/** @format */

import { createGlobalStyle } from "styled-components";

// const toggleTheme = (theme, style) =>
//   theme === "darkTheme" ? lightTheme[style] : darkTheme[style];

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
      padding:0;
      margin:0;
      box-sizing:inherit;
  }

  html{ 
      font-size: 62.5%;
  } 
  
  body { 
      box-sizing: border-box;
      background-color:${(props) => {
        console.log(props);
        return props.theme.backgroundColor;
      }};
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
    font-size: 5rem;
  }
`;
