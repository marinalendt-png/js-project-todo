import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  width: 100%;
  height: 100%;
}

body {
  background-color: ${colors.background};
  color: ${colors.textMuted}; 
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
  min-height: 100vh;
}

button {
  font-family: inherit;
  cursor: pointer;
  }
`;