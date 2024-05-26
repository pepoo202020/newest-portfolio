/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BurgerImage from "../../assets/BurgerRestaurant.png";
import HikingImage from "../../assets/HikingWebsite.png";
import DeakonsResults from "../../assets/StAbaderDeakonsResults.png";
import { Link } from "react-router-dom";

const MainProjectsDiv = styled.div`
  max-width: 100vw;
  margin: 0 5%;
  padding-top: 100px;
`;

const SubMainProjectsDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: clip;
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;
`;
const ProjectsMianHeader = styled(motion.h1)`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;

const ProjectTagsDiv = styled(motion.div)`
  padding-bottom: 1.5rem;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

const ProjectTagBtn = styled(motion.div)`
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

const ProjectsUl = styled.ul`
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    gap: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-bottom: 100px;
  }
`;

const ProjectCardDiv = styled.div`
  height: 18rem;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  overflow: hidden;
  position: relative;
`;
const ImageLinkContainer = styled.div`
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  background-color: rgb(24 24 24 / 0);
  justify-content: center;
  opacity: 0;
  align-items: center;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
    background-color: rgb(24 24 24 / 1);
  }
`;

const ImageContainer = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const ItemLink = styled(Link)`
  border: 2px solid rgba(173, 183, 190, 1);
  border-radius: 9999px;
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.5rem;
  position: relative;
  color: inherit;
  text-decoration: inherit;
`;

const ItemSVG = styled.svg`
  color: rgba(173, 183, 190, 1);
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0) skewX(0) skewY(0) scaleX(1)
    scaleY(1);
  &:hover {
    color: white;
  }
`;

const ProjectCardContent = styled.div`
  background-color: #a8dada;
  color: #1d3557;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
`;

const ProjectCardTitle = styled.h5`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

const SKillsContianer = styled.ul`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  row-gap: 0.5rem;
  font-weight: 600;
  font-size: 0.5rem;
  list-style: none;
`;

const SkillContianer = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: center;
  gap: 0.1rem;
  border-radius: 9rem;
  padding: 0.3rem 0.5rem;
  text-transform: uppercase;
  color: #1d3557;
  margin-top: 0.5rem;
  border: 1px solid #1d3557;
`;

const SkillImage = styled.img`
  height: 15px;
  padding: 0 1px;
`;

const Projects = () => {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const { t } = useTranslation();
  const [tag, setTag] = useState(t("all"));
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const tags = [t("all"), t("frontend"), t("backend")];
  const projectsData = [
    {
      id: 0,
      title: "Burger Website",
      description:
        "downloaded the burger restaurant website template, used Photoshop to open it, and then used front-end development languages (HTML, CSS, JS), and then used Github to make it live, the website is responsible for all devices.",
      image: BurgerImage,
      tag: [t("all"), t("frontend")],
      gitUrl: "https://github.com/pepoo202020/burgerResturant",
      url: "https://pepoo202020.github.io/burgerResturant/",

      skills: [
        {
          skillName: "HTML",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          skillName: "CSS",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          skillName: "Javascript",
          skillImage:
            "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
        },
        {
          skillName: "Github",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        },
        {
          skillName: "VS Code",
          skillImage: "https://carleton.ca/scs/wp-content/uploads/vscode-1.png",
        },
        {
          skillName: "Photoshop",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png",
        },
      ],
    },
    {
      id: 1,
      title: "Hiking Website",
      description:
        "downloaded the Hiking website template, used Photoshop to open it, and then used front-end development languages (HTML, CSS, JS, Bootstrap, JQuery), and then used Github to make it live, the website is responsible for all devices",
      image: HikingImage,
      tag: [t("all"), t("frontend")],
      gitUrl: "https://github.com/pepoo202020/hiking",
      url: "https://pepoo202020.github.io/hiking/",

      skills: [
        {
          skillName: "HTML",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        },
        {
          skillName: "CSS",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          skillName: "Javascript",
          skillImage:
            "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
        },
        {
          skillName: "JQuery",
          skillImage:
            "https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",
        },
        {
          skillName: "Github",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        },
        {
          skillName: "VS Code",
          skillImage: "https://carleton.ca/scs/wp-content/uploads/vscode-1.png",
        },
        {
          skillName: "Photoshop",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png",
        },
      ],
    },
    {
      id: 3,
      title: "Results of School of Deacons",
      description:
        "front end website for deacons contains of 2 pages one for search name and then click, this name search in json file and get result of it and show it in another page",
      image: DeakonsResults,
      tag: [t("all"), t("frontend")],
      gitUrl: "https://github.com/pepoo202020/natega",
      url: "https://natega-beige.vercel.app/",

      skills: [
        {
          skillName: "React JS",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png",
        },
        {
          skillName: "CSS",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          skillName: "Javascript",
          skillImage:
            "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
        },
        {
          skillName: "Tailwind CSS",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
        },
        {
          skillName: "Github",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png",
        },
        {
          skillName: "VS Code",
          skillImage: "https://carleton.ca/scs/wp-content/uploads/vscode-1.png",
        },
        {
          skillName: "Photoshop",
          skillImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/800px-Adobe_Photoshop_CC_icon.svg.png",
        },
      ],
    },
  ];
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <MainProjectsDiv>
      <SubMainProjectsDiv>
        <ProjectsMianHeader
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          {t("my_projects")}
        </ProjectsMianHeader>
        <ProjectTagsDiv>
          {tags.map((tagItem, i) => (
            <ProjectTag
              key={i}
              onClick={handleTagChange}
              name={tagItem}
              isSelected={tag === tagItem}
              theme={theme}
              i={i}
            />
          ))}
        </ProjectTagsDiv>
        <ProjectsUl>
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: index * 0.4 }}
              style={{ height: "100%" }}
            >
              <ProjectCard
                imgUrl={project.image}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.url}
                title={project.title}
                skills={project.skills}
              />
            </motion.li>
          ))}
        </ProjectsUl>
      </SubMainProjectsDiv>
    </MainProjectsDiv>
  );
};

const ProjectTag = ({ name, onClick, isSelected, theme, i }) => {
  return (
    <ProjectTagBtn
      colortheme={theme}
      className={`${isSelected ? "selected" : "notSelected"}`}
      onClick={() => onClick(name)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 2, delay: i * 0.5 }}
    >
      {name}
    </ProjectTagBtn>
  );
};

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  skills,
}) => {
  const selectedLangCode = useSelector(
    (state) => state.language.selectedLang.code
  );
  return (
    <div>
      <ProjectCardDiv>
        <ImageLinkContainer>
          <ItemLink to={gitUrl} target="_blank">
            <ItemSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              ariaHidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></path>
            </ItemSVG>
          </ItemLink>
          <ItemLink to={previewUrl} target="_blank">
            <ItemSVG
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              ariaHidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </ItemSVG>
          </ItemLink>
        </ImageLinkContainer>
        <ImageContainer src={imgUrl} alt={title} />
      </ProjectCardDiv>
      <ProjectCardContent>
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <p style={{ textAlign: selectedLangCode === "en" ? "start" : "end" }}>
          {description}
        </p>
        <SKillsContianer>
          {skills.map((skill, index) => (
            <SkillContianer key={index}>
              <SkillImage src={skill.skillImage} alt={`skill No. ${index}`} />
              <span style={{ flexGrow: 1, textAlign: "center" }}>
                {skill.skillName}
              </span>
            </SkillContianer>
          ))}
        </SKillsContianer>
      </ProjectCardContent>
    </div>
  );
};

export default Projects;
