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
  height: 100%;
}

#root {
  width: 100%;
}

body {
  background-color: ${colors.secondary};
  color: ${colors.primary}; 
  font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  min-height: 100vh;
  line-height: 1.5;
}

button, input, textarea, select {
  font-family: inherit;
  cursor: pointer;
  }
`;