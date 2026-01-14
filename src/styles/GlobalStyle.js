import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: green;
  }

  button {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;