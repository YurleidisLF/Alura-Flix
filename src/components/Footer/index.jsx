import styled from "styled-components";
import { LogoStyles } from "../Header"; 

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: auto; 
  min-height: 125px;
  display: none;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  background-color: #210230;
  padding: 20px 0; 

  @media (width > 1024px) {
    display: flex;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  background-color: var(--main-color-blue);
`;

const H2 = styled.h2`
  color: #a44ca7;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;  
`;

const Footer = ({ logo }) => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <LogoStyles src={logo} alt="Logo de alura-Flix" />
      <H2>Desarollado por: Yurleidis López</H2>
    </FooterStyles>
  );
};

export default Footer;
