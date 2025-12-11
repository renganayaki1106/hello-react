import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home";
import MiniProjects from "./pages/MiniProjects";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Error from "./pages/Error";
import DynamicRoute from "./components/mini-projects/DynamicRoute";
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
               <Route path="/users/:id" element={<DynamicRoute />}></Route>
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
