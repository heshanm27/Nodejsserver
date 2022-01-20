import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: {
    darkModeSet: false,
  },
  reducers: {
    changeDarkMode: (state, action) => {
      state.darkModeSet = !state.darkModeSet;
    },
  },
});

export const { changeDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
