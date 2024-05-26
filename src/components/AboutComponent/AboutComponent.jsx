/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

const AboutMainContainer = styled(motion.div)`
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  text-align: center;
  overflow-x: hidden;
  color: ${(props) => (props.colorTheme === "light" ? "#1D3557" : "#F1FAEE")};
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex: none;
  flex-wrap: wrap;
  gap: 10px;
  height: min-content;
  justify-content: center;
  max-width: 86%;
  overflow: hidden;
  position: sticky;
  top: 0;
  will-change: transform;
  z-index: 1;
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 80px;
  }
`;

const WordDiv = styled(motion.div)`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  opacity: 1;
  transform: none;
  flex: none;
  height: auto;
  position: relative;
  white-space: pre;
  width: auto;
`;

const WordParagraph = styled(motion.p)`
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2em;
  color: ${(props) => (props.speacial ? "#E63946" : "inherit")};
  font-weight: ${(props) => (props.speacial ? "bold" : "inherit")};
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export default function AboutComponent() {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const { t } = useTranslation();
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = t("about_section").split(" ");

  return (
    <AboutMainContainer colorTheme={theme} ref={containerRef}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            scrollYProgress={scrollYProgress}
            key={index}
            end={end}
            start={start}
            word={word}
            theme={theme}
          />
        );
      })}
    </AboutMainContainer>
  );
}

const Word = ({ scrollYProgress, start, end, word }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const specialCharachters = [
    "C++.",
    "Java,",
    "HTML,",
    "CSS,",
    "Bootstrap,",
    "JQuery.",
    "EGFWD ",
    "JavaScript,",
    "Fullstack",
    "development,",
    "Postgres",
    "SQL,",
    "AWS,",
    "Flutter,",
    "Dart,",
    "React,",
    "Next.js,",
    "MongoDB.",
  ];
  const isSpecial = (sp) => {
    if (specialCharachters.includes(sp)) {
      return true;
    } else {
      return false;
    }
  };

  console.log(isSpecial(word));
  return (
    <WordDiv
      style={{
        opacity: opacity,
      }}
    >
      <WordParagraph speacial={isSpecial(word)}>{word}</WordParagraph>
    </WordDiv>
  );
};
