import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/users", title: "Users" },
  ];
  return (
    <nav className="bg-dark">
      {links.map(({ path, title }) => {
        return (
          <NavLink
            key={path}
            to={path}
            className="text-white text-decoration-none py-2 px-3 d-inline-block"
          >
            {title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
