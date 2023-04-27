import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import getTheme from "./theme";
import { useState, useEffect } from "react";
import { Paper, ThemeProvider } from "@mui/material";
import ThemeContext from "./themecontext";
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeName = params.get("theme");
    setTheme(themeName || "light");
  }, []);

  const currentTheme = getTheme(theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Paper style={{height:'100vh' , backgroundColor:currentTheme.palette.backgroundColor , color:currentTheme.palette.color}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/appointment" element={<LoginPage />} />
        </Routes>
          </BrowserRouter>
          </Paper>
        </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
