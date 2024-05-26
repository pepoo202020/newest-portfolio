/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AiFillOpenAI } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  DiBrackets,
  DiJqueryLogo,
  DiMongodb,
  DiMysql,
  DiSublime,
} from "react-icons/di";
import {
  FaAws,
  FaBootstrap,
  FaChrome,
  FaCss3Alt,
  FaEdge,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { MdOutlinePhp } from "react-icons/md";
import {
  PiMicrosoftOutlookLogoFill,
  PiMicrosoftWordLogoBold,
} from "react-icons/pi";
import { RiFlutterFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobeaftereffects,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiAndroidstudio,
  SiDart,
  SiExpress,
  SiI18Next,
  SiMicrosoftaccess,
  SiMicrosoftexcel,
  SiNestjs,
  SiPhpmyadmin,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainSkillsContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SkillsTagsDiv = styled.div`
  padding-bottom: 1.5rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SkillTagBtn = styled(motion.div)`
  &.selected {
    color: ${(props) => (props.colortheme === "light" ? "#F1FAEE" : "#1D3557")};
    border-color: rgba(
      ${(props) =>
        props.colortheme === "light" ? "29, 53, 87" : "241, 250, 238"},
      1
    );
    background-color: ${(props) =>
      props.colortheme === "light" ? "#1D3557" : "#F1FAEE"};
  }
  &.notSelected {
    color: ${(props) => (props.colortheme === "light" ? "#1D3557" : "#F1FAEE")};
    border-color: ${(props) =>
      props.colortheme === "light" ? "#1D3557" : "#F1FAEE"};
    &:hover {
      border-color: rgba(
        ${(props) =>
          props.colortheme === "light" ? "241, 250, 238" : "29, 53, 87"},
        1
      );
    }
  }
  border-radius: 9999px;
  cursor: pointer;
  text-transform: none;
  background-image: none;
  font-size: 1.25rem;
  line-height: 1.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: transparent;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    flex-shrink: 0;
    margin-top: 0;
    max-width: 100%;
  }
`;

const SkillCardContainer = styled(motion.div)`
  flex: 0 0 auto;
  width: 15%;
  border: 1.7px solid
    ${(props) => (props.colortheme === "light" ? "#1D3557" : "#F1FAEE")};
  border-radius: 7px;
  box-shadow: 4px 5px 4px 3px
    ${(props) => (props.colortheme === "light" ? "#1D3557" : "#F1FAEE")};
  display: table;
  font-size: 7em;
  margin: 18px;
  opacity: 0.93;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  transition: all 0.4s ease 0s;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    width: 33%;
  }
