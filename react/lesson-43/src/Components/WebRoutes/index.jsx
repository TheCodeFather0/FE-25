import React, { useContext, useEffect } from "react";
import Navbar from "../navbar";
import NotFound from "../NotFound";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Users from "../../Pages/Users";
import Contact from "../../Pages/Contact";
import { Route, Routes } from "react-router";
import UserDetail from "../../Pages/UserDetail";
import Api from "../../Pages/API";
import { IsOnlineContextProvider } from "../../Context/isOnlineContext";
import { IsLoggedInContext } from "../../Context/IsLoggedIn";
import NotLogged from "../NotLogged";
import Login from "../Login";

const WebRoutes = () => {
  const [isLogged] = useContext(IsLoggedInContext);
  return (
    <div>
      {isLogged ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <IsOnlineContextProvider>
                  <About />
                </IsOnlineContextProvider>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/users" element={<Users />} />
            <Route path="/api" element={<Api />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <footer className="bg-dark py-4 text-center text-white">
            <h2>footer</h2>
          </footer>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotLogged />} />
        </Routes>
      )}
    </div>
  );
};

export default WebRoutes;
