import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const languages = [
    { name: "All", param: "all" },
    { name: "Javascript", param: "javascript" },
    { name: "Typescript", param: "ts" },
    { name: "Python", param: "python" },
    { name: "C++", param: "cpp" },
    { name: "Java", param: "java" },
  ];

  return (
    <ul>
      <li key="homeLink">
        <NavLink
          className={(navData) => (navData.isActive ? "activeLink" : "")}
          to={`/`}
        >
          Home
        </NavLink>
      </li>
      {languages.map(({ name, param }) => (
        <li key={param}>
          <NavLink
            className={(navData) => (navData.isActive ? "activeLink" : "")}
            to={`/popular/${param}`}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
