/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import styled from "styled-components";
import "react-vertical-timeline-component/style.min.css";

const ExperiencesMainContainer = styled(motion.div)`
  max-width: 100vw;
  margin: 0 5%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperiencesMainHeader = styled.h2`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const ExperiencesContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`;

const Vertical = styled(VerticalTimeline)`
  &::before {
    background: ${(props) =>
      props.themecolor === "light" ? "#1D3557" : "#F1FAEE"};
  }
  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px
        ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")},
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
  .vertical-timeline-element-date {
    color: ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const ExperienceCardIconContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const ExperienceCardIcon = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
`;
const ExperienceCardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: "#1D3557";
`;

const ExperienceCardCompanyName = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: "#1D3557";
`;
const ExperienceCardUL = styled.ul`
  list-style-type: disc;
  margin-top: 1.25rem;
  margin-left: 1.25rem;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ExperienceCardLI = styled.li`
  color: #1d3557;
  padding-left: 0.25rem;
  font-size: 14px;
  letter-spacing: 0.05em;
`;

const Experiences = () => {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const selectedLangCode = useSelector(
    (state) => state.language.selectedLang.code
  );
  const { t } = useTranslation();

  const experineces = [
    {
      title: t("experience_title_01"),
      companyName: "M.A.S. Masr For Distribution",
      icon: "https://www.masegy.com/assets/images/MASMisrLogoGreen.png",
      iconBg: "#a8dadc",
      date: "June 2022 - Present",
      points: [
        t("experience_point_01_01"),
        t("experience_point_02_01"),
        t("experience_point_03_01"),
      ],
    },
    {
      title: t("degree_subtitle_02"),
      companyName: "Udacity",
      icon: "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      iconBg: "#a8dadc",
      date: "August 2022 - August 2022",
      points: [
        t("degree_desc_01_02"),
        t("degree_desc_02_02"),
        t("degree_desc_03_02"),
      ],
    },
    {
      title: t("degree_subtitle_03"),
      companyName: "Udacity",
      icon: "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      iconBg: "#a8dadc",
      date: "October 2022 - October 2022",
      points: [
        t("degree_desc_01_03"),
        t("degree_desc_02_03"),
        t("degree_desc_03_03"),
      ],
    },
    {
      title: t("degree_subtitle_04"),
      companyName: "Udacity",
      icon: "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      iconBg: "#a8dadc",
      date: "Junuary 2023 - March 2023",
      points: [
        t("degree_desc_01_04"),
        t("degree_desc_02_04"),
        t("degree_desc_03_04"),
        t("degree_desc_04_04"),
      ],
    },
  ];

  return (
    <ExperiencesMainContainer
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: "spring", duration: 1.25 }}
    >
      <ExperiencesMainHeader>{t("experiences")}</ExperiencesMainHeader>
      <ExperiencesContainer>
        <Vertical themecolor={theme}>
          {experineces.map((ex, index) => (
            <ExperienceCard
              key={index}
              experience={ex}
              langCode={selectedLangCode}
              theme={theme}
              i={index}
            />
          ))}
        </Vertical>
      </ExperiencesContainer>
    </ExperiencesMainContainer>
  );
};

const ExperienceCard = ({ experience, langCode, theme, i }) => {
  let position, contentArrowStyle;

  if (langCode === "ar") {
    position = "right";
    if (i % 2 === 0) {
      contentArrowStyle = {
        borderRight: `7px solid ${theme === "light" ? "#232631" : "#F1FAEE"}`,
      };
    } else {
      contentArrowStyle = {
        borderRight: `7px solid ${theme === "light" ? "#232631" : "#F1FAEE"}`,
      };
    }
  } else {
    if (i % 2 === 0) {
      position = "right";
      contentArrowStyle = {
        borderRight: `7px solid ${theme === "light" ? "#232631" : "#F1FAEE"}`,
      };
    } else {
      position = "left";
      contentArrowStyle = {
        borderRight: `7px solid ${theme === "light" ? "#232631" : "#F1FAEE"}`,
      };
    }
  }
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#a8dadc",
        color: "#1D3557",
      }}
      position={position}
      contentArrowStyle={contentArrowStyle}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <ExperienceCardIconContainer>
          <ExperienceCardIcon
            src={experience.icon}
            alt={experience.companyName}
          />
        </ExperienceCardIconContainer>
      }
    >
      <div>
        <ExperienceCardTitle>{experience.title}</ExperienceCardTitle>
        <ExperienceCardCompanyName style={{ margin: 0 }}>
          {experience.companyName}
        </ExperienceCardCompanyName>
      </div>

      <ExperienceCardUL>
        {experience.points.map((point, index) => (
          <ExperienceCardLI
            colortheme={theme}
            key={`experience-point-${index}`}
          >
            {point}
          </ExperienceCardLI>
        ))}
      </ExperienceCardUL>
    </VerticalTimelineElement>
  );
};

export default Experiences;
