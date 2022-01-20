import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./DarkmodeSlice";
import userReducer from "./userSlice";
export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userReducer,
  },
});
