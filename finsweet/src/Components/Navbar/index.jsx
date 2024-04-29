import React from "react";
import logo from "/logo.png";
import Atropos from "atropos/react";
import classNames from "classnames";
import styles from "./style.module.css";
import { NavbarLinks } from "../../MockData";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="d-flex align-items-center ">
            {NavbarLinks.map(({ id, title, to }) => {
              return (
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    classNames({
                      [styles.link]: true,
                      [styles.active]: isActive
                    })
                  }
                  to={to}
                >
                  {title}
                </NavLink>
              );
            })}
            <Atropos
              className={styles.contactBtn}
              highlight={false}
              shadow={false}
            >
              <Link to="/">Contact Us</Link>
            </Atropos>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
