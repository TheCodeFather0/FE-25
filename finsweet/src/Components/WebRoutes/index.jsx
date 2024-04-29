import React from "react";
import Navbar from "../Navbar";
import Home from "../../Pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "../../Pages/NotFound";
import Features from "../../Pages/Features";

const WebRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
