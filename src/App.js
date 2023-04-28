import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignUp";
import LoginPage from "./components/Login";
import getTheme from "./theme";
import { useState, useEffect } from "react";
import { Paper, ThemeProvider } from "@mui/material";
import ThemeContext from "./themecontext";
import Appoint from "./components/Appoint";
import Doctors from "./components/Doctors";
import Details from "./components/Details";
import Cars from "./components/Cars";
import CheckoutPage from "./components/CheckOutPage";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import { FeedbackForm } from "./components/feedBack";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";

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
        <Paper
          style={{
            height: "100vh",
            backgroundColor: currentTheme.palette.backgroundColor,
            overflow: "auto",
            color: currentTheme.palette.color,
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SignupPage />} />
              <Route path="/appointment" element={<LoginPage />} />
              <Route path="/sell" element={<Appoint />} />
              <Route path="/doctor" element={<Doctors />} />
              <Route path="/buy" element={<Details />} />
              <Route path="/feedback" element={<FeedbackForm />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/cars" element={<Cars />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/aboutUs" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
          <Footer />
        </Paper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
