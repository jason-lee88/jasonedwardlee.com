import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 100vh;

  h1 {
    font-family: var(--font-script);
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.theme};
    line-height: 1.1;
  }

  h2 {
    font-size: 80px;
    color: ${({ theme }) => theme.colors.heading};
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
