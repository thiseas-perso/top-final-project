import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./NavBar.module.css";

import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";

const NavBar = ({ onClick }) => {
  let location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notactive
            }
          >
            {(location.pathname === "/" && <HomeIcon />) || (
              <HomeOutlinedIcon />
            )}{" "}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notactive
            }
          >
            {(location.pathname === "/profile" && <PersonIcon />) || (
              <PermIdentityOutlinedIcon />
            )}{" "}
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/more"
            className={({ isActive }) =>
              isActive ? styles.active : styles.notactive
            }
          >
            <MoreHorizIcon /> More
          </NavLink>
        </li>
        <li>
          <div className={styles.modalbtn} onClick={onClick}>
            <SendIcon /> Tweet
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
