import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLang: {
    code: navigator.language === "en" ? "en" : "ar",
    direction: navigator.language === "en" ? "ltr" : "rtl",
    img:
      navigator.language === "en"
        ? "https://cdn.bannerbuzz.com/media/wysiwyg/new-description/US-Flag.png"
        : "https://static.magflags.net/media/catalog/product/cache/b756e98438727cbd4415a0b646d85461/E/G/EG-1x1.5.png",
  },
};

const LanguageSlice = createSlice({
  name: "Lang",
  initialState,
  reducers: {
    setLang(state, action) {
      state.selectedLang = action.payload;
    },
    resetLang(state) {
      state.selectedLang = initialState.selectedLang;
    },
  },
});

export const { setLang, resetLang } = LanguageSlice.actions;

export default LanguageSlice.reducer;
