import styled, { keyframes } from "styled-components";
import OnOffButton from "../../components/Buttons/OnOffButton.jsx";
import LogoElement from "../../components/Elements/LogoElement.jsx";
import ScrollIconsElement from "../../components/Elements/ScrollIconsElement.jsx";
import PersonImage from "../../assets/image.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ThemeConverter from "../../components/Elements/ThemeConverter";
import LanguageConverter from "../../components/Elements/LanguageConverter";
const MainContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  /* Tablet Design 768px */
  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 1rem;
  }
`;

const animatedgradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const CenterBtn = styled(motion.button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  overflow: hidden;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  transition: all 1s ease;
  padding: 5px;
  background: linear-gradient(
    60deg,
    #e63946,
    #f1faee,
    #a8dadc,
    #457b9d,
    #1d3557
  );
  animation: ${animatedgradient} 3s ease alternate infinite;
  background-size: 300% 300%;

  /* Mobile Design 600px */
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const ContactBtn = styled(NavLink)`
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-weight: bold;
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    top: 1rem;
    right: calc(0.5rem + 2vw);
    font-size: 12px;
    font-weight: bolder;
  }
`;

const LearnMore = styled(NavLink)`
  position: absolute;
  bottom: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  font-weight: bold;
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    bottom: 1rem;
    right: calc(0.5rem + 2vw);
    font-size: 12px;
    font-weight: bolder;
  }
`;

const SelectionDiv = styled.div`
  position: absolute;
  bottom: 0.5rem;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    bottom: 0.5rem;
    gap: 10px;
  }
`;

export default function MainPage() {
  const theme = useSelector((state) => state.themes.selectedTheme);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const clickHandler = () => {
    navigate("/home");
  };

  return (
    <MainContainerDiv>
      <Container>
        <OnOffButton />
        <LogoElement />
        <ScrollIconsElement />
        <CenterBtn
          whileHover={{
            width: "250px",
            height: "250px",
          }}
        >
          <img
            src={PersonImage}
            onClick={() => clickHandler()}
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </CenterBtn>
        <ContactBtn to="mailto:abanob.shenoda@hotmail.com">
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: theme === "light" ? "#1D3557" : "#F1FAEE" }}
          >
            {t("email_me")}
          </motion.h2>
        </ContactBtn>
        <LearnMore to={"/home"}>
          <motion.h2
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1.5, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: theme === "light" ? "#1D3557" : "#F1FAEE" }}
          >
            {t("read_more")}
          </motion.h2>
        </LearnMore>
        <SelectionDiv>
          <ThemeConverter />
          <LanguageConverter />
        </SelectionDiv>
      </Container>
    </MainContainerDiv>
  );
}
