import styled from "styled-components";

const StyledHeading = styled.h1`
  display: flex;
  align-items: center;
  font-family: var(--font-script);
  font-size: 32px;
  color: var(--blue);
  padding-bottom: 20px;
  ::before {
    display: block;
    width: 100px;
    height: 2px;
    content: "";
    margin-right: 10px;
    background-color: var(--blue);
    top: -5px;
  }
  ::after {
    display: block;
    width: 400px;
    height: 2px;
    content: "";
    margin-left: 10px;
    background-color: var(--blue);
    top: -5px;
  }
`;

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => (
  <StyledHeading>{title}</StyledHeading>
);

export default SectionHeading;
