import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from 'notistack';
import "./index.css";
import App from "app/app";

ReactDOM.render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{horizontal: "right", vertical: "bottom"}}>
    <App />
    </SnackbarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
