import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Image01 from "../../assets/image.jpg";
import Image02 from "../../assets/02jpg.jpg";
import Image03 from "../../assets/03.jpg";
import Image04 from "../../assets/04.jpg";
import { motion } from "framer-motion";
import AboutComponent from "../../components/AboutComponent/AboutComponent";

const HomePageMainContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-top: 100px;
`;

const DescriptionMeContainer = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  flex: none;
  height: auto;
  max-width: 75%;
  position: relative;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  word-wrap: break-word;
  color: ${(props) => (props.colortheme === "light" ? "#1D3557" : "#F1FAEE")};
  gap: 30px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const NameHeader = styled(motion.h1)`
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 1em;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const WelcomeHeader = styled(motion.h1)`
  font-size: 56px;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  line-height: 1em;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const ImagesWallContainer = styled.div`
  display: flex;
  flex: none;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: auto;
  justify-content: center;
  position: relative;
  width: auto;
  z-index: 2;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const FirstImageContainer = styled(motion.div)`
  opacity: 1;
  transform: perspective(1200px)
    rotate(
      ${(props) => (props.selectedLangCode === "en" ? "-10.19deg" : "10.19deg")}
    );
  border-width: 5px;
  border-color: rgba(119, 129, 172, 0.3);
  align-items: center;
  border-radius: 23px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 364px;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 200px;
  @media (max-width: 768px) {
    border-radius: 18px;
    width: 80px;
    height: 200px;
  }
`;

const ImageSubContainer = styled.div`
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  &::after {
    content: "";
    border-width: 5px;
    border-color: rgba(119, 129, 172, 0.3);
    border-style: solid;
    width: 100%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    border-radius: inherit;
    pointer-events: none;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-position: center center;
  object-fit: cover;
  image-rendering: auto;
`;

const SecondImagContainer = styled(motion.div)`
  opacity: 1;
  transform: perspective(1200px)
    rotate(
      ${(props) => (props.selectedLangCode === "en" ? "6.67deg" : "-6.67deg")}
    );
  border-width: 5px;
  border-color: rgba(119, 129, 172, 0.3);
  align-items: center;
  border-radius: 23px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 364px;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 200px;
  @media (max-width: 768px) {
    border-radius: 18px;
    width: 80px;
    height: 200px;
  }
`;

const ThirdImageContainer = styled(motion.div)`
  opacity: 1;
  transform: perspective(1200px)
    rotate(
      ${(props) => (props.selectedLangCode === "en" ? "-2.05deg" : "2.05deg")}
    );
  border-width: 5px;
  border-color: rgba(119, 129, 172, 0.3);
  align-items: center;
  border-radius: 23px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 364px;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 200px;
  @media (max-width: 768px) {
    border-radius: 18px;
    width: 80px;
    height: 200px;
  }
`;

const FourthImageContainer = styled(motion.div)`
  opacity: 1;
  transform: perspective(1200px)
    rotate(
      ${(props) => (props.selectedLangCode === "en" ? "-7.46deg" : "7.46deg")}
    );
  border-width: 5px;
  border-color: rgba(119, 129, 172, 0.3);
  align-items: center;
  border-radius: 23px;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: 364px;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 200px;
  @media (max-width: 768px) {
    border-radius: 18px;
    width: 80px;
    height: 200px;
  }
`;

export default function HomePage() {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const selectedLangCode = useSelector(
    (state) => state.language.selectedLang.code
  );
  const { t } = useTranslation();

  const image01Variants = {
    hidden: {
      opacity: 0,
      x: selectedLangCode === "en" ? -100 : 100,
      rotate: selectedLangCode === "en" ? "-20.19deg" : "20.19deg",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: selectedLangCode === "en" ? "-10.19deg" : "10.19deg",
    },
  };

  const image02Variants = {
    hidden: {
      opacity: 0,
      x: selectedLangCode === "en" ? -100 : 100,
      rotate: selectedLangCode === "en" ? "16.67deg" : "-16.67deg",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: selectedLangCode === "en" ? "6.67deg" : "-6.67deg",
    },
  };

  const image03Variants = {
    hidden: {
      opacity: 0,
      x: selectedLangCode === "en" ? -100 : 100,
      rotate: selectedLangCode === "en" ? "-12.05deg" : "12.05deg",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: selectedLangCode === "en" ? "-2.05deg" : "2.05deg",
    },
  };

  const image04Variants = {
    hidden: {
      opacity: 0,
      x: selectedLangCode === "en" ? -100 : 100,
      rotate: selectedLangCode === "en" ? "-17.46deg" : "17.46deg",
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: selectedLangCode === "en" ? "-7.46deg" : "7.46deg",
    },
  };

  return (
    <HomePageMainContainer>
      <DescriptionMeContainer colortheme={theme}>
        <NameHeader
          initial={{ opacity: 0, y: -200 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
          transition={{ duration: 1.5 }} // Transition duration
        >
          {t("name_header")}
        </NameHeader>
        <WelcomeHeader
          initial={{ opacity: 0, y: 50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties to transition to
          transition={{ duration: 1, delay: 0.5 }} // Transition duration with delay
        >
          {t("welcome_portfolio_message")}
        </WelcomeHeader>
      </DescriptionMeContainer>
      <ImagesWallContainer>
        <FirstImageContainer
          selectedLangCode={selectedLangCode}
          initial="hidden"
          animate="visible"
          variants={image01Variants}
          transition={{ type: "tween", duration: "1.5" }}
        >
          <ImageSubContainer>
            <Image src={Image01} alt="MyImage01" />
          </ImageSubContainer>
        </FirstImageContainer>
        <SecondImagContainer
          selectedLangCode={selectedLangCode}
          initial="hidden"
          animate="visible"
          variants={image02Variants}
          transition={{ type: "tween", duration: "1.5", delay: "1" }}
        >
          <ImageSubContainer>
            <Image src={Image02} alt="MyImage01" />
          </ImageSubContainer>
        </SecondImagContainer>

        <ThirdImageContainer
          selectedLangCode={selectedLangCode}
          initial="hidden"
          animate="visible"
          variants={image03Variants}
          transition={{ type: "tween", duration: "1.5", delay: "2" }}
        >
          <ImageSubContainer>
            <Image src={Image03} alt="MyImage01" />
          </ImageSubContainer>
        </ThirdImageContainer>

        <FourthImageContainer
          selectedLangCode={selectedLangCode}
          initial="hidden"
          animate="visible"
          variants={image04Variants}
          transition={{ type: "tween", duration: "1.5", delay: "3" }}
        >
          <ImageSubContainer>
            <Image src={Image04} alt="MyImage01" />
          </ImageSubContainer>
        </FourthImageContainer>
      </ImagesWallContainer>
      <AboutComponent />
    </HomePageMainContainer>
  );
}
