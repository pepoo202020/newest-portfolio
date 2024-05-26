import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTheme:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
};

const ThemeSlice = createSlice({
  name: "Themes",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.selectedTheme = action.payload;
    },
    resetTheme(state) {
      state.selectedTheme = initialState.selectedTheme;
    },
  },
});

export const { setTheme, resetTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
