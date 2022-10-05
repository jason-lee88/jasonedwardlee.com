import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-links">
        <a className="fa fa-envelope" href="mailto:jason.e.lee8@gmail.com">
          {" "}
        </a>
        <a
          className="fa fa-linkedin-square"
          href="https://www.linkedin.com/in/jasonlee88/"
        >
          {" "}
        </a>
        <a className="fa fa-github" href="https://github.com/jason-lee88">
          {" "}
        </a>
        <Link className="resume-icon" to="/resume" />
      </div>
      <div className="credit">{"Designed & Built by Jason Lee"}</div>
    </div>
  );
};

export default Footer;
