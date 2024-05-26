/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";

const EducationsContainerMainContainer = styled.div`
  width: 90%;
  padding: 20px 10px;
  margin: 4rem auto 0;
  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`;

const EducationsContainerMainHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const EducationsContainerHeader = styled(motion.div)`
  width: 100%;
`;

const EducationsContainerHeaderContent = styled.h1`
  font-size: 40px;
  line-height: 1.1;
  text-align: center;
  width: 100%;
  color: ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const EducationsContainerBody = styled.div``;

const DegreeCardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DegreeCardImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  transform: scale(0.9);
  width: 200px;
  height: auto;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  box-shadow: 5px 5px 5px
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const DegreeCardBody = styled(motion.div)`
  border-bottom: 1px solid
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  border-left: 1px solid
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  border-right: 1px solid
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  border-radius: 7px;
  margin: 10px;
  box-shadow: 5px 5px 5px
    ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const DegreeCardBodyHeader = styled.div`
  max-width: inherit;
  display: flex;
  border-radius: 7px 7px 0px 0px;
  padding: 10px;
  background-color: #a8dadc;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DegreeCardBodyHeaderTitleContainer = styled.div`
  color: #1d3557;
  align-items: flex-start;
  width: 80%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DegreeCardBodyHeaderTitle = styled.h2`
  font-size: 23px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DegreeCardBodyHeaderSubtitle = styled.h3`
  font-size: 18px;
  margin-top: 7px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const DegreeCardBodyHeaderDurationContainer = styled.div`
  color: #1d3557;
  width: 20%;
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    width: 100%;
  }
`;

const DegreeCardBodyHeaderDuration = styled.h3`
  font-size: 16px;
  padding-right: 10px;
  float: ${(props) => (props.selectedlang === "en" ? "right" : "left")};
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    float: ${(props) => (props.selectedlang === "en" ? "left" : "right")};
  }
`;

const DegreeCardBodyContent = styled.div`
  max-width: inherit;
  border-radius: 0px 0px 7px 7px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const DegreeCardBodyContentList = styled.p`
  color: ${(props) => (props.themecolor === "light" ? "#1D3557" : "#F1FAEE")};
  padding-left: 10px;
  padding-right: 10px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  margin: 5px 0;
  span {
    overflow: visible;
  }
`;

const VisitButton = styled.div`
  background-color: ${(props) =>
    props.themecolor === "light" ? "#1D3557" : "#F1FAEE"};
  color: ${(props) => (props.themecolor === "light" ? "#F1FAEE" : "#1D3557")};
  margin: 0px 10px 10px 0px;
  padding: 10px;
  border-radius: 7px;
  border: 0px;
  float: ${(props) => (props.selectedlang === "en" ? "right" : "left")};
`;

const VisitButtonP = styled.p`
  margin: 0px;
  padding: 0px;
