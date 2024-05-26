import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setTheme } from "../../store/slices/Themes/ThemeSlice.js";
import Switch from "react-switch";

const ThemeDiv = styled(motion.div)`
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

const ThemeSpanDark = styled.span`
  display: block;
  height: 100%;
  text-align: end;
  margin-right: 2px;
  color: #f1faee;
`;

const ThemeSpanLight = styled.span`
  display: block;
  height: 100%;
  text-align: end;
  margin-right: 5px;
  color: #1d3557;
`;
function ThemeConverter() {
  const theme = useSelector((state) => state.themes.selectedTheme);
  const [light, setLight] = useState(theme === "light");
  const dispatch = useDispatch();

  const themeChangeHandler = () => {
    setLight((pre) => !pre);
    if (!light) {
      dispatch(setTheme("light"));
    } else {
      dispatch(setTheme("dark"));
    }
  };

  return (
    <ThemeDiv
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1.5, delay: 1 }}
    >
      <Switch
        checked={light}
        onChange={() => themeChangeHandler()}
        offColor="#F1FAEE"
        onColor="#1D3557"
        className="react-switch"
        uncheckedIcon={
          <ThemeSpanLight>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="25px"
              width="25px"
            >
              <path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
            </svg>
          </ThemeSpanLight>
        }
        checkedIcon={
          <ThemeSpanDark>
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="20px"
              width="20px"
            >
              <path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0011.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 01232 160c32.33 0 62.15 10.65 86.24 30.79a142.22 142.22 0 0137.65 49.54 16.06 16.06 0 0011.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28zM510.53 209.79a16.34 16.34 0 00-1.35-15.8 16 16 0 00-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28-55.3.4-101.38-45-101.38-100.31 0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 00-1.85-16.33 16 16 0 00-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 003.19 4.79 162.54 162.54 0 0176.31 35.59 172.58 172.58 0 0139.64 47.84 16.35 16.35 0 009.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 005.16.57 129.12 129.12 0 0046.69-55.43z" />
            </svg>
          </ThemeSpanDark>
        }
        id="icon-switch"
      />
    </ThemeDiv>
  );
}

export default ThemeConverter;
