import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;

  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin: 0px 20px;
  }

  a {
    text-decoration: none;
    color: var(--off-white);
  }

  #navlinks {
    display: flex;
    align-items: center;
  }
`;

const NavBar = () => (
  <StyledNav id="nav">
    <span>LOGO</span>
    <div id="navlinks">
      <ul>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#experience">Experience</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ul>
    </div>
  </StyledNav>
);

export default NavBar;
