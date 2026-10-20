// import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import "./../styles/Navigation.css";
import { useState } from "react";

export function Nav() {
  const links = [
    { name: "Головна", url: "/" },
    { name: "Біографія", url: "/bio" },
    { name: "Соц. Мережі", url: "/social" },
    { name: "Музика", url: "/music" },
    { name: "Галерея", url: "/gallery" },
  ];

  const [active, setActive] = useState(false);

  return (
    <nav className="navigation">
      <button
        onClick={() => setActive(!active)}
        type="button"
        className="open-nav"
      >
        <svg
          className={active ? "open-nav-arrow active" : "open-nav-arrow"}
          width="32"
          height="64"
          viewBox="0 0 32 64"
          fill="none"
          xmlns="http://w3.org"
        >
          <path
            d="M4 4L28 32L4 60"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <ul className={active ? "nav-list active" : "nav-list"}>
        {links.map((link) => (
          <li className="nav-item" key={link.url}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active-page" : "nav-link"
              }
              to={link.url}
              onClick={() => setActive(false)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
