import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const languages = [
    { name: "All", param: "all" },
    { name: "Javascript", param: "js" },
    { name: "Typescript", param: "ts" },
    { name: "Python", param: "python" },
    { name: "C++", param: "cpp" },
    { name: "Java", param: "java" },
  ];
  const addActiveLink = (navData) => (navData.isActive ? "activeLink" : "");

  return (
    <ul>
      <li key="homeLink" className="homeLink">
        <NavLink className={addActiveLink} to={`/`}>
          Home
        </NavLink>
      </li>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink className={addActiveLink} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
