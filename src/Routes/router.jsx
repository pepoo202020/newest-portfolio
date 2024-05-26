import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splash from "../pages/Splash/Splash";
import HomePage from "../pages/Home/HomePage.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes.js";
import { AnimatePresence } from "framer-motion";
import MainPageLayout from "../components/layout/MainPageLayout.jsx";
import Educations from "../pages/Educations/Educations.jsx";
import Experiences from "../pages/Experiences/Experiences.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import Skills from "../pages/Skills/Skills.jsx";
import Contact from "../pages/Contact/Contact.jsx";

function Routers() {
  return (
    <BrowserRouter basename="/">
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" exact element={<Splash />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/home" element={<MainPageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="educations" element={<Educations />} />
              <Route path="experiences" element={<Experiences />} />
              <Route path="projects" element={<Projects />} />
              <Route path="skills" element={<Skills />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<MainPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Routers;
