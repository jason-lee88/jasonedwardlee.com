import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Home from "./components/Home/Home";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
