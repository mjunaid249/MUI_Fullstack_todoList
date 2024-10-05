import React from "react";
import "./App.css";
import Appbarhere from "./components/Appbar";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Alltodos from "./pages/Alltodos";
const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Appbarhere />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Alltodos />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
