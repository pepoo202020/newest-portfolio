import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { resetTheme } from "../../store/slices/Themes/ThemeSlice";
import { resetLang } from "../../store/slices/lang/LanguageSlice";

const OnOff = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  background: transparent;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: all 0.7s ease;
  cursor: pointer;
  &:hover {
    background-color: #1d3557;
    box-shadow: 0 0 8px 6px #1d3557;
  }
  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
  &:hover svg {
    color: #f1faee;
  }
  /* Mobile Design 600px */
  @media (max-width: 768px) {
    top: 1rem;
    &:hover {
      box-shadow: 0 0 4px 3px #1d3557;
    }
  }
`;

function OnOffButton() {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const dispatch = useDispatch();

  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      color: theme === "light" ? "#1D3557" : "#F1FAEE",
      transition: { duration: 0.4 },
    });
  });

  const shutDownClick = () => {
    dispatch(resetTheme());
    dispatch(resetLang());
  };
  return (
    <OnOff animate={controls}>
      <NavLink to={"/"} onClick={() => shutDownClick()}>
        <svg
          aria-hidden="true"
          data-prefix="fas"
          data-icon="power-off"
          className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={30}
          height={30}
        >
          <path
            fill="currentColor"
            d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
          />
        </svg>
      </NavLink>
    </OnOff>
  );
}

export default OnOffButton;
