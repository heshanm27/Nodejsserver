import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./DarkmodeSlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
  },
});
