import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

const MainHeaderDiv = styled(motion.header)`
  position: fixed;
  z-index: 10;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  max-width: 100vw;
  &:not(.hidden) {
    transition: transform, cubic-bezier(0.4, 0, 0.2, 1), 300ms;
    transform: translateY(0%);
  }

  &.hidden {
    transition: transform, cubic-bezier(0.4, 0, 0.2, 1), 300ms;
    transition-delay: 275ms;
    transform: translateY(-100%);
  }
  @media (max-width: 768px) {
    width: 100%;

    &.hidden {
      .menuBlackout {
        height: 0;
      }
    }
  }
`;

const ULItme = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 1rem auto;
  border-radius: 1rem;
  position: relative;
  backdrop-filter: blur(10px);
  list-style: none;
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.colortheme === "light" ? "#A8DADC" : "#457B9D"};
    opacity: 50%;
    border-radius: 1rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LIItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoLink = styled.a`
  font-family: "Pacifico", cursive;
  text-decoration: none;
  font-size: 25px;
  margin-left: 10px;
  margin-right: 10px;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const MobileToggleELement = styled.button`
  z-index: 1;
  position: relative;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: rotateY(180deg);
  background: transparent;
  display: none;
  border: none;
  outline: none;
  div {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 22px;
    height: 12px;
  }
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
    &:first-of-type {
      top: 0;
    }
    &:last-of-type {
      bottom: 0;
    }
  }
  &[data-open="true"] {
    span {
      &:first-of-type {
        transform: rotate(45deg);
        top: 5px;
      }
      &:last-of-type {
        transform: rotate(-45deg);
        bottom: 5px;
      }
    }
  }
  &[data-open="true"]:hover span:first-of-type,
  &[data-open="true"]:hover span:last-of-type {
    width: 22px;
  }

  &:hover {
    span:first-of-type {
      width: 12px;
    }

    span:last-of-type {
      width: 26px;
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuItmes = styled.li`
  ul {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    list-style: none;
  }

  @media (max-width: 768px) {
    transition: transform, cubic-bezier(0.4, 0, 0.2, 1), 300ms;
    max-height: 0vh;
    overflow: hidden;

    &[data-open="true"] {
      transition: transform, cubic-bezier(0.4, 0, 0.2, 1), 300ms;
      max-height: 100vh;
      transform: translate3d(0px, 0px, 1px);
    }

    ul {
      flex-direction: column;
      gap: 2rem;
      margin: 2rem;
    }
  }
`;

const lineAnimation = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

const MenuItemNavLink = styled(NavLink)`
  text-decoration: none;
  position: relative;
  color: ${(props) => (props.colortheme === "light" ? "#1D3557" : "#F1FAEE")};
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    ${(props) =>
      props.lang === "en"
        ? css`
            left: 0;
          `
        : css`
            right: 0;
          `};

    height: 3px;
    background: ${(props) =>
      props.colortheme === "light" ? "#1D3557" : "#F1FAEE"};
    transition: all 1.5s linear;
  }
  &:hover {
    font-weight: bold;
    &::after {
      animation: ${lineAnimation} 1s;
    }
  }
`;

const MenuBlackout = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: -1;

  &[data-open="true"] {
    height: 100vh;
  }
`;

const Header = () => {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const selectedLang = useSelector((state) => state.language.selectedLang);

  const [menuState, setMenuState] = useState(false);
  const { t } = useTranslation();

  const menuContentItmes = [
    { name: t("educations"), link: "educations" },
    { name: t("experiences"), link: "experiences" },
    { name: t("projects"), link: "projects" },
    { name: t("skills"), link: "skills" },
    { name: t("contact"), link: "contact" },
  ];

  useEffect(() => {
    setMenuState(false);
  }, []);

  const menuToggler = () => {
    setMenuState((pre) => !pre);
  };

  return (
    <MainHeaderDiv
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      <ULItme colortheme={theme}>
        <LIItem>
          <LogoLink
            href="/home"
            style={{
              color: theme === "light" ? "#1D3557" : "#F1FAEE",
            }}
          >
            {t("name")}
          </LogoLink>
          <MobileToggleELement
            onClick={() => menuToggler()}
            data-open={menuState}
          >
            <div>
              <span
                style={{
                  backgroundColor: theme === "light" ? "#1D3557" : "#F1FAEE",
                }}
              ></span>
              <span
                style={{
                  backgroundColor: theme === "light" ? "#1D3557" : "#F1FAEE",
                }}
              ></span>
            </div>
          </MobileToggleELement>
        </LIItem>
        <MenuItmes data-open={menuState}>
          <ul>
            {menuContentItmes.map((item, index) => (
              <li key={index}>
                <MenuItemNavLink
                  to={`/home/${item.link}`}
                  colortheme={theme}
                  lang={selectedLang.code}
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                >
                  {item.name}
                </MenuItemNavLink>
              </li>
            ))}
          </ul>
        </MenuItmes>
      </ULItme>
      <MenuBlackout onClick={menuToggler} data-open={menuState}></MenuBlackout>
    </MainHeaderDiv>
  );
};

export default Header;
