import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import CodeWallpaper from "./components/CodeWallpaper/CodeWallpaper";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Resume from "./pages/Resume/Resume";
import NotFound from "./pages/NotFound/NotFound";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <ContentWrapper>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </ContentWrapper>
        <Footer />
        <CodeWallpaper />
      </BrowserRouter>
    </div>
  );
};

export default App;
