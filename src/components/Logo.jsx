
import styled from "styled-components";

const LogoLink = styled('h1')`
  width: 260px;
  font-size: 92px;
  font-weight: 700;
  color: var(--white-sky-tint);
  margin-bottom: 24px;
  font-family: var(--font-accent-gothic); 
  

  @media (max-width: 764px) {
    width: auto;
    font-size: 56px;
    padding-bottom: 24px;
  }
`;

export function Logo() {
  return (
    <LogoLink to="/" className="logo">
      Jerry Heil
    </LogoLink>
  );
}