`;

const Skills = () => {
  const { t } = useTranslation();
  const theme = useSelector((state) => state.themes.selectedTheme);
  const [tag, setTag] = useState(t("all"));
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const selectedLangCode = useSelector(
    (state) => state.language.selectedLang.code
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 }); // Scroll to top on tag change
  }, [tag, controls]);
  useEffect(() => {
    setTag(t("all"));
  }, [selectedLangCode, t]);

  const tags = [
    t("all"),
    t("frontend"),
    t("backend"),
    t("databases"),
    t("programs"),
    t("others"),
  ];
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const skills = [
    {
      skillName: t("my_skills"),
      skillsContent: [
        {
          tag: [t("all"), t("frontend")],
          skill: [
            { skillName: "html", icon: <FaHtml5 /> },
            { skillName: "css", icon: <FaCss3Alt /> },
            { skillName: "sass", icon: <FaSass /> },
            { skillName: "bootstrap", icon: <FaBootstrap /> },
            { skillName: "tailwendcss", icon: <RiTailwindCssFill /> },
            { skillName: "styledcomponents", icon: <SiStyledcomponents /> },
            { skillName: "javascript", icon: <IoLogoJavascript /> },
            { skillName: "jquery", icon: <DiJqueryLogo /> },
            { skillName: "typescript", icon: <SiTypescript /> },
            { skillName: "react js", icon: <FaReact /> },
            { skillName: "redux", icon: <SiRedux /> },
            { skillName: "i18next", icon: <SiI18Next /> },
            { skillName: "nextjs", icon: <RiNextjsFill /> },
            { skillName: "reactrouter", icon: <SiReactrouter /> },
          ],
        },
        {
          tag: [t("all"), t("backend")],
          skill: [
            { skillName: "php", icon: <MdOutlinePhp /> },
            { skillName: "laravel", icon: <FaLaravel /> },
            { skillName: "nodejs", icon: <FaNodeJs /> },
            { skillName: "express", icon: <SiExpress /> },
            { skillName: "nestjs", icon: <SiNestjs /> },
          ],
        },
        {
          tag: [t("all"), t("databases")],
          skill: [
            { skillName: "mongodb", icon: <DiMongodb /> },
            { skillName: "postgressql", icon: <BiLogoPostgresql /> },
            { skillName: "mysql", icon: <DiMysql /> },
            { skillName: "firebase", icon: <IoLogoFirebase /> },
          ],
        },
        {
          tag: [t("all"), t("programs")],
          skill: [
            { skillName: "vscode", icon: <VscVscode /> },
            { skillName: "androidstudio", icon: <SiAndroidstudio /> },
            { skillName: "phpmyadmin", icon: <SiPhpmyadmin /> },
            { skillName: "barckets", icon: <DiBrackets /> },
            { skillName: "sublime", icon: <DiSublime /> },
            { skillName: "postman", icon: <SiPostman /> },
            { skillName: "photoshop", icon: <SiAdobephotoshop /> },
            { skillName: "figma", icon: <FaFigma /> },
            { skillName: "xd", icon: <SiAdobexd /> },
            { skillName: "aftereffect", icon: <SiAdobeaftereffects /> },
            { skillName: "indesign", icon: <SiAdobeindesign /> },
            { skillName: "word", icon: <PiMicrosoftWordLogoBold /> },
            { skillName: "excel", icon: <SiMicrosoftexcel /> },
            { skillName: "access", icon: <SiMicrosoftaccess /> },
            { skillName: "outlook", icon: <PiMicrosoftOutlookLogoFill /> },
            { skillName: "chrome", icon: <FaChrome /> },
            { skillName: "edge", icon: <FaEdge /> },
          ],
        },
        {
          tag: [t("all"), t("others")],
          skill: [
            { skillName: "aws", icon: <FaAws /> },
            { skillName: "github", icon: <FaGithub /> },
            { skillName: "wordpress", icon: <FaWordpress /> },
            { skillName: "java", icon: <FaJava /> },
            { skillName: "flutter", icon: <RiFlutterFill /> },
            { skillName: "dart", icon: <SiDart /> },
            { skillName: "openai", icon: <AiFillOpenAI /> },
          ],
        },
      ],
    },
  ];

  const filteredSkills = skills[0].skillsContent.filter((sc) =>
    sc.tag.includes(tag)
  );

  return (
    <MainSkillsContainer>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, type: "spring", delay: 0.5 }}
        style={{
          fontSize: "3em",
          textAlign: "center",
        }}
      >
        {t("my_skills")}
      </motion.h1>
      <SkillsTagsDiv>
        {tags.map((tagItem, i) => (
          <SkillTag
            key={i}
            onClick={handleTagChange}
            name={tagItem}
            isSelected={tag === tagItem}
            theme={theme}
            i={i}
          />
        ))}
      </SkillsTagsDiv>
      <SkillsContainer>
        {filteredSkills.map((s, index) => (
          <React.Fragment key={index}>
            {s.skill.map((sci, i) => (
              <SkillCardContainer
                ref={sectionRef}
                colortheme={theme}
                key={i}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 2,
                  type: "spring",
                  delay: i * 0.5,
                }}
              >
                {sci.icon}
              </SkillCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SkillsContainer>
    </MainSkillsContainer>
  );
};

const SkillTag = ({ name, onClick, isSelected, theme, i }) => {
  return (
    <SkillTagBtn
      colortheme={theme}
      className={`${isSelected ? "selected" : "notSelected"}`}
      onClick={() => onClick(name)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 2, delay: i * 0.5 }}
    >
      {name}
    </SkillTagBtn>
  );
};

export default Skills;
