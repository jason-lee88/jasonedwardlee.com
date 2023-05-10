import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";
import Variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${Fonts}
  ${Variables}

  :root {
    line-height: 1.55;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: var(--navy);
    color: var(--light-gray);
    font-family: var(--font-sans);
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: var(--navy);
    height: var(--navbar-height);
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

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: var(--light-gray);
    line-height: 1.1;
  }
`;

export default GlobalStyle;
