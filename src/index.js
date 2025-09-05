import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
      <Toaster />
    </BrowserRouter>
  </Provider>
);
