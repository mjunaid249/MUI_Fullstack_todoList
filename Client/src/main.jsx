import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

import "./index.css";
import { blueGrey, teal } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: blueGrey,
  },
});

import { ToastContainer } from "react-toastify";
import * as React from "react";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ToastContainer />
    <App />
  </ThemeProvider>
);
