import React, { useRef } from "react";
import "./topbar.css";
import logo from "../../assets/images/texas.png";
import { NavLink } from "react-router-dom";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/resources",
    display: "Resources",
  },
  {
    path: "/members",
    display: "Members",
  },
  {
    path: "/ptamacs",
    display: "PTA MACS",
  },
  {
    path: "/courses",
    display: "Courses",
  },
];

export default function Topbar() {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <div className="topbarContainer nav__wrapper d-flex align-items-center justify-content-center">
      <div className="left">
        <div className="logo">
          <img className="topbarImg" src={logo} alt="" />
        </div>
      </div>

      <div className="navigation" ref={menuRef} onClick={toggleMenu}>
        <ul className="menu d-flex align-items-center gap-3">
          {nav__links.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active__link" : "")}>
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
