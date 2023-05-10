import styled from "styled-components";
import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background-color: var(--navy);
  height: var(--navbar-height);
`;

const App = () => (
  <div id="layout">
    <StyledHeader id="header">
      <NavBar />
    </StyledHeader>
    <main id="main">
      <Hero />
      <About />
    </main>
  </div>
);

export default App;
