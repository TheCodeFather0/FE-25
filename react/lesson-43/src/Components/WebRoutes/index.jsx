import React from "react";
import Navbar from '../navbar'
import NotFound from "../NotFound";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Users from "../../Pages/Users";
import Contact from "../../Pages/Contact";
import { Route, Routes } from 'react-router'
import UserDetail from "../../Pages/UserDetail";

const WebRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <footer className="bg-dark py-4 text-center text-white">
        <h2>footer</h2>
      </footer>
    </div>
  );
};

export default WebRoutes;
