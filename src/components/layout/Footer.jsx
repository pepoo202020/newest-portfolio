import styled from "styled-components";
import LanguageConverter from "../Elements/LanguageConverter";
import ThemeConverter from "../Elements/ThemeConverter";

const FooterDiv = styled.footer`
  position: fixed;
  bottom: 0.5rem;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  z-index: 5;
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    bottom: 0.5rem;
    gap: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <ThemeConverter />
      <LanguageConverter />
    </FooterDiv>
  );
};

export default Footer;
