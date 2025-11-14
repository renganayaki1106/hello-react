import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import MiniProjects from "./pages/MiniProjects";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Error from "./pages/Error";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/mini-projects" element={<MiniProjects />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
