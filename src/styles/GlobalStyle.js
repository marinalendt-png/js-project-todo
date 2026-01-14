import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#root {
  width: 100%;
}

body {
  background-color: ${colors.background};
  color: ${colors.textMuted}; 
  font-family: 'Courier New', Courier, monospace; 
  min-height: 100vh;
}

button {
  font-family: inherit;
  cursor: pointer;
  }
`;