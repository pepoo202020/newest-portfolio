import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Logo = styled(motion.h1)`
  display: inline-block;
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 20px;
  }
`;
const LogoElement = () => {
  const theme = useSelector((state) => state.themes.selectedTheme);
  return (
    <Logo
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ color: theme === "light" ? "#1D3557" : "#F1FAEE" }}
    >
      AS
    </Logo>
  );
};

export default LogoElement;
