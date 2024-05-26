import { combineReducers } from "@reduxjs/toolkit";
import LanguageSlice from "./slices/lang/LanguageSlice";
import ThemeSlice from "./slices/Themes/ThemeSlice";

const rootReducer = combineReducers({
  language: LanguageSlice,
  themes: ThemeSlice,
});

export default rootReducer;
