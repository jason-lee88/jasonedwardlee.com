import "./Home.css";
import Me from "../../images/me.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="left-panel">
        <div>Hi!</div>
        <span>
          <p>
            My name is Jason Lee and I'm a Software Engineer at Lutron
            Electronics based in Philadelphia, PA. I recently graduated from
            Lehigh University in May 2022 with a degree in Computer Science.
          </p>
          <p>
            Currently, I'm working on building modern and customer-focused web
            applications at Lutron Electronics.
          </p>
        </span>
      </div>
      <div className="right-panel">
        <img src={Me} alt="me" />
      </div>
    </div>
  );
};

export default Home;
