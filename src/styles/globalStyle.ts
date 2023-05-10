import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import Variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}

  :root {
    line-height: 1.55;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--navy);
    color: var(--light-gray);
    font-family: var(--font-sans);
  }

  #layout {
    display: flex;
    flex-direction: column;
  }

  main {
    padding: 0px 100px;
  }

  section {
    padding-top: var(--navbar-height);
    min-height: 100vh;
  }
`;

export default GlobalStyle;
