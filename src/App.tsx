import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import DarkTheme from "./styles/themes/dark";
import LightTheme from "./styles/themes/light";
import { useState, useEffect } from "react";
import Credit from "./components/Credit";

const App = () => {
  const [colorScheme, setColorScheme] = useState("dark");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setColorScheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={colorScheme === "dark" ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <div id="layout">
        <header id="header">
          <NavBar toggleColorScheme={toggleColorScheme} />
        </header>
        <main id="main">
          <Hero />
          <About />
        </main>
        <footer id="footer">
          <Credit />
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
