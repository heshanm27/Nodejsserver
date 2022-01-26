import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route/App.js";
import { BrowserRouter } from "react-router-dom";
// Import css files
import AuthContextProvider from "./Context/AuthContext";
import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AuthContextProvider>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </AuthContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
