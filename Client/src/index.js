import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route/App.js";
import { BrowserRouter } from "react-router-dom";
// Import css files
import AuthContextProvider from "./Context/AuthContext";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.render(
  <Provider store={store}>
    <AuthContextProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>,
  document.getElementById("root")
);
