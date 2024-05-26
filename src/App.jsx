import { useEffect } from "react";
import "./App.css";
import Routers from "./Routes/router";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "./store/slices/lang/LanguageSlice";
import "../i18next";
import { motion, useAnimation } from "framer-motion";

const BodyContainer = motion.div;

function App() {
  const selectedLang = useSelector((state) => state.language.selectedLang);
  const theme = useSelector((state) => state.themes.selectedTheme);
  const controls = useAnimation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLang(selectedLang));
    controls.start({
      backgroundColor: theme === "light" ? "#F1FAEE" : "#1D3557",
      transition: { duration: 0.8, type: "spring" },
    });
  }, [selectedLang, dispatch, controls, theme]);

  return (
    <BodyContainer
      dir={selectedLang.direction}
      style={{
        backgroundColor: theme === "light" ? "#F1FAEE" : "#1D3557",
        color: theme === "light" ? "#1D3557" : "#F1FAEE",
        maxwidth: "100vw",
        minHeight: "100vh",
      }}
      animate={controls}
    >
      <Routers />
    </BodyContainer>
  );
}

export default App;
