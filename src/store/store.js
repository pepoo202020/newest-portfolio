import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import i18next from "i18next";

const store = configureStore({ reducer: rootReducer });

store.subscribe(() => {
  const lang = store.getState().language.selectedLang.code;
  i18next.changeLanguage(lang);
});

export default store;
