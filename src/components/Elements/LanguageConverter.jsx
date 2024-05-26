import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setLang } from "../../store/slices/lang/LanguageSlice.js";
import { languages } from "../../../languages.js";

const LangDiv = styled(motion.div)`
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  @media (max-width: 768px) {
    gap: 1px;
  }
`;

const ImageDiv = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
  @media (max-width: 768px) {
    height: 35px;
    width: 35px;
  }
`;
const LanguageConverter = () => {
  const selectedLang = useSelector((state) => state.language.selectedLang);

  const dispatch = useDispatch();
  const langChangeHandler = (lang) => {
    dispatch(setLang(lang));
  };
  return (
    <LangDiv
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1.5, delay: 1.5 }}
    >
      {languages.map((lang) => (
        <ImageDiv
          src={lang.img}
          alt={lang.code}
          key={lang.code}
          style={{
            opacity: selectedLang.code === lang.code ? 0.2 : 1,
          }}
          onClick={() => langChangeHandler(lang)}
        />
      ))}
    </LangDiv>
  );
};

export default LanguageConverter;
