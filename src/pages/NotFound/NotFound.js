import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>The page you requested doesn't exist.</h2>
      <Link to="/">
        <h3>Return to home page.</h3>
      </Link>
    </div>
  );
};

export default NotFound;
