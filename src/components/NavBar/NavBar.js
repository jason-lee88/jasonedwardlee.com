import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/experience">
        <div>Experience</div>
      </Link>
      <Link to="/projects">
        <div>Projects</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
};

export default NavBar;
