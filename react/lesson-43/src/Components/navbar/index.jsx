import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IsLoggedInContext } from "../../Context/IsLoggedIn";

const Navbar = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/users", title: "Users" },
    { path: "/api", title: "Api" },
  ];
  const [,,logOutFunct]= useContext(IsLoggedInContext)

  const handleLogout = () => {
    const isOK = confirm("qardasim cixmaq isteyirsen?")
    if (isOK) {
      logOutFunct();
    }
  }
  return (
    <nav
      className="bg-dark"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div>
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
      </div>
      <button onClick={handleLogout}>logout</button>
    </nav>
  );
};

export default Navbar;
