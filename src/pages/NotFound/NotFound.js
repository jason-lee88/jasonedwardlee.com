import { Link } from "react-router-dom";
import PageTransitionWrapper from "../../components/PageTransitionWrapper/PageTransitionWrapper";
import "./NotFound.css";

const NotFound = () => {
  return (
    <PageTransitionWrapper pageId="notFound">
      <div className="notfound-container">
        <h2>The page you requested doesn't exist.</h2>
        <Link to="/">
          <h3>Return to home page.</h3>
        </Link>
      </div>
    </PageTransitionWrapper>
  );
};

export default NotFound;