`;

const EducationsContainer = () => {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const { t } = useTranslation();
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const degrees = [
    {
      title: t("degree_title_01"),
      subtitle: t("degree_subtitle_01"),
      logo_path:
        "https://networks.au-ibar.org/show/assiut-university/wiki-image/AU+REC+logos+%2827%29.png",
      alt_name: t("degree_alt_name_01"),
      duration: t("degree_duration_01"),
      descriptions: [
        t("degree_desc_01_01"),
        t("degree_desc_02_01"),
        t("degree_desc_03_01"),
      ],
      website_link: "https://www.aun.edu.eg/main/",
    },
    {
      title: t("degree_title_02"),
      subtitle: t("degree_subtitle_02"),
      logo_path:
        "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      alt_name: t("degree_alt_name_02"),
      duration: t("degree_duration_02"),
      descriptions: [
        t("degree_desc_01_02"),
        t("degree_desc_02_02"),
        t("degree_desc_03_02"),
      ],
      website_link:
        "https://egfwd.com/specializtion/web-development-foundations/",
    },
    {
      title: t("degree_title_03"),
      subtitle: t("degree_subtitle_03"),
      logo_path:
        "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      alt_name: t("degree_alt_name_03"),
      duration: t("degree_duration_03"),
      descriptions: [
        t("degree_desc_01_03"),
        t("degree_desc_02_03"),
        t("degree_desc_03_03"),
      ],
      website_link:
        "https://egfwd.com/specializtion/web-development-professional/",
    },
    {
      title: t("degree_title_04"),
      subtitle: t("degree_subtitle_04"),
      logo_path:
        "https://static-00.iconduck.com/assets.00/udacity-icon-256x256-hfb3pjx3.png",
      alt_name: t("degree_alt_name_04"),
      duration: t("degree_duration_04"),
      descriptions: [
        t("degree_desc_01_04"),
        t("degree_desc_02_04"),
        t("degree_desc_03_04"),
        t("degree_desc_04_04"),
      ],
      website_link: "https://egfwd.com/specializtion/web-development-advanced/",
    },
  ];

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

  return (
    <EducationsContainerMainContainer ref={sectionRef}>
      <EducationsContainerMainHeaderContainer>
        <EducationsContainerHeader
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <EducationsContainerHeaderContent themecolor={theme}>
            {t("Degrees_Received")}
          </EducationsContainerHeaderContent>
        </EducationsContainerHeader>
      </EducationsContainerMainHeaderContainer>
      <EducationsContainerBody>
        {degrees.map((deg, index) => (
          <DegreeCard key={index} degree={deg} theme={theme} />
        ))}
      </EducationsContainerBody>
    </EducationsContainerMainContainer>
  );
};

const DegreeCard = ({ degree, theme }) => {
  const selectedLangCode = useSelector(
    (state) => state.language.selectedLang.code
  );
  const { t } = useTranslation();
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [controls]);
  return (
    <DegreeCardContainer ref={sectionRef}>
      {degree.logo_path && (
        <DegreeCardImage
          initial={{ opacity: 0, x: selectedLangCode === "en" ? -40 : 40 }}
          animate={controls}
          transition={{ duration: 2, ease: "easeOut" }}
          themecolor={theme}
          src={degree.logo_path}
          alt={degree.alt_name}
        />
      )}
      <DegreeCardBody
        initial={{ opacity: 0, x: selectedLangCode === "en" ? 40 : -40 }}
        animate={controls}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ width: degree.logo_path ? "90%" : "100%" }}
        themecolor={theme}
      >
        <DegreeCardBodyHeader>
          <DegreeCardBodyHeaderTitleContainer>
            <DegreeCardBodyHeaderTitle>
              {degree.title}
            </DegreeCardBodyHeaderTitle>
            <DegreeCardBodyHeaderSubtitle>
              {degree.subtitle}
            </DegreeCardBodyHeaderSubtitle>
          </DegreeCardBodyHeaderTitleContainer>
          <DegreeCardBodyHeaderDurationContainer>
            <DegreeCardBodyHeaderDuration selectedlang={selectedLangCode}>
              {degree.duration}
            </DegreeCardBodyHeaderDuration>
          </DegreeCardBodyHeaderDurationContainer>
        </DegreeCardBodyHeader>
        <DegreeCardBodyContent>
          {degree.descriptions.map((desc, i) => {
            return (
              <DegreeCardBodyContentList key={i} themecolor={theme}>
                {desc.split(" ").map((word, index) => (
                  <span
                    key={index}
                    style={{
                      color:
                        word.includes(`'Good'`) || word.includes("جيد.")
                          ? "#E63946"
                          : "inherit",
                      fontWeight:
                        word.includes(`'Good'`) || word.includes("جيد.")
                          ? "bold"
                          : "inherit",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </DegreeCardBodyContentList>
            );
          })}
          {degree.website_link && (
            <a
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisitButton themecolor={theme} selectedlang={selectedLangCode}>
                <VisitButtonP>{t("degree_visit_website")}</VisitButtonP>
              </VisitButton>
            </a>
          )}
        </DegreeCardBodyContent>
      </DegreeCardBody>
    </DegreeCardContainer>
  );
};

export default EducationsContainer;
