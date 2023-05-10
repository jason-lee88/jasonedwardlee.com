import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1000px;
  margin: 0px auto;

  h1 {
    font-family: var(--font-script);
    margin-bottom: 30px;
    color: var(--blue);
    line-height: 1.1;
  }

  h2 {
    font-size: 80px;
    color: var(--off-white);
  }

  h3 {
    font-size: 80px;
  }

  p {
    max-width: 540px;
  }
`;

const Hero = () => (
  <StyledSection id="hero">
    <h1>Hi, my name is</h1>
    <h2>Jason Lee.</h2>
    <h3>I'm a software developer.</h3>
    <p>
      I'm a software engineer with a primary focus in frontend development. I'm
      currently building a modern, accessible, and flexible web platform at
      Lutron Electronics.
    </p>
  </StyledSection>
);

export default Hero;
