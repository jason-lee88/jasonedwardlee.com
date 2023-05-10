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
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.typography};
    font-family: var(--font-sans);
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    height: var(--navbar-height);
  }

  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding: 20px;
  }

  #layout {
    display: flex;
    flex-direction: column;
  }

  main {
    padding: 0px 100px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0px auto;
    padding-top: var(--navbar-height);
    max-width: 1000px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.typography};
    line-height: 1.1;
  }
`;

export default GlobalStyle;
