import NavBar from "./components/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

const App = () => (
  <div id="layout">
    <NavBar />
    <main>
      <Hero />
      <About />
    </main>
  </div>
);

export default App;
