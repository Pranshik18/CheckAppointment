import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import getTheme from "./theme";
import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeName = params.get("theme");
    setTheme(themeName || "default");
  }, []);

  const currentTheme = getTheme(theme);

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/appointment" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